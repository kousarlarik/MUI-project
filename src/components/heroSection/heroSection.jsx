import React from 'react';
import { Box,Typography, Button } from '@mui/material';
import Hero from '../../ases/Illustration.png';


const HeroSection = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: '20px', padding: '50px' }}>
    <Box sx={{ flex: 1 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Lessons and insights
      </Typography>
      <Typography sx={{ color: '#28a745' }} variant="h3" component="h1" gutterBottom>
        from 8 years
      </Typography>
      <Typography variant="body1">
        Where to grow your business as a photographer: site or social media?
      </Typography>
      <Button sx={{ backgroundColor: '#28a745', marginTop: '20px' }} variant="contained" size="large">
        Register
      </Button>
    </Box>
    
   
    <Box sx={{ flex: 1 }}>
      <img
        className="img-fluid"
        src={Hero} 
        alt="Hero" 
        style={{ width: '90%', height: 'auto', borderRadius: '8px' }} 
      />
    </Box>
  </Box>
  
  );
};

export default HeroSection;
