import React from 'react';
import './Experience.scss';

//Import Images
import equipeImg from '../../../../assets/blackbee.png';
import logoImg from '../../../../assets/logoBlackBee.png';


//Import experiences helper
import experiences from '../../../../helper/experiences';

const Experience = (props) => {
  return (
    <div className={`experiences ${props?.className} ${props.lightMode ? 'light' : ''}`}>
        {experiences.map((experience, index) => {
            return(
                <div className='experience' key={index}>
                    <h3>{experience.job} - {experience.name}</h3>
                    <span>{experience.date}</span>
                    {experience?.description && <p>{experience.description}</p> }
                </div>
            )
        })}
    </div>
  )
}

export default Experience