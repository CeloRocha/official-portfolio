import React from 'react'
import './About.scss'

import marceloImg from '../../../../assets/Foto.jpg';

const About = (props) => {
  return (
    <section className={`about ${props?.lightMode ? 'light' : ''}`}>
        <div className='about-title'>
            <h2>About Me</h2>
            <span>Why Choose Me?</span>
            <div className='separator'></div>
        </div>
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
    </section>
  )
}

export default About