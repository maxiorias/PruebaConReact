import React from 'react';
import Appbar from '@mui/material/Appbar';
import Toolbar from '@mui/material/Toolbar';

function AppbarComponent() {
  return (
    <Appbar position="static">
      <Toolbar>
      <Link to="/">Inicio</Link>
      <Link to="/productos">Productos</Link>
      <Link to="/contacto">Contacto</Link>
      </Toolbar>
    </Appbar>
  );
}

export default AppbarComponent;