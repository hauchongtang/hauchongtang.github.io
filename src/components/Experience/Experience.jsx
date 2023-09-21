import React from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import ExperienceCard from "./ExperienceCard";
import { experienceDataList } from "../../data/experienceData";

const Experience = () => {
  return (
    <>
      <Box
        id='experience'
        height={{ xs: 'auto' }}
        sx={{ backgroundColor: 'inherit' }}
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
            {experienceDataList.map((experienceData, index) => {
              return (
                <Grid item xs={12} sm={12} md={6} key={index}>
                  <Box>
                    <ExperienceCard
                      jobTitle={experienceData.jobTitle}
                      duration={experienceData.duration}
                      companyData={experienceData.company}
                      descData={experienceData.desc}
                      technologyData={experienceData.technology}
                    />
                  </Box>
                </Grid>
              )
            })}
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default Experience;