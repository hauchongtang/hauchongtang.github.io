import React from "react";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";

import PointListItem from "./PointListItem";
import BubbleButton from "./BubbleButton";

const ExperienceCard = (props) => {
  const {
    jobTitle,
    duration,
    companyData,
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
            {jobTitle}
            <Typography>{duration}</Typography>
          </Typography>
          <Box height='8px' />
          <BubbleButton
            href={companyData.href}
            label={companyData.label}
            backgroundColor={companyData.backgroundColor}
            textColor={companyData.textColor}
          />
          <Divider sx={{ py: 1 }} />
          <Box height='12px' />
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

export default ExperienceCard;