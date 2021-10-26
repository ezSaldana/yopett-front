import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import logo from '../../../assets/images/yopett.png'

const MenuAppBar = () => {
  return (
    <div className="root" style={{flexGrow: 1}}>
      <AppBar>
        <Toolbar style={{padding: '10px 20px'}}>
          <img src={logo} alt="No Logo" style={{marginRight: 30}} width={50} />
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            ¿Quieres ser Cuidador?
          </Typography>
          <Typography variant="h6" style={{marginRight: '20px'}}>
            Regístrate
          </Typography>
          <Typography variant="h6">
            Ingresa
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MenuAppBar;