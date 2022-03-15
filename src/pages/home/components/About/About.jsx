import React from 'react'
import './About.scss'

import marceloImg from '../../../../assets/Foto.jpg';
import SectionTitle from '../../../../components/sectionTitle/SectionTitle';

const About = (props) => {
  return (
    <div className={`about ${props?.lightMode ? 'light' : ''} ${props.className}`}>
        <div className='about-box'>
            <aside>
                <img src={marceloImg} alt="" />
            </aside>
            <div className='about-info'>
                <div className='about-content'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur odit debitis molestias cumque alias itaque eaque et aspernatur, tempora placeat quae ipsum expedita ad voluptatum illum, quod delectus suscipit aliquam.
                    </p>
                    <span className='space'>Here a few highlights:</span>
                    <ul>
                        <li>Javascript;</li>
                        <li>CSS, SASS;</li>
                        <li>React;</li>
                        <li>Firebase.</li>
                    </ul>
                </div>
                <div className='about-buttons'>
                    <button>
                        Hire me
                    </button>
                    <button className='orange'>
                        Get resume
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About