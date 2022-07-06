import React from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import ExperienceCard from "./ExperienceCard";
import { companyData, descData, technologyData } from "../../data/experienceData";
import ArrowDown from "../HomePage/ArrowDown";

const Experience = () => {
  return (
    <>
      <Box
        id='experience'
        height={{ xs: 'auto', md: '100vh' }}
        sx={{ backgroundColor: '#212121' }}
      >
        <Box
          py={{ xs: 6 }}
          mx={{ xs: 4 }}
        >
          <Typography
            variant='h3'
            fontSize={{ xs: 28, sm: 44, md: 48, lg: 52 }}
            color='#0fb'
            fontWeight={600}
          >
            Experience
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={4} px={4}>
            <Grid item xs={12} sm={12} md={6}>
              <Box>
                <ExperienceCard
                  jobTitle='Software Engineer Intern'
                  duration="May 2022 - August 2022"
                  companyData={companyData}
                  descData={descData}
                  technologyData={technologyData}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Card
                sx={{ borderRadius: '17px' }}

              >
                <Box height='20vh' textAlign='center'>
                  <Box height='7.5vh' />
                  <Typography
                    fontSize={24}
                    fontWeight={600}
                  >
                    Coming soon...
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        py={{ xs: 1.5, md: '-32px' }}
        paddingBottom={{ md: '-32px' }}
      >
        <ArrowDown href='#projects' />
      </Box>
    </>
  )
}

export default Experience;