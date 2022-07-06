import React from "react";
import { Box, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ArrowDown = ({ href, marginTop }) => {
  return (
    <>
      <Box textAlign='center' marginTop={{ xs: marginTop, sm: '5vh', lg: '-15vh'}}>
        <IconButton
          sx={{ backgroundColor: 'grey', color: 'white' }}
          href={href}
        >
          <KeyboardArrowDownIcon />
        </IconButton>
      </Box>
    </>
  )
}

export default ArrowDown;