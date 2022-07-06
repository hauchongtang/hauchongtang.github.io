import React from "react";
import Box from "@mui/material/Box";
import DrawerAppBar from "../Nav/NavBar";
import FrontPage from "./FrontPage";
import Experience from "../Experience/Experience";
import { IconButton } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const HomePage = () => {
  return (
    <Box sx={{ backgroundColor: '#171717' }}>
      <DrawerAppBar />
      <FrontPage />
      <Box textAlign='center' marginTop='-10%'>
        <IconButton
          sx={{ backgroundColor: 'grey', color: 'white' }}
          href='#experience'
        >
          <KeyboardArrowDownIcon />
        </IconButton>
      </Box>
      <Experience />
    </Box>
  )
}

export default HomePage;