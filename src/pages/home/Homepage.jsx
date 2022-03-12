import React from 'react'
import './Homepage.scss'
//Import Images
import marceloImg from '../../assets/Foto.jpg'
import emailImg from '../../assets/Envelope.svg';
import facebookImg from '../../assets/Facebook.svg';
import githubImg from '../../assets/GitHub.svg';
import instagramImg from '../../assets/Instagram.svg';
import linkedinImg from '../../assets/Linkedin.svg'

const Homepage = () => {
  return (
    <div>
        <div className='profile-card'>
            <div className='profile-img'>
                <img src={marceloImg} alt="Marcelo Rocha"/>
            </div>
            <h1>Marcelo Rocha</h1>
            <h2>Frontend Developer</h2>
            <span>marcelorocha.website</span>
            <button className='profile-email-button'>
                <img src={emailImg} alt="" />
                <span>Email</span>
            </button>
            <section className="profile-info">
                <h3>About</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, tenetur. Vel quos explicabo iusto! Dolorem eligendi, nisi excepturi tempora culpa fugiat, hic asperiores aliquam mollitia vero animi, a numquam saepe?</p>
                <h3>Interests</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt id atque pariatur laboriosam, animi tenetur suscipit. Odit molestias dolores blanditiis iure, reprehenderit odio debitis, repellendus, dolore eius deleniti voluptas laborum!</p>
            </section>
            <div className='profile-footer'>
                <img src={facebookImg} alt="Facebook" />
                <img src={instagramImg} alt="Instagram" />
                <img src={linkedinImg} alt="Linkedin" />
                <img src={githubImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Homepage