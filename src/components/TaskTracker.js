import React from 'react';
import { Parallax,ParallaxLayer } from '@react-spring/parallax';
import { Box, Card, Paper, Typography } from '@mui/material';
import page from '../images/taskTrackerHomePage.jpg';
export default function TaskTracker(){
  return (
    <>
      <ParallaxLayer 
        offset={2.3}
        speed={0.1}
      >
        <Card display="flex" style={{top:"0", right:'0', marginLeft:"55%", padding:"1em", width:"25%", height:"fit-content", alignItems:'center'}}>
          <Typography variant="p">This project helps users gain insight in their productivity habits. 
          Users enter their tasks that they have to complete throughout the day, and start a timer until they finish it. 
          The application tracks how long you take to complete each task and aggregates the time for repeated tasks and plots them on graphs.
          </Typography>
        </Card>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2.6}
        speed={0.2}
      >
        <Box style={{alignItems:"left"}} >
          <img alt="task tracker home page" src={page} style={{width:"35%", height:"auto"}}/>
        </Box>
      </ParallaxLayer>
    </>
  );
}