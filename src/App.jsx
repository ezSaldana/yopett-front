import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './globalStyles';
import './App.css';
import MenuAppBar from './modules/common/MenuAppBar';
import StepperHospedaje from './modules/services/lodging/StepperHospedaje'

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      {/* <MenuAppBar /> */}
      {/* <RangeDatePicker /> */}
      <StepperHospedaje />
    </MuiThemeProvider>
  );
}

export default App;
