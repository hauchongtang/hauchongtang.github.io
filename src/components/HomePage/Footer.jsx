import { Box, Typography, ButtonGroup, Button } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import React from "react";

const FooterComponent = () => {
  return (
    <footer>
      <Box 
        px={{ xs: 4 }}
        py={{ xs:6, md: 8 }}
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
      >
        <Box height='0px'/>
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='space-between'
        >
          <Typography variant="h3" fontSize={{ xs: 12, md: 18 }} sx={{ paddingTop: { xs: 2, md: 3 } }} color='white' >
            This webpage is built using MaterialUI & React.
          </Typography> 
          <ButtonGroup>
            <Button variant='text' href='https://github.com/hauchongtang'>
              <GitHub sx={{ fontSize: { xs: 24, md: 50 }, color: 'white' }}/>
            </Button>
            <Button variant='text' href='https://www.linkedin.com/in/tang-hau-chong-8a93101b6/'>
              <LinkedIn sx={{ fontSize: { xs: 26, md: 54 }, color: 'white' }}/>
            </Button>
            <Button variant='text' href='mailto:thchong28@gmail.com'>
              <Email sx={{ fontSize: { xs: 28, md: 56 }, color: 'white' }}/>
            </Button>
          </ButtonGroup>
        </Box>
        <Typography variant="h3" fontSize={{ xs: 12, md: 18 }} sx={{ paddingTop: 2 }} color='white'>Ⓒ Tang Hau Chong</Typography>
      </Box>
    </footer>
  )
}

export default FooterComponent;