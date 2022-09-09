import {React, useState} from 'react';
import logo from './images/logo.svg';
import bg from './images/frontmountains.svg';
import middleMt from './images/backmountain.svg';
import trees from './images/trees.svg';
import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import {useSpring, animated} from 'react-spring';
import { Box,Card, Link, Typography } from '@mui/material';
import Bio from './components/Bio';
import TaskTracker from './components/TaskTracker';
import StudyMaster from './components/StudyMaster';

function App() {
  const [hover,setHover] = useState(false);
  const [toggle, setToggle] = useState(false);
  
  const underline = useSpring({from: {opacity:0},
    to: {
      opacity: toggle ? 1 : 0,
      width: toggle? '100%': '0%',
    },
    config: {duration: 300}
  });
    
  const underline2 = useSpring({from: {opacity:0, textDecoration:'none'},
  to: {
    opacity: hover ? 1 : 0,
    width: hover? '100%': '0%',
  },
  config: {duration: 300}
});
  
  
  return (
    <div className="App" style={{ width: '100%', height: '100%', background: '#1F315B' }}>
      <Parallax pages={7} style={{backgroundColor:'#1F315B'}}>
        <ParallaxLayer 
          offset={0.6} 
          factor={2}
          speed={0.5}
          style={{
            backgroundImage:`url(${middleMt})`, 
            backgroundSize: '20%',
            left:'30%',
            width:'200%',
            height:'35%'
          }}
        />
        <ParallaxLayer 
          offset={0} 
          factor={2}
          speed={1}
          style={{
            backgroundImage:`url(${bg})`, 
            backgroundSize: 'cover',
          }}
        />
        <ParallaxLayer 
          offset={1}
          factor={1}
          speed={1}
        >
        {/* light green background */}
         <div style={{backgroundColor:'#91D5A1', width: '100%', height:'100%'}}></div>
        </ParallaxLayer>
        <ParallaxLayer 
          offset={1}
          factor={1}
          speed={1}
          style={{
            backgroundImage: `url(${trees})`,
            backigroundSize:'cover',
          }}
        />
        <ParallaxLayer 
          offset={1.9} 
          factor={10.1}
          speed={1}
          >
          {/* dark green background */}
          <div style={{backgroundColor:'#669D73', width: '100%', height:'100%'}}></div>
        </ParallaxLayer>
        
        <Bio/>
        
        <ParallaxLayer 
          offset={3}
          speed={0.7}
          sticky={{start: 3, end: 4}}
        >
          <Link href="https://github.com/paulthz4/TaskTrackerWeb" target="_blank" rel="noopener" underline="none">
            <Typography variant="h2" 
              onMouseOver={()=>setToggle(true)} 
              onMouseLeave={()=>setToggle(false)}
              style={{color:'white', padding:'0em', marginLeft:"8%",  maxWidth:"fit-content", height:"5rem", alignItems:'center'}} 
            >
              Task Tracker
              <animated.div style={underline} className="line" />            
            </Typography>
          </Link> 
        </ParallaxLayer>
        
        <TaskTracker/>
        
        <ParallaxLayer 
        offset={5.5}
        sticky={{start:5, end:7}}
        >
        <Box>
          <Link href="https://github.com/paulthz4/StudyMaster" underline="none" target="_blank" rel="noopener">
            <Typography variant="h2" 
              onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
              style={{color:'white', padding:'0', marginLeft:"8%",  maxWidth:"fit-content", height:"5rem", alignItems:'center'}} 
            >
               Study Master
              <animated.div style={underline2} className="line" />   
            </Typography>
          </Link>
        </Box>
        </ParallaxLayer>
        
        <StudyMaster/>
        <ParallaxLayer 
          offset={0.5}
          speed={0.2}
        >
          <Typography variant="h1" color="white">
           Welcome!
          </Typography>
        </ParallaxLayer>
        
        
        <ParallaxLayer 
          offset={2}
          speed={0.2}
          factor={1}
        >
          <Typography variant="h2" color="white" >Recent Projects</Typography>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
