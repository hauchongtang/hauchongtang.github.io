import React from "react";
import { Box, Card, CardContent, Divider, Link, Typography } from "@mui/material";

import PointListItem from "../Experience/PointListItem";
import BubbleButton from "../Experience/BubbleButton";
import { GitHub} from "@mui/icons-material";
import  IosShare from '@mui/icons-material/IosShare';

const ProjectCard = (props) => {
  const {
    description,
    repoLink,
    demoLink,
    descData,
    technologyData
  } = props;
  return (
    <>
      <Card
        sx={{
          borderRadius: '17px'
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            color='black'
            fontSize={{ xs: 18 }}
            fontWeight={600}
          >
            {description}
          </Typography>
          <Box height='8px' />
          <Link href={repoLink} sx={{ color: 'black' }}>
            <GitHub />
          </Link>
          <Link href={demoLink} sx={{ color: 'black', mx: '8px' }}>
            <IosShare />
          </Link>
          <Divider sx={{ py: 1 }} />
          <Box height='8px' />
          <Typography
            fontWeight={400}
            color='#979797'
          >
            Description
          </Typography>
          {descData.map((item, idx) => {
            return (
              <PointListItem content={item} key={item} />
            )
          })}
          <Divider sx={{ py: 1 }} />
          <Box height='12px' />
          <Typography
            fontWeight={400}
            color='#979797'
          >
            Technologies
          </Typography>
          <Box height='8px' />
          {technologyData.map((item, idx) => {
            return (
              <BubbleButton
                key={idx}
                href={item.href}
                label={item.label}
                backgroundColor={item.backgroundColor}
                textColor={item.textColor}
              />
            )
          })} 
        </CardContent>
      </Card>
    </>
  )
}

export default ProjectCard;