import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ width: 'auto' }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontWeight={600} fontSize={{ xs: '15px', sm: '18px', md: '20px' }}>
            Software Engineer Intern @uWave
          </Typography>
          <Typography sx={{ textDecoration: 'underline' }} variant='h6' fontWeight={600} fontSize={{ xs: '13px', sm: '13px', md: '16px' }}>
            Skills
          </Typography>
          <Typography>
            Kubernetes, Javascript, Go, React, CICD
          </Typography>
          <Typography sx={{ textDecoration: 'underline' }} variant='h6' fontWeight={600} fontSize={{ xs: '13px', sm: '13px', md: '16px' }}>
            Description
          </Typography>
          <Typography whiteSpace='pre-line' lineHeight={1.7}>
            {`1. Sole developer of company's landing page using NextJS and ReactJS with Server Side Rendering (SSR)
            2. Optimisation of webpage with Search Engine Optimisation (SEO)
            3. Configured Helm Charts to set up pods for deployment into Kubernetes cluster.
            4. Familiarised with the use of CICD processes with GitLab CICD integration.
            5. Developed an OAuth2 capable internal portal for tagging of data for Machine Learning usage.
            6. Aided in creating auxillary API routes with Go.
            `}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href='https://uwave.sg'>
          Landing Page
        </Button>
      </CardActions>
    </Card>
  );
}