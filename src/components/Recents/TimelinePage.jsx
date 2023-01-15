import React, { useState, useEffect } from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import moment from "moment";
import { activityData } from "../../data/activityData";
import { getRecentActivity } from "../../api/getRecentActivity";
import { Typography, Box, Card, CardContent, Grid } from "@mui/material";

const TimelinePage = () => {
  const [activities, setActivities] = useState(activityData.slice(0, 5));
  const [error, setError] = useState(false);

  useEffect(() => {
    const getActivity = async () => {
      try {
        const result = await getRecentActivity("hauchongtang").then(response => response.json());
        if (result.length > 5) {
          setActivities(result.slice(0,5));
          return;
        }
        if (!error) setActivities(result);
      } catch (error) {
        setError(true)
      }

    }
    getActivity();
  }, [])

  return (
    <Grid container>
      <Grid item xs={12} md={5}>
      <Box
        py={{ xs: 6 }}
        mx={{ xs: 4 }}
      >
        <Typography
          variant='h3'
          fontSize={{ xs: 28, sm: 44, md: 48, lg: 52 }}
          sx={{ color: '#DE1F87' }}
          fontWeight={600}
        >
          Recent Activity
        </Typography>
      </Box>
      <Timeline
        sx={[{
          "& .MuiTimelineItem-root:before": {
            flex: { xs: 0 },
          }
        },
        {
          paddingLeft: 0,
        }
        ]}
      >
        {activities.map((item, idx) => {
          return (
            <TimelineItem key={idx}>
              <TimelineSeparator>
                <TimelineDot sx={{ backgroundColor: item.type === "PullRequestEvent" ? 'violet' : 'limegreen' }} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Card
                  sx={{
                    borderRadius: '8px',
                    borderRight: `16px solid ${item.type === "PullRequestEvent" ? 'violet' : 'limegreen'}`
                  }}
                >
                  <CardContent
                    sx={{ paddingBottom: '4px' }}
                  >
                    <Typography
                      fontSize={18}
                      fontWeight={600}
                    >
                      {item.type.slice(0, item.type.length - 5)}
                    </Typography>
                    <Typography>{`> ${item.repo.name}`}</Typography>
                    <Box height='12px' />
                    <Typography color='#979797' sx={{ marginBottom: -1.5 }}>{moment(item.created_at).fromNow()}</Typography>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
          )
        })}
      </Timeline>
      </Grid>
      <Grid item xs={12} md={7} sx={{ display: { xs: 'none', md: 'block' } }}>
        <Box height='50%'/>
        <Typography variant="h4" color='whitesmoke' sx={{ textAlign: 'center' }}>Updated with the Github API</Typography>
      </Grid>
    </Grid>
    
  )
}

export default TimelinePage;