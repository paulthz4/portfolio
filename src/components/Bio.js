import React from 'react';
import {Box, Avatar, Card, CardHeader, CardContent, Typography} from "@mui/material";
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import pic from '../images/profilePic.jpeg';
import reactLogo from '../images/logos/react.png';
import mongodbLogo from '../images/logos/mongodb.png'
import javaLogo from '../images/logos/java.png';
import mysqlLogo from '../images/logos/mysql.png';
import jsLogo from '../images/logos/javascript.png';
import cssLogo from '../images/logos/css.png';
import nodeLogo from '../images/logos/node2.png';
import expressLogo from '../images/logos/express.png';
import githubLogo from '../images/logos/github.png';
import { ParallaxLayer } from '@react-spring/parallax';
import './styles.css';

export default function Bio(){
  return(
    <>
      <ParallaxLayer 
        offset={0.99}
        speed={0.4}
      >
        <Box className="container" sx={{margin:'auto',  width: '75%', gap:'4em', flexDirection: 'column' }}>
          <Card elevation={4} sx={{width: '45%', mb:'8em', maxWidth:'720px' }}>
            <CardHeader 
              avatar={<Avatar alt="Paul Zapote" src={pic} sx={{width:'10em', height:'10em', marginLeft:5}} />}
              title={<Typography fontSize='medium'>Hi there! My name is Paul Zapote</Typography>}
              subheader={<Typography variant='p' fontSize='small' sx={{opacity:0.5}}><RoomOutlinedIcon fontSize='small'/> Calgary, Alberta, Canada</Typography>}
              />
              <CardContent sx={{p:5}}>
                <Typography variant='body2' sx={{textAlign:'justify', textAlignLast:'center'}}>
                  I graduated from the University of British Columbia in 2021 with a B.Sc. degree in Computer Science
                  and a minor in Economics. I spend the majority of my free time working on some passions projects that inlove 
                  building web apps that make things more efficient or make tasks a little easier as you can see some of the projects below.
                  I spend the rest of time doing other hobbies like hiking, camping, traveling, and playing sports when I'm not coding!
                </Typography>
              </CardContent>
          </Card>
          <Box sx={{width:'15%', borderBottom:'solid black 2px'}}>
            <Typography variant='h2' black='black'>Skills</Typography>
          </Box>
          <Box className="container" sx={{gap:'2em', flexWrap:'wrap', margin: 'auto', maxWidth:'100%'}}>
            <img alt='java logo' src={javaLogo} style={{width:'5%', height: 'auto'}}/>
            <img alt='javascript logo' src={jsLogo} style={{width:'10%', height: 'auto'}}/>
            <img alt='react logo' src={reactLogo} style={{width:'10%', height: 'auto'}}/>
            <img alt='css logo' src={cssLogo} style={{width:'6%', height: 'auto'}}/>
            <img alt='express.js logo' src={expressLogo} style={{width:'15%', height: 'auto'}}/>
            <img alt='node.js logo' src={nodeLogo} style={{width:'12%', height: 'auto'}}/>
            <img alt='mysql logo' src={mysqlLogo} style={{width:'12%', height: 'auto'}}/>
            <img alt='mongodb logo' src={mongodbLogo} style={{width:'15%', height: 'auto'}} />
            <img alt='github logo' src={githubLogo} style={{width:'10%', height:'auto'}} />
            
          </Box>
        </Box>
      </ParallaxLayer>
    </>
  );
}