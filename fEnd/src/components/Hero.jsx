// src/components/Hero.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Hero = () => {
  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 2 }}>
      <Typography variant="h3" gutterBottom>
        dummy-data-api
      </Typography>
      <Typography variant="h6" gutterBottom>
        fake-dummy-data-api.
      </Typography>
    </Box>
  );
};

export default Hero;
