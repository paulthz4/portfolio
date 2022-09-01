import logo from './images/logo.svg';
import bg from './images/mountains.svg';
import sky from './images/pexelsNightSky.jpg';
import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Typography } from '@mui/material';
import Bio from './components/Bio';

function App() {
  return (
    <div className="App">
      <Parallax pages={5}>
        <ParallaxLayer 
          offset={0} 
          factor={2}
          speed={1.3}
          style={{
            backgroundImage:`url(${bg})`, 
            backgroundSize: 'cover'
          }}
          >
        </ParallaxLayer>
        <ParallaxLayer 
          offset={0.4}
          speed={0.5}
        >
          <Typography variant="h2" color="white">Welcome!</Typography>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={1} 
          speed={0.5} 
          factor={3}
          style={{
            backgroundImage:`url(${sky})`,
            backgroundSize: 'cover',
          }}
          >
        </ParallaxLayer>
        <ParallaxLayer 
          offset={1.5}
          speed={0.3}
          style={{
            color:'white'
          }}
        >
          <Typography variant="h2" >This is what I've been working on lately!</Typography>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
