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
          <Card sx={{width: '95%' }}>
            <CardHeader 
              avatar={<Avatar alt="Paul Zapote" src={pic} sx={{width:200, height:200, maxWidth:'100%', mx:4}} />}
              title={<Typography fontSize='medium'>Hi there! My name is Paul Zapote</Typography>}
              subheader={<Typography variant='p' fontSize='small' sx={{opacity:0.5}}><RoomOutlinedIcon fontSize='small'/> Calgary, Alberta, Canada</Typography>}
              />
              <CardContent>
                <Typography variant='body2'>
                
                </Typography>
              </CardContent>
          </Card>
        </Box>
      </ParallaxLayer>
    </>
  );
}