import React from 'react';
import Featurebox from './Featurebox';
import image1 from '../images/1.png';
import image2 from '../images/2.png';
import image3 from '../images/3.png';
import image4 from '../images/4.png';

function Feature() {

  return (
    <div id='features'>
        <h1>FEATURES</h1>
        <div className='a-container'>
            <Featurebox details={image1} title="Weight Lifting"/>
            <Featurebox details={image2} title="Specific Muscle"/>
            <Featurebox details={image3} title="Flex Your Muscle"/>
            <Featurebox details={image4} title="Cardio Exercise"/>
        </div>
    </div>
  )
}

export default Feature;