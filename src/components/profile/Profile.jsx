import React from 'react'
import './Profile.scss'

import marceloImg from '../../assets/Foto.jpg'
import facebookImg from '../../assets/Facebook.svg';
import githubImg from '../../assets/GitHub.svg';
import instagramImg from '../../assets/Instagram.svg';
import linkedinImg from '../../assets/Linkedin.svg'

const Profile = (props) => {
  return (
    <div className={`profile-card ${props?.lightMode ? 'light' : ''} ${props.className}`}>
        <div className='profile-img'>
            <img src={marceloImg} alt="Marcelo Rocha"/>
        </div>
        <h1>Marcelo Rocha</h1>
        <h2>Frontend Developer</h2>
        <span>marcelorocha.website</span>
        <a className='profile-email-button' href="mailto:marcelo.ds.rocha77@gmail.com" target='_blank' rel='noreferrer'>
            <div className='email-icon'></div>
            {/* <img src={emailImg} alt="" /> */}
            <span>Email</span>
        </a>
        {/* <section className="profile-info">
            <h3>About</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, tenetur. Vel quos explicabo iusto! Dolorem eligendi, nisi excepturi tempora culpa fugiat, hic asperiores aliquam mollitia vero animi, a numquam saepe?</p>
            <h3>Interests</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt id atque pariatur laboriosam, animi tenetur suscipit. Odit molestias dolores blanditiis iure, reprehenderit odio debitis, repellendus, dolore eius deleniti voluptas laborum!</p>
        </section> */}
        <div className='profile-footer'>
            <a href="https://www.facebook.com/marcelo.rocha.33671" target='_blank' rel='noreferrer'>
                <img src={facebookImg} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/marcelo.ds.rocha/" target='_blank' rel='noreferrer'>
                <img src={instagramImg} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/marcelo-rocha-091b551bb/" target='_blank' rel='noreferrer'>
                <img src={linkedinImg} alt="Linkedin" />
            </a>
            <a href="https://github.com/CeloRocha" target='_blank' rel='noreferrer'>
                <img src={githubImg} alt="GitHub" />
            </a>
        </div>
    </div>
  )
}

export default Profile