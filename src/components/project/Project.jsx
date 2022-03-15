import React from 'react'
import './Project.scss'

//Import images
import githubImg from '../../assets/GitHub.svg';

const Project = ({image, title, description, technologies, github, site, lightMode, className = ''}) => {

  return (
    <div className={`project-card ${className} ${lightMode ? 'light' : ''}`}>
        <div className='project-top'>
            <img src={image} alt='' className='project-img'/>
            <div className='separator'></div>
            <h3 className='project-title'>{title}</h3>
            <p className='project-description'>{description}</p>
        </div>
        <div className='project-bottom'>
            <div className='project-technologies'>
                {technologies.map((tech, index) => {
                    return(
                        <span key={index}>{tech}</span>
                    )
                })}
            </div>
            <div className='project-links'>
                <a href={github} target='_blank' rel='noreferrer'>
                    <img src={githubImg} alt="GitHub" />
                </a>
                <a href={site} target='_blank' rel='noreferrer'>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.74969L19.2736 3.95535C20.5588 3.99169 21.6219 4.96734 21.768 6.24474C22.0915 9.07235 22.0915 11.9276 21.768 14.7552C21.6219 16.0326 20.5588 17.0083 19.2736 17.0446L13.75 17.2008V19.25H17C17.4142 19.25 17.75 19.5858 17.75 20C17.75 20.4142 17.4142 20.75 17 20.75H7C6.58579 20.75 6.25 20.4142 6.25 20C6.25 19.5858 6.58579 19.25 7 19.25H10.25V17.2008L4.72636 17.0446C3.44114 17.0083 2.37812 16.0326 2.23196 14.7552C1.90844 11.9276 1.90844 9.07235 2.23196 6.24474C2.37812 4.96734 3.44114 3.99169 4.72636 3.95535L12 3.74969ZM12 5.25029L4.76875 5.45475C4.22954 5.46999 3.78356 5.87932 3.72224 6.41525C3.41168 9.12956 3.41168 11.8704 3.72224 14.5847C3.78356 15.1207 4.22954 15.53 4.76875 15.5452L12 15.7497L19.2312 15.5452C19.7704 15.53 20.2164 15.1207 20.2777 14.5847C20.5883 11.8704 20.5883 9.12956 20.2777 6.41525C20.2164 5.87933 19.7704 5.46999 19.2312 5.45475L12 5.25029Z" fill="#918E9B"/>
                    </svg>
                    {/* <img src={seeOnlineImg} alt="Online Source" /> */}
                </a>
            </div>
        </div>

    </div>
  )
}

export default Project