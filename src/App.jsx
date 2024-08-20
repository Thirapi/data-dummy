// src/App.jsx
import React from 'react';
import { Box } from '@mui/material';
import Hero from './components/Hero';
import Resources from './components/Resources';
import Routes from './components/Routes';

const App = () => {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gridTemplateRows: 'auto 1fr', height: '100vh', overflow: 'hidden' }}>
      {/* Kolom kiri untuk Resources dan Routes */}
      <Box sx={{ gridColumn: '1', gridRow: '1 / span 2', display: 'flex', flexDirection: 'column', padding: 2 }}>
      <Hero />
      </Box>
      {/* Kolom kanan untuk Hero */}
      <Box sx={{ gridColumn: '2', gridRow: '1 / span 2', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 2 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Resources />
        </Box>
        <Routes />
      </Box>
    </Box>
  );
};

export default App;
