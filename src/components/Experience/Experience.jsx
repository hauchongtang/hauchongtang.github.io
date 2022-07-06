import React from "react";
import { Box, Typography } from "@mui/material";

const Experience = () => {
  return (
    <Box
      id='experience'
      height={{ xs: '100vh' }}
      sx={{ backgroundColor: '#171717' }}
    >
      <Box
        py={{ xs: 6 }}
        mx={{ xs: 6 }}
      >
        <Typography
          variant='h3'
          fontSize={{ xs: 28, sm: 44, md: 48, lg: 52 }}
          color='white'
        >
          Experience
        </Typography>
      </Box>
    </Box>
  )
}

export default Experience;