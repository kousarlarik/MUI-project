import React from 'react';
import { Grid, Typography, Button, Box }from '@mui/material';
import Hero from '../../ases/Illustration.png';

const HeroSection = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: '50px' }}>
    <Grid container spacing={4} alignItems="center">
      
    
      <Grid item xs={12} md={6}>
        <Typography  variant="h3" component="h1" gutterBottom>
        Lessons and insights 
        </Typography>
        <Typography sx={{ color: '#28a745' }} variant="h3" component="h1" gutterBottom>
  from 8 years
</Typography>

        <Typography variant="body1" >
        Where to grow your business as a photographer: site or social media?
        </Typography>
        <Button sx={{ backgroundColor: '#28a745', marginTop: '20px' }} variant="contained"  size="large">
        Register
        </Button>
      </Grid>
      
      {/* Left Side - Image (Now on Right) */}
      <Grid item xs={12} md={6}>
        <img className='img-fluid'
          src={Hero} 
          alt="Hero" 
          style={{ width: '90%', height: 'auto', borderRadius: '8px' }} 
        />
      </Grid>

    </Grid>
  </Box>
  );
};

export default HeroSection;
