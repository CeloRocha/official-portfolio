
import {useState, useRef} from 'react';
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
import Experience from './components/Experience/Experience';

const Homepage = (props) => {

    const [ lightMode, setLightMode ] = useState(false);
    const topRef = useRef();
    const aboutRef = useRef();
    const projectsRef = useRef();
    const experiencesRef = useRef();
    const contactRef = useRef();

    function goToRef(ref){
        ref.current.scrollIntoView({behavior: 'smooth'})
    }

  return (
    <div className={`homepage ${lightMode ? 'light' : ''}`}>
         <header ref={topRef} className={`navbar ${lightMode ? 'light' : ''}`}>
            <h1>Marcelo Rocha</h1>
            <nav>
                <button onClick={()=>goToRef(aboutRef)}>About</button>
                <button onClick={()=>goToRef(projectsRef)}>Projects</button>
                <button onClick={()=>goToRef(experiencesRef)}>Experience</button>
                <button onClick={()=>goToRef(contactRef)}>Get In Touch</button>
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
            <section className='pt-5'>
                <SectionTitle reference={aboutRef} lightMode={lightMode} title='About Me' subtitle='Why Choose Me?' />
                <About lightMode={lightMode}/>
            </section>
            <section className='projects-section pt-4'>
                <SectionTitle reference={projectsRef} lightMode={lightMode} title='Projects' />
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
            <section className='pt-4'>
                <SectionTitle reference={experiencesRef} lightMode={lightMode} title='Experiência' />
                <Experience lightMode={lightMode} />
            </section>
            <section className='pt-4'>
                <SectionTitle reference={contactRef} lightMode={lightMode} title='Entre em Contato' />
            </section>
        </main>
    </div>
  )
}

export default Homepage