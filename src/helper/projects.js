//Import image:
import cramsGamesImg from '../assets/projectImages/CramsGames.png';
import letMeAskImg from '../assets/projectImages/LetMeAsk.png';
import quizAppImg from '../assets/projectImages/QuizApp.png';
import weatherAppImg from '../assets/projectImages/WeatherApp.png';
import calculatorImg from '../assets/projectImages/calculator.jpg';
import sketchImg from '../assets/projectImages/sketchImage.png';

const projects = [
    {
        image: cramsGamesImg,
        title: 'Crams Games',
        description: 'A gaming site for playing with your friends, with leaderboard, victory counter, lobby, chat and turn based game.',
        technologies: ['ReactJS', 'Firebase', 'React-Router', 'Responsive'],
        github: 'https://github.com/CeloRocha/gaming-site',
        site: 'https://gaming-site-4e8d8.web.app/'
    },
    {
        image: letMeAskImg,
        title: 'LetMe Ask',
        description: 'A helpful site for answer the most desired questions during a stream.',
        technologies: ['ReactJS', 'Firebase', 'React-Router'],
        github: 'https://github.com/CeloRocha/let-me-ask',
        site: 'https://let-me-ask-13098.web.app/'
    },
    {
        image: quizAppImg,
        title: 'Quizzical',
        description: 'Using the Open Trivia DB (OTDB), this site is my first ReactJS project, using a API to fecth data.',
        technologies: ['ReactJS', 'OTDB'],
        github: 'https://github.com/CeloRocha/react-quiz-app',
        site: 'https://celorocha.github.io/react-quiz-app/'
    },
    {
        image: weatherAppImg,
        title: 'Weather Site',
        description: 'This is a simple weather app, where you can search for the temperature, humidity and sky state.',
        technologies: ['ReactJS', 'Open Weather', 'Responsive'],
        github: 'https://github.com/CeloRocha/weather-app',
        site: 'https://celorocha.github.io/weather-app/'
    },
    {
        image: calculatorImg,
        title: 'Calculator',
        description: 'This is a logic project, that appears to be simple in the first view, but can be somewhat complex, because this calculator solves equations with parenthesis and all operands considering the correct priority.',
        technologies: ['Javascript', 'Animation'],
        github: 'https://github.com/CeloRocha/calculator',
        site: 'https://celorocha.github.io/calculator/'
    },
    {
        image: sketchImg,
        title: 'Etch a Sketch',
        description: 'Draw your pixeled image, with this DOM manipulation project with only JS, HTML and CSS',
        technologies: ['Javascript'],
        github: 'https://github.com/CeloRocha/Etch-a-Sketch',
        site: 'https://celorocha.github.io/Etch-a-Sketch/'
    }

]

export default projects;