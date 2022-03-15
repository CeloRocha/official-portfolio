
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
import Contact from './components/Contact/Contact';

const Homepage = (props) => {

    const [ lightMode, setLightMode ] = useState(false);
    const [ mobileNavOpened, setMobileNavOpened ] = useState(false);

    const topRef = useRef();
    const aboutRef = useRef();
    const projectsRef = useRef();
    const experiencesRef = useRef();
    const contactRef = useRef();

    function goToRef(ref){
        ref.current.scrollIntoView({behavior: 'smooth'})
        setMobileNavOpened(false)
    }



  return (
    <div className={`homepage ${lightMode ? 'light' : ''}`}>
         <header ref={topRef} className={`navbar ${lightMode ? 'light' : ''}`}>
            <h1>Marcelo Rocha</h1>
            <nav className='nav-desktop'>
                <button onClick={()=>goToRef(aboutRef)}>Sobre</button>
                <button onClick={()=>goToRef(projectsRef)}>Projetos</button>
                <button onClick={()=>goToRef(experiencesRef)}>Experiência</button>
                <button onClick={()=>goToRef(contactRef)}>Contate-me</button>
            </nav>
            <button className='change-mode-button' onClick={()=>setLightMode(prevMode => !prevMode)}></button>
            <button className={`nav-hamburguer ${mobileNavOpened ? 'open' : ''}`} onClick={()=>setMobileNavOpened(prev => !prev)}></button>
            <nav className={`nav-mobile ${mobileNavOpened ? 'open' : ''}`}>
                <button onClick={()=>goToRef(topRef)}>Início</button>
                <button onClick={()=>goToRef(aboutRef)}>Sobre</button>
                <button onClick={()=>goToRef(projectsRef)}>Projetos</button>
                <button onClick={()=>goToRef(experiencesRef)}>Experiência</button>
                <button onClick={()=>goToRef(contactRef)}>Entre em Contato</button>
            </nav>
        </header>
        <section className='section-1' ref={topRef}>
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
                <Contact lightMode={lightMode}/>
            </section>
        </main>
    </div>
  )
}

export default Homepage