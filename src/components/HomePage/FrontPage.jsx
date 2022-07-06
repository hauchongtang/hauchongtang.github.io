import { CardMedia, Grid, Box, Typography } from "@mui/material";
import React from "react";

const FrontPage = () => {
  return (
    <Grid container height={{ xs: '90vh', sm: 'auto', md: 'auto', lg: '100vh' }}>
      <Grid item xs={12} sm={6} md={6}>
        <Box
          display='flex'
          justifyContent='center'
          my={{ xs: '0vh', sm: '20%', md: '20%', lg: '20vh' }}
        >
          <CardMedia
            component='img'
            image="assets/cloudserver.png"
            alt=''
            sx={{ 
              width: {
                xs: '180px',
                sm: '250px',
                md: '60%'
              },
              height: 'auto',
              display: { xs: 'none', sm: 'block', md: 'block'} 
            }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <Box
          textAlign={{ xs: 'left', sm: 'center', md: 'left' }}
          my={{ xs: '5%', sm: '15%', md: '20%', lg: '35%' }}
          mx={{ xs: '10%' }}
        >
          <Typography
            variant='h1'
            fontWeight={600}
            fontSize={{ xs: 40, sm: 44, md: 48, lg: 52 }}
            color='white'
          >
            Hi, I'm
            <Box
              sx={{
                background: '-webkit-linear-gradient(#FE8888, #8066FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '700'
              }}
            >
               Hau Chong.
            </Box>
          </Typography>
          <Typography
            variant='h5'
            fontWeight={400}
            fontSize={{ xs: 20, sm: 16, md: 18, lg: 22 }}
            py={1}
            color='white'
          >
            Y2 Computer Science Student @NUS
          </Typography>
          <Typography
            variant='h6'
            fontSize={{ xs: 14, sm: 18, md: 18, lg: 22 }}
            sx={{ fontWeight: 400 }}
            py={4}
            color='white'
          >
            "Always either at on PC learning new stuff or out on an adventure. :)"
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default FrontPage;