import React from "react";
import { Box, Button, Card, CardContent, CardMedia, Chip, Divider, Grid, Link, ListItem, Typography } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const PointListItem = ({ content }) => {
  return (
    <>
      <Box
        display='flex'
        flexDirection='row'
        justifyContent='start'
        marginTop={0.5}
        marginBottom={1}
      >
        <FiberManualRecordIcon sx={{
          fontSize: '10px',
          my: '2.5px',
          marginRight: '4px'
        }} />
        <Typography
          fontSize={{ xs: 14 }}
          lineHeight='16px'
        >
          {content}
        </Typography>
      </Box>
    </>
  )
}

export default PointListItem;