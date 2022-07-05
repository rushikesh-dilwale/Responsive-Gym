import React from 'react';

function Featurebox(props) {

  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.details} alt='123'/>
        </div>
            <div className='a-b-text'>
            <h2>{props.title}</h2>
            <p>Become Arnold</p>
        </div>
    </div>
  )
}

export default Featurebox;