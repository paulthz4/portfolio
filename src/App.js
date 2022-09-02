import logo from './images/logo.svg';
import bg from './images/mountains.svg';
import trees from './images/trees.svg';
import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Typography } from '@mui/material';
import Bio from './components/Bio';

function App() {
  return (
    <div className="App" style={{ width: '100%', height: '100%', background: '#1F315B' }}>
      <Parallax pages={3}>
        <ParallaxLayer 
          offset={0} 
          factor={2}
          speed={1}
          style={{
            backgroundImage:`url(${bg})`, 
            backgroundSize: 'cover'
          }}
          >
        </ParallaxLayer>
        <ParallaxLayer 
          offset={1}
          factor={1}
          speed={1}
        >
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
          factor={2.1}
          speed={1}
          >
          <div style={{backgroundColor:'#669D73', width: '100%', height:'100%'}}></div>
        </ParallaxLayer>
        <ParallaxLayer 
          offset={0.5}
          speed={0.2}
        >
          <Typography variant="h2" color="white">Welcome!</Typography>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={1.7}
          speed={0.2}
        >
          <Typography variant="h2" color="white" >This is what I've been working on lately!</Typography>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
