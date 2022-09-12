import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';
import { Box, Card, CardMedia, Typography } from '@mui/material';
import page from '../images/taskTrackerHomePage.jpg';
import graph1 from '../images/TaskTrackerWebInsights1.jpg';
import graph2 from '../images/TaskTrackerWebInsights2.jpg';

export default function TaskTracker(){
  return (
    <>
      <ParallaxLayer 
        offset={3.4}
        speed={0.3}
        factor={0.2}
      >
        <Card display="flex" elevation={4} sx={{ margin:"auto", padding:"2em 6em", width:"25%", height:"fit-content", alignItems:'center'}}>
          <Typography variant="p" sx={{lineHeight: '170%', px:3}}>This project helps users gain insight in their productivity habits. 
          Users enter their tasks that they have to complete throughout the day, and start a timer until they finish it. 
          The application tracks how long you take to complete each task and aggregates the time for repeated tasks and plots them on graphs.
          This was built using React, MongoDB, and Express with some libraries for the front-end such as 
          react-router-dom, framer-motion, material-ui, and chart.js.
          </Typography>
        </Card>
      </ParallaxLayer>
      <ParallaxLayer
        offset={3.8}
        speed={0.7}
        factor={0.3}
      >
        <Box sx={{margin:'0', width: 'fit-content', display:'flex', justifyContent: 'center', alignItems:'center', gap:'7em'}} >
          <img alt="task tracker home page" src={page} style={{width:"45%", height:"auto"}}/>
          <Card elevation={2} sx={{width: '25%', p:2}}>
            <Typography variant='p' sx={{ lineHeight:'170%'}}>The home page where all tasks are shown as well as its properties.
              Date and time created, length of time worked on, how many times the task was paused.
              Has pagination functionality as well as search bar for searching tasks.              
            </Typography>
          </Card>
        </Box>
      </ParallaxLayer>
      
      <ParallaxLayer
        offset={4}
        speed={1}
        factor={0.4}
      >
       <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', gap:'6em'}}>
        <img style={{width:"45%", height:"auto"}} alt="graph 1 showing task frequency" src={graph1}/>
        <img style={{width:"45%", height:"auto"}} alt="graph 2 showing task length" src={graph2}/>
       </Box>
      </ParallaxLayer>
      
      
    </>
  );
}