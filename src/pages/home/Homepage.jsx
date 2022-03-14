
import {useState} from 'react';
import './Homepage.scss'
//Import Images
import marceloImg from '../../assets/Foto.jpg'
import emailImg from '../../assets/Envelope.svg';
import facebookImg from '../../assets/Facebook.svg';
import githubImg from '../../assets/GitHub.svg';
import instagramImg from '../../assets/Instagram.svg';
import linkedinImg from '../../assets/Linkedin.svg'
import About from './components/About/About';
import Profile from '../../components/profile/Profile';
import SectionTitle from '../../components/sectionTitle/SectionTitle';


//Import projects helper ( array of objects)
import projects from '../../helper/projects';
import Project from '../../components/project/Project';

const Homepage = (props) => {

    const [ lightMode, setLightMode ] = useState(false)

  return (
    <div className={`homepage ${lightMode ? 'light' : ''}`}>
         <header className={`navbar ${lightMode ? 'light' : ''}`}>
            <h1>Marcelo Rocha</h1>
            <nav>
                <span>
                    About
                </span>
            </nav>
            <button className='change-mode-button' onClick={()=>setLightMode(prevMode => !prevMode)}></button>
        </header>
        <section className='section-1'>
            <aside>
                <Profile lightMode={lightMode}/>
            </aside>
            <div className='content'>
                <h2>
                    Seja Bem Vindo Ao Meu Portfólio
                </h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora illo, inventore pariatur dolores quam aliquid culpa optio qui saepe delectus architecto esse nobis nisi facilis. Nobis explicabo mollitia soluta? Culpa.
                </p>
            </div>
        </section>
        <main>
            <section>
            
            <About lightMode={lightMode} className='pt-5'/>
            {/* <div class="wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div> */}
            </section>
            <section className='projects-section pt-4'>
                <SectionTitle lightMode={lightMode} title='Projects' />
                <div className='projects'>
                    {projects.map((project, index) => {
                        return(
                            <Project
                                {...project} lightMode={lightMode}
                            />
                        )
                    })}
                </div>
            </section>
        </main>
    </div>
  )
}

export default Homepage