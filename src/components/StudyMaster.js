import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';
import { Card, Typography,Box } from '@mui/material';
import hp from '../images/studymasterSS.jpg';
import secondpage from '../images/studymasterTimer.jpg';

const StudyMaster=()=>{
  return(
    <>
      
      <ParallaxLayer 
        offset={5.2}
        speed={0.5}
        factor={0.4}
      >
        <Box sx={{margin:'auto', width: 'fit-content', display:'flex', justifyContent: 'center', alignItems:'center'}} >
          <Card elevation={2} sx={{width: '25%', padding:'2em 6em'}}>
            <Typography variant="p" sx={{ lineHeight:'170%'}}>
              This is a tool to help users time manage their task by using the Pomodor technique.
              The method encourages people to work with the time they have. You break your workday into
              25 minute sections seperated by 5 minute breaks. The intervals are referred to as pomodoros.          
            </Typography>
          </Card>
        </Box>
      </ParallaxLayer>
      
      <ParallaxLayer 
        offset={5.4}
        speed={0.9}
        factor={0.4}
      >
        <Box sx={{mt:9, width:'fit-content', display:'flex', justifyContent:'center', alignItems:'center', gap:'6em'}}>
          <img style={{width:"45%", height:"auto"}} alt="study master home page" src={hp} />
          <img style={{width:"45%", height:"auto"}} alt="study master time page" src={secondpage} />
        </Box>
      </ParallaxLayer>
      
      <ParallaxLayer
        offset={5.9}
        speed={0.4}
        factor={0.1}
      >
        <Box sx={{margin:'auto', width: 'fit-content', display:'flex', justifyContent: 'center', alignItems:'center', gap:'25%'}} >
          <Card elevation={2} sx={{width: '25%', padding:'1.5em'}}>
            <Typography variant="p" sx={{ lineHeight:'170%'}}>
              On the landing page, three settings are shown for the time intervals that you can change for working, short break, and a long break. 
              When ready, click the 'Set Timer' button to start the timer.
            </Typography>
          </Card>
          <Card elevation={2} sx={{width: '25%', padding:'1.5em'}}>
            <Typography variant="p" sx={{ lineHeight:'170%'}}>
              The second page shows the timer as well as a list of three tasks you can put.
              
            </Typography>
          </Card>
        </Box>
      </ParallaxLayer>
    </>
  );
}
export default StudyMaster;