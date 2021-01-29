import React, { useState, useEffect, memo } from 'react';
import clsx from 'clsx';
import { Grid, Button, IconButton, Typography, makeStyles } from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import moment from 'moment';
import 'moment/locale/es-mx';

const useStyles = makeStyles(() => ({
  
}));

const RangeDatePicker = () => {
  const [actualDate, setActualDate] = useState(moment().format('YYYY-MM-DD'));
  const [focusedDate, setFocusedDate] = useState(moment().format('YYYY-MM-DD'));
  const [focusedDate2, setFocusedDate2] = useState(moment().add(7, 'days').format('YYYY-MM-DD'));
  const [selectedDates, setSelectedDates] = useState({
    start: focusedDate,
    end: focusedDate2
  });
  const [displayDate, setDisplayDate] = useState(moment().format('YYYY-MM-DD'));
  const [buttons, setButtons] = useState([]);

  const classes = useStyles();
  
  useEffect(() => {
    const startWeekDay = parseInt(moment(displayDate).startOf('month').format('e'));
    const actualMonthDays = parseInt(moment(displayDate).endOf('month').format('D'));
    const pastMonthEnd = parseInt(moment(displayDate).subtract(1, 'months').endOf('month').format('D'));
    const pastMonthStart = startWeekDay === 0 ? 0 : pastMonthEnd
      - startWeekDay + 1;
    if (pastMonthStart !== 0) {
      for (let i = pastMonthStart; i <= pastMonthEnd; i++) {
        setButtons(prevButtons => [ ...prevButtons, {
          key: moment(moment(displayDate).subtract(1, 'months').format(`YYYY-MM-${i}`)).format  ('YYYY-MM-DD'),
          type: 'past',
          day: i
        }]);
      }
    }
    for (let i = 1; i <= actualMonthDays; i++) {
      setButtons(prevButtons => [ ...prevButtons, {
        key: moment(moment(displayDate).format(`YYYY-MM-${i}`)).format('YYYY-MM-DD'),
        type: 'actual',
        day: i
      }]);
    }
  }, [setButtons, displayDate]);

  useEffect(() => {
    if (buttons.length < 42 && buttons.length > 0) {
      for(let i = 1; i <= 42 - buttons.length; i++) {
        setButtons(prevButtons => [ ...prevButtons, {
          key: moment(moment(displayDate).add(1, 'months').format(`YYYY-MM-${i}`)).format('YYYY-MM-DD'),
          type: 'next',
          day: i
        }]);
      }
    }
  }, [buttons, setButtons, displayDate]);

  useEffect(() => {
    if (moment(selectedDates.start) > moment(selectedDates.end)) {
      setSelectedDates({
        start: selectedDates.end,
        end: selectedDates.start
      });
    }
  }, [selectedDates, setSelectedDates]);

  const handleDisplayDate = (type) => () => {
    setButtons([]);
    switch (type) {
      case 'next':
        setButtons([]);
        setDisplayDate(moment(displayDate).add(1, 'months').format('YYYY-MM-DD'));
        break;
      case 'past':
        setDisplayDate(moment(displayDate).subtract(1, 'months').format('YYYY-MM-DD'));
        break;
      default:
        console.warn('Unhandled type', type);
        return;
    }
  };

  const handleMouseEnter = date => () => selectedDates.start && setFocusedDate(date);

  const onRangeChange = (date, type) => () => {
    const { start, end } = selectedDates;
    if (start && end) {
      setSelectedDates({
        start: date,
        end: null
      });
    } else if (start && !end) {
      setSelectedDates(prevDates => ({ ...prevDates, end: date }));
    }
    type !== 'actual' && handleDisplayDate(type)();
  };

  return (
    <Grid container direction='column' style={{minWidth: 320, width: 320, padding: 10, border: '1px solid #333'}}>
      <Grid container item>
        <IconButton onClick={handleDisplayDate('past')}>
          <ArrowBackIos />
        </IconButton>
        <Typography style={{flexGrow: 1}} align='center' variant="h5">
          {moment(displayDate).format('MMMM YYYY')}
        </Typography>
        <IconButton onClick={handleDisplayDate('next')}>
          <ArrowForwardIos />
        </IconButton>
      </Grid>
      <Grid container item justify='space-around' style={{width: '100%', margin: 0, padding: 0}}>
        {
          Array.from(Array(7).keys()).map(day => (
            <Typography key={day} variant='subtitle1' align='center' style={{width: '14%'}}>
              {moment().isoWeekday(day).format('dd')}
            </Typography>
          ))
        }
      </Grid>
      <Grid container item justify='center' style={{width: '100%', margin: 0, padding: 0}}>
        {
          buttons.map((item, i) => (
            <Button
              key={item.key}
              variant={item.type === 'actual' ? 'contained' : null}
              style={{
                width: '14%',
                minWidth: '14%',
                borderRadius: 0,
                margin: 0,
                borderTop: '1px solid #333',
                borderLeft: '1px solid #333',
                borderBottom: i >= 35 ? '1px solid #333' : null,
                borderRight: i === 41 || ((i+1) % 7) === 0  ? '1px solid #333' : null,
                backgroundColor: item.key === selectedDates.start ||
                  item.key === selectedDates.end ||
                  (item.key === focusedDate && !selectedDates.end) ? '#3f51b5' :
                    (item.key > selectedDates.start && item.key < selectedDates.end) ||
                      (item.key > selectedDates.start && item.key < focusedDate
                        && !selectedDates.end
                      ) ||
                      (item.key < selectedDates.start && item.key > focusedDate
                        && !selectedDates.end
                      ) ? '#7482cf' : null
              }}
              disabled={moment(item.key) < moment(actualDate)}
              onMouseEnter={handleMouseEnter(item.key)}
              onClick={onRangeChange(item.key, item.type)}
            >
              {item.day}
            </Button>
          ))
        }
      </Grid>
    </Grid>
  );
};

export default memo(RangeDatePicker);
