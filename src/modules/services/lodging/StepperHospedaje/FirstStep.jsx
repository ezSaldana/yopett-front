import { React, useState, useEffect } from 'react';
import {
    Box,
    Button,
    ButtonGroup,
    Typography,
    TextField,
    Checkbox,
    Tooltip,
    IconButton,
} from '@mui/material';
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';

import ToolTip from '../../../../assets/icons/ToolTip';
import Add from '../../../../assets/icons/Add';
import Reduce from '../../../../assets/icons/Reduce';

import { StylesProvider } from '@mui/styles';
import { useStyles } from './styles'
import './styles.css'

const FirstStep = () => {
    const classes = useStyles();

    const tooltipText = `
    Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
    `;

    const [rangeDate, setRangeDate] = useState({
        startDate: null,
        endDate: null,
        daySpan: null
    });

    const [petCounter, setPetCounter] = useState(0);
    const [total, setTotal] = useState(0);
    const [descuento, setDescuento] = useState(0);
    const [totalFinal, setTotalFinal] = useState(0);
    const tarifaPorPerro = 100;

    const handleClickAddPet = () => {
        setPetCounter(petCounter + 1);
        if (petCounter > 1)
            calcDescuento('agregarDescuento');
    }

    // TODO: calcular descuento correctamente
    const handleClickReducePet = () => {
        if (petCounter === 0) {
            setPetCounter(0);
        } else {
            setPetCounter(petCounter - 1);
            if (petCounter > 1)
                calcDescuento('reducirDescuento');
        }
    }

    const calcDescuento = (operacion) => {
        switch (operacion) {
            case 'agregarDescuento':
                setDescuento(descuento + (tarifaPorPerro * .5));
                break;
            case 'reducirDescuento':
                setDescuento(descuento - (tarifaPorPerro * .5));
                break;
            default:
                break;
        }
    }

    const calcTotalFinal = () => {
        if (petCounter === 0)
            setTotalFinal(0);
        else
            setTotalFinal(total - descuento);
    }

    useEffect(() => {
        setTotal(tarifaPorPerro * petCounter);
        calcTotalFinal();
    }, [petCounter]);

    useEffect(() => {

    }, []);

    // Para el estepper modificar .MuiSvgIcon-root-MuiStepIcon-root y MuiSvgIcon-root-MuiStepIcon-root.Mui-completed
    return (
        <StylesProvider injectFirst>
            <Box className={classes.bodyContainer}>
                <Typography className={classes.dosisBold} sx={{ paddingBottom: '12px' }}>
                    Selecciona el tipo de servicio que requieres:
                </Typography>
                <ButtonGroup sx={{ marginBottom: '20px' }}>
                    <Button className={classes.btnGrpActive} variant="contained">
                        <Typography className={classes.dosisSemiBold}>
                            Hospedaje
                        </Typography>
                    </Button>
                    <Button className={classes.btnGrpDeactive} variant="outlined">
                        <Typography className={classes.dosisSemiBold}>
                            Paseo
                        </Typography>
                    </Button>
                </ButtonGroup>
                <Typography sx={{ marginBottom: '12px' }} className={classes.dosisBold}>
                    Selecciona la fecha de entrada y salida de tú mascota.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <DateRangePickerComponent
                        placeholder="Entrada - Salida"
                        format="dd MMMM yyyy"
                        startDate={rangeDate.startDate}
                        endDate={rangeDate.endDate}
                        change={(e) => {
                            setRangeDate({
                                startDate: e.startDate,
                                endDate: e.endDate,
                                daySpan: e.daySpan
                            });
                        }}
                    />
                    <TextField className={classes.txtFld} required label="Ubicación" variant="outlined" />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Checkbox size="small" className={classes.checkBox} />
                    <Typography className={[classes.dosisSemiBold, classes.caption]}>Necesitas que pasemos por tu mascota?</Typography>
                    <Tooltip title={tooltipText} placement="right" arrow>
                        <IconButton className={classes.tooltipButton}>
                            <ToolTip />
                        </IconButton>
                    </Tooltip>
                </Box>
                <Box className={classes.pricing}>
                    <Box className={classes.addPets}>
                        <Box>
                            <Typography className={classes.dosisSemiBold}>¿Cuantas mascotas quieres hospedar?</Typography>
                            <Typography className={[classes.dosisSemiBold, classes.pricingHelperText]}>
                                Recuerda que cada perro extra es <Typography className={[classes.dosisBold, classes.percent]}>50%</Typography> Off !!!
                            </Typography>
                        </Box>
                        <Box className={classes.incrementButtonGroup}>
                            <Button className={classes.counterButtons} onClick={handleClickReducePet} variant="text">
                                <Reduce />
                            </Button>
                            <Box className={classes.incrementText}>
                                <Typography className={[classes.dosisBold, classes.counter]}>
                                    {petCounter}
                                </Typography>
                            </Box>
                            <Button className={classes.counterButtons} onClick={handleClickAddPet} variant="text">
                                <Add />
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)' }}>
                        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
                            <Typography variant="caption" className={[classes.dosisSemiBold, classes.pricingText]}>Total días seleccionados de hospedaje</Typography>
                            <Typography variant="caption" className={[classes.dosisSemiBold, classes.pricingText]}>Tarifa por noche Por perro</Typography>
                            <Typography variant="caption" className={[classes.dosisSemiBold, classes.pricingText]}>Total</Typography>
                            <Typography variant="caption" className={[classes.dosisSemiBold, classes.pricingText]}>Descuento por perro(s)extra</Typography>
                        </Box>
                        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', marginBlock: '8px' }}>
                            {
                                rangeDate.daySpan === null
                                    ? (<Box></Box>)
                                    : (<Box className={classes.pricingBox}>
                                        <Typography className={[classes.dosisSemiBold, classes.pricingBoxText, classes.pricingBox]}>{rangeDate.daySpan} días</Typography>
                                    </Box>)
                            }
                            <Box>
                                <Typography className={[classes.dosisSemiBold, classes.pricingBoxText, classes.pricingBox]}>$ {tarifaPorPerro}</Typography>
                            </Box>
                            {
                                petCounter === 0
                                    ? (<Box></Box>)
                                    : (
                                        <Box className={classes.pricingBox}>
                                            <Typography className={[classes.dosisSemiBold, classes.pricingBoxText, classes.pricingBox]}>$ {total}</Typography>
                                        </Box>
                                    )
                            }
                            {
                                petCounter > 1
                                    ? (
                                        <Box className={classes.pricingBox}>
                                            <Typography className={[classes.dosisSemiBold, classes.pricingBoxText, classes.pricingBox]}>$ {descuento}</Typography>
                                        </Box>
                                    )
                                    : (<Box></Box>)
                            }
                        </Box>
                        {
                            totalFinal === 0
                                ? (<Box className={classes.totalPricingBoxDefault}>
                                    <Typography className={[classes.dosisBold, classes.totalPricingBoxText]}>Total Final:</Typography>
                                </Box>)
                                : (
                                    <Box className={classes.totalPricingBox}>
                                        <Typography className={[classes.dosisBold, classes.totalPricingBoxText]}>Total Final: ${totalFinal}</Typography>
                                    </Box>
                                )
                        }
                    </Box>
                </Box>
            </Box>
        </StylesProvider>
    );
}

export default FirstStep;