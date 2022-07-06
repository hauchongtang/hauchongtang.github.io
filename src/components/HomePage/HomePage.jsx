import React from "react";
import Box from "@mui/material/Box";

import DrawerAppBar from "../Nav/NavBar";
import FrontPage from "./FrontPage";
import Experience from "../Experience/Experience";
import ArrowDown from "./ArrowDown";
import Projects from "../Projects/Projects"
import FooterComponent from "./Footer";

const HomePage = () => {
  return (
    <>
    <Box sx={{ backgroundColor: '#212121', width: '100%' }}>
      <DrawerAppBar />
      <FrontPage />
      <ArrowDown href="#experience" marginTop='-5vh' />
      <Experience />
      <Box><ul class="circles" style={{ height: '200vh' }}>
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
      <Projects />
      <FooterComponent />
      <Box><ul class="circles">
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
    </Box> 
    </>
  )
}

export default HomePage;