import {React, useState} from 'react';
import logo from './images/logo.svg';
import frontMts from './images/backgrounds/frontmountains.svg';
import middleMt from './images/backgrounds/backmountain.svg';
import trees from './images/backgrounds/trees.svg';
import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import {useSpring, animated} from 'react-spring';
import { Box,Card, Link, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Bio from './components/Bio';
import TaskTracker from './components/TaskTracker';
import StudyMaster from './components/StudyMaster';
import Trees from './components/Trees';

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
    <div className="App" style={{ width: '100%', height: '100%'}}>
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
            backgroundImage:`url(${frontMts})`, 
            backgroundSize: 'cover',
          }}
        />
        <ParallaxLayer 
          offset={0.99}
          factor={10}
          speed={1}
          style={{backgroundColor:'#5aab63', border:'none'}}
        >
        {/* light green background */}
        </ParallaxLayer>
        <Trees speed={1} offset={4.9}/>
        <ParallaxLayer 
          offset={4.9} 
          factor={10.1}
          speed={1}
          >
          {/* dark green background */}
          <div style={{backgroundColor:'#3c7743', width: '100%', height:'100%', marginTop:'40%'}}></div>
        </ParallaxLayer>
        
        <Bio />
        
        <ParallaxLayer 
          offset={3}
          speed={0.7}
          sticky={{start: 3, end: 4}}
        >
          <Box className='container' sx={{marginLeft:'8%', flexDirection:'row', width:'20%', gap:'2em'}}>
            <Link href="https://application-0-daeqg.mongodbstitch.com" target="_blank" rel="noopener" underline="none">
              <Typography variant="h2" 
                onMouseOver={()=>setToggle(true)} 
                onMouseLeave={()=>setToggle(false)}
                style={{color:'white', padding:'0em', height:"5rem", alignItems:'center'}} 
              >
                Task Tracker
                <animated.div style={underline} className="line" />            
              </Typography>
            </Link> 
            <Link href="https://github.com/paulthz4/TaskTrackerWeb" underline="none" target="_blank" rel="noopener"><GitHubIcon sx={{color:'black', position:'relative', left:'-25%'}}/></Link>
          </Box>
        </ParallaxLayer>
        
        <TaskTracker/>
        
        <ParallaxLayer 
        offset={5.5}
        sticky={{start:5, end:7}}
        >
        <Box className='container' sx={{marginLeft:'8%', flexDirection:'row', width:'20%', gap:'2em'}}>
          <Link href="https://paulthz4.github.io/StudyMaster/" underline="none" target="_blank" rel="noopener" sx={{maxWidth:'fit-content'}} >
            <Typography variant="h2" 
              onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
              style={{color:'white', padding:'0', width:"fit-content", height:"5rem"}} 
            >
               Study Master
              <animated.div style={underline2} className="line" />   
            </Typography>
          </Link>
          <Link href="https://github.com/paulthz4/StudyMaster" underline="none" target="_blank" rel="noopener"><GitHubIcon sx={{color:'black', position:'relative', left:'-25%'}}/></Link>
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
          offset={2.3}
          speed={0.2}
        >
          <Box className='container' sx={{margin:'auto', width:'15%', borderBottom:'solid black 2px'}}>
            <Typography variant='h2' black='black'>Projects</Typography>
          </Box>        
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
