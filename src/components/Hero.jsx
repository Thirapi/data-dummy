// src/components/Hero.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Hero = () => {
  return (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 2 }}>
      <Typography variant="h3" gutterBottom>
        JSONPlaceholder Dummy API
      </Typography>
      <Typography variant="h6" gutterBottom>
        A fake online REST API for testing and prototyping.
      </Typography>
      <Button variant="contained" color="primary" href="https://jsonplaceholder.typicode.com">
        Explore API
      </Button>
    </Box>
  );
};

export default Hero;
