
import {useState, useRef} from 'react';
import './Homepage.scss'

import About from './components/About/About';
import Profile from '../../components/profile/Profile';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import Project from '../../components/project/Project';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';


//Import projects helper ( array of objects)
import projects from '../../helper/projects';

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
            <button className='change-mode-button mobile' onClick={()=>setLightMode(prevMode => !prevMode)}></button>
            <button className={`nav-hamburguer ${mobileNavOpened ? 'open' : ''}`} onClick={()=>setMobileNavOpened(prev => !prev)}></button>
            <nav className={`nav-mobile ${mobileNavOpened ? 'open' : ''}`}>
                <button onClick={()=>goToRef(topRef)}>Início</button>
                <button onClick={()=>goToRef(aboutRef)}>Sobre</button>
                <button onClick={()=>goToRef(projectsRef)}>Projetos</button>
                <button onClick={()=>goToRef(experiencesRef)}>Experiência</button>
                <button onClick={()=>goToRef(contactRef)}>Contate-me</button>
                <button className='change-mode-button' onClick={()=>setLightMode(prevMode => !prevMode)}></button>
            </nav>
        </header>
        <section className='section-1' ref={topRef}>
            <aside>
                <Profile lightMode={lightMode}/>
            </aside>
            <div className='content'>
                <h2>
                    Olá! Seja Bem Vindo e Sinta-se em Casa
                </h2>
                <p>
                    Meu nome é Marcelo, sou um estudante na Universidade Federal de Itajubá.
                    E meu maior problema é querer ter muitos hobbys: tocar teclado,
                    jogar, me exercitar, escutar música, ler, jogos de tabuleiro...
                </p>
            </div>
        </section>
        <main>
            <section className='pt-5'>
                <SectionTitle reference={aboutRef} lightMode={lightMode} title='Sobre mim' subtitle='Apenas um pouco.' />
                <About lightMode={lightMode} contactRef={()=>goToRef(contactRef)}/>
            </section>
            <section className='projects-section pt-4'>
                <SectionTitle reference={projectsRef} lightMode={lightMode} title='Projetos' />
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
                <SectionTitle reference={experiencesRef} lightMode={lightMode} title='Experiência' subtitle='E formação.' />
                <Experience lightMode={lightMode} />
            </section>
            <section className='pt-4'>
                <SectionTitle reference={contactRef} lightMode={lightMode} title='Contate-me' subtitle='E falo sério.'/>
                <Contact lightMode={lightMode}/>
            </section>
        </main>
    </div>
  )
}

export default Homepage