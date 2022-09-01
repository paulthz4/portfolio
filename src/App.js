import logo from './images/logo.svg';
import bg from './images/mountains.svg';
import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Parallax pages={4}>
        <ParallaxLayer offset={0} 
          speed={1}
          style={{backgroundImage:`url(${bg})`}}
          >
          <Typography variant="h2" >Welcome to my Website!</Typography>
        </ParallaxLayer>
        
        <ParallaxLayer offset={1} speed={0.5}>
          <Typography variant="h2" >This is the second page!</Typography>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
