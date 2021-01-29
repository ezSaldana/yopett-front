import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './globalStyles';
import './App.css';
import MenuAppBar from 'UI/components/organisms/MenuAppBar';
import moment from 'moment';
import RangeDatePicker from 'UI/components/organisms/RangeDatePicker';

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      {/* <MenuAppBar /> */}
      <RangeDatePicker />
    </MuiThemeProvider>
  );
}

export default App;
