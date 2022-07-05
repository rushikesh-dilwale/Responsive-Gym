import React from 'react';
import aboutimage from '../images/about.png';

function About() {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={aboutimage} alt=''/>
        </div>
        <div className='about-text'>
            <h1>LEARN MORE ABOUT US</h1>
            <p>A gymnasium, also known as a gym, is a covered location for athletics. The word is derived from the ancient Greek term "gymnasium". They are commonly found in athletic and fitness centres, and as activity and learning spaces in educational institutions.</p>
            <button>READ MORE</button>
        </div>
    </div>
  )
}

export default About;