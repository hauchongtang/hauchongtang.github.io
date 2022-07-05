import { CardMedia, Grid, Box, Typography } from "@mui/material";
import React from "react";

const FrontPage = () => {
  return (
    <Grid container height={{ xs: '50vh', sm: 'auto', md: 'auto', lg: '100vh' }}>
      <Grid item xs={12} sm={6} md={6}>
        <Box
          display='flex'
          justifyContent='center'
          my={{ xs: '0vh', sm: '5%', md: '5vh', lg: '20vh' }}
        >
          <CardMedia
            component='img'
            image="assets/cloudserver.png"
            alt=''
            sx={{ 
              width: {
                xs: '200px',
                sm: '200px',
                md: '50%'
              },
              height: 'auto',
              display: { xs: 'none', sm: 'block', md: 'block'} 
            }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Box
          textAlign={{ xs: 'center', sm: 'center', md: 'left' }}
          my={{ xs: '5%', sm: '15%', md: '20%', lg: '35%' }}
        >
          <Typography
            variant='h1'
            fontWeight={600}
            fontSize={{ xs: 30, sm: 32, md: 36, lg: 48 }}
          >
            Hi, I am Hau Chong.
          </Typography>
          <Typography
            variant='h5'
            fontWeight={400}
            fontSize={{ xs: 14, sm: 16, md: 18, lg: 22 }}
          >
            Y2 Computer Science Student @NUS
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default FrontPage;