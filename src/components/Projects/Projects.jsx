import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import { projectData } from "../../data/projectData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <Box id='projects' height={{ xs: 'auto', sm: 'auto', md: 'auto' }}>
      <Box
        py={{ xs: 6 }}
        mx={{ xs: 4 }}
      >
        <Typography
          variant='h3'
          fontSize={{ xs: 28, sm: 44, md: 48, lg: 52 }}
          color='#FE8888'
          fontWeight={600}
        >
          Projects
        </Typography>
      </Box>
      <Grid container spacing={4} px={4}>
        {projectData.map((item, idx) => {
          return (
            <Grid item xs={12} sm={12} md={4} key={idx}>
              <ProjectCard
                repoLink={item.repoLink}
                demoLink={item.demoLink}
                description={item.description}
                descData={item.descData}
                technologyData={item.techData}
              />
            </Grid>
          )
        })}
      </Grid>

    </Box>
  )
}

export default Projects;