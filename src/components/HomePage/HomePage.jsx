import React from "react";
import Box from "@mui/material/Box";
import DrawerAppBar from "../Nav/NavBar";
import FrontPage from "./FrontPage";

const HomePage = () => {
  return (
    <Box sx={{ backgroundColor: '#D6EFFB' }}>
      <DrawerAppBar/>
      <FrontPage/>
    </Box>
  )
}

export default HomePage;