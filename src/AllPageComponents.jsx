import React from "react";
import Box from '@mui/material/Box';

import styles from './Home/Landing.module.css';
import Experience from "./Experience/Experience";
import LandingPage from "./Home/LandingPage";

const AllPageComponents = () => {
  return (
    <Box className={styles.root}>
      <LandingPage />
      <Experience />
    </Box>
  )
}

export default AllPageComponents;