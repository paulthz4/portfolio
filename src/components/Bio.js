import React from 'react';
import {Box, Avatar, Card, CardHeader, CardContent, Typography} from "@mui/material";
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import pic from '../images/profilePic.jpeg';
import { ParallaxLayer } from '@react-spring/parallax';
import './styles.css';

export default function Bio(){
  return(
    <>
      <ParallaxLayer 
        offset={1}
        speed={0.4}
      >
        <Box className="container" sx={{margin:'auto',  width: '40%' }}>
          <Card elevation={4} sx={{width: '95%' }}>
            <CardHeader 
              avatar={<Avatar alt="Paul Zapote" src={pic} sx={{width:200, height:200, maxWidth:'100%', marginLeft:5}} />}
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
        </Box>
      </ParallaxLayer>
    </>
  );
}