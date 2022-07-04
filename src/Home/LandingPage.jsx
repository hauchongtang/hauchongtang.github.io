import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

import NavBar from "./AppBar/NavBar";

const LandingPage = () => {
  return (
    <Box height={'100vh'} > 
      <NavBar />
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }} height={{ xs: '50vh', sm: '50vh', md: '100vh' }}>
        <Grid item xs={4} sm={8} md={6}>
          <Box textAlign='center'>
            <Box
              display='flex'
              justifyContent='center'
              marginTop='22%'
            >
              <CardMedia
                component='img'
                image='assets/devPicture.png'
                alt='pic'
                sx={{ height: { xs: '200px', sm: '280px', md: '320px' }, width: 'auto' }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4} sm={8} md={6} textAlign='center' height={{ xs: '50vh', sm: '50vh', md: '100vh' }} >
          <Box
            marginTop='35%'
          >
            <Typography 
              variant='h1' fontSize={{ xs: '32px', sm: '36px', md: '44px' }} fontWeight={600}
              whiteSpace='pre-line' lineHeight='35px'
            >
              {
                `Hello, I am Hau Chong,\n
                Software Enthusiast.`
              }
            </Typography>
          </Box>
        </Grid> 
      </Grid>
    </Box>
  )
}

export default LandingPage;