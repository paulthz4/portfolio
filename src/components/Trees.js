import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';
import trees1 from '../images/backgrounds/trees1.svg'
import trees2 from '../images/backgrounds/trees2.svg';
import trees3 from '../images/backgrounds/trees3.svg';
import trees4 from '../images/backgrounds/trees4.svg';
import trees5 from '../images/backgrounds/trees5.svg';

export default function Trees({speed, offset}){
  return (
    <>
      <ParallaxLayer 
        offset={offset}
        speed={speed}
        style={{ backgroundImage: `url(${trees1})`,width: '25%',}}
      />
      <ParallaxLayer 
        offset={offset}
        speed={speed-0.3}
        style={{ backgroundImage: `url(${trees2})`,width: '25%',left:'15%'}}
      />
      <ParallaxLayer 
        offset={offset}
        speed={speed}
        style={{ backgroundImage: `url(${trees3})`,width: '25%',left:'38%'}}
      />
      <ParallaxLayer 
        offset={offset}
        speed={speed-0.3}
        style={{ backgroundImage: `url(${trees4})`,width: '25%',left:'56%'}}
      />
      <ParallaxLayer 
        offset={offset}
        speed={speed}
        style={{ backgroundImage: `url(${trees5})`,width: '25%',left:'76%'}}
      />
    </>
  );
}