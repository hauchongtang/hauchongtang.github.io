import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MultiActionAreaCard from "./Card";


const Experience = () => {
  return (
    <Box height='100vh' sx={{ backgroundColor: '#EDF7FA' }}>
      <Box 
        textAlign='start' px={{ xs: '8px', sm: '8px', md: '25%' }}
        py={'36px'}
      >
        <Typography variant='h4' fontWeight={600} fontSize={{ xs: '18px', sm: '18px', md: '30px' }} py='16px'>
          Industry Experience
        </Typography>
        <MultiActionAreaCard />
        <Box height='72px'/>
        <Typography variant='h4' fontWeight={600} fontSize={{ xs: '18px', sm: '18px', md: '30px' }} py='16px'>
          Personal Projects
        </Typography>
      </Box>
    </Box>
  )
}

export default Experience;