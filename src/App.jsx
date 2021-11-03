import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './globalStyles';
import './App.css';
import moment from 'moment';
import MenuAppBar from './modules/common/MenuAppBar';
import RangeDatePicker from './modules/services/lodging/RangeDatePicker';
import FirstStepHospedaje from 'modules/services/lodging/FirstStepHospedaje';

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      {/* <MenuAppBar /> */}
      {/* <RangeDatePicker /> */}
      <FirstStepHospedaje />
    </MuiThemeProvider>
  );
}

export default App;
