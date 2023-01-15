import React from "react";
import Box from "@mui/material/Box";

import DrawerAppBar from "../Nav/NavBar";
import FrontPage from "./FrontPage";
import Experience from "../Experience/Experience";
import ArrowDown from "./ArrowDown";
import Projects from "../Projects/Projects"
import FooterComponent from "./Footer";
import TimelinePage from "../Recents/TimelinePage";

const HomePage = () => {
  return (
    <>
    <Box sx={{ backgroundColor: '#212121', width: '100%' }}>
      <DrawerAppBar /> 
      <FrontPage />
      <ArrowDown href="#experience" marginTop='-5vh' />
      <Box zIndex={999}><ul className="circles" style={{ height: '100vh', zIndex: 999 }}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      </Box>
      <TimelinePage/>
      <Experience />
      <Projects />
      <FooterComponent />  
    </Box> 
    </>
  )
}

export default HomePage;