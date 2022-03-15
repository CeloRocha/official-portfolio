import React from 'react'
import './About.scss'

import curriculo from '../../../../assets/document/Curriculo.pdf'
import marceloImg from '../../../../assets/Foto.jpg';

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
                        Curso Engenharia de Controle e Automação, porém durante o curso
                        descobri por várias matérias e por participar na área de Software
                        em um projeto de extensão da faculdade, descobri amar programar,
                        desenvolver algo novo e solucionar problemas.
                        Por isso além de buscar cursar todas matérias opcionais relacionadas
                        na faculdade, também estudo muito por fora, utilizando sites como
                        TheOdinProject e FreeCodeProgram (que são iniciativas incríveis).
                        Portanto, busco aprender e me desenvolver enquanto procuro por oportunidades
                        de adquirir experiência.
                    </p>
                    <span className='space'>Alguns destaques:</span>
                    <ul>
                        <li>Javascript;</li>
                        <li>Python;</li>
                        <li>Web: HTML, CSS, SASS;</li>
                        <li>ReactJS;</li>
                        <li>GitHub</li>
                        <li>Firebase.</li>
                    </ul>
                </div>
                <div className='about-buttons'>
                    <button onClick={props.contactRef}>
                        Contrate-me
                    </button>
                    <a href={curriculo} download='Currículo_MarceloRocha.pdf'>
                        <button className='orange'>
                            Currículo
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About