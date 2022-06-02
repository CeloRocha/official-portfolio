//Import image:
import cramsGamesImg from '../assets/projectImages/CramsGames.png';
import letMeAskImg from '../assets/projectImages/LetMeAsk.png';
import quizAppImg from '../assets/projectImages/QuizApp.png';
import weatherAppImg from '../assets/projectImages/WeatherApp.png';
import calculatorImg from '../assets/projectImages/calculator.jpg';
import sketchImg from '../assets/projectImages/sketchImage.png';
import ToDoImg from '../assets/projectImages/ToDo.png';

const projects = [{
        image: ToDoImg,
        title: 'Lista de Tarefas',
        description: 'Um site de lista de tarefas, utilizando testes unitários em seu desenvolvimento, contém animações, clicar e arrastar, criação, remoção, edição e marcar tarefas como completas.',
        english: 'A To-Do-List website, using TDD for unit tests, creating a beautiful task manager, that can create, remove, edit and complete tasks, it have animations and drag and drop.',
        technologies: ['ReactJS', 'Jest', 'TDD', 'Responsive', 'Framer-Motion', 'Drag&Drop', 'Context'],
        github: 'https://github.com/CeloRocha/ToDo-ReactApp',
        site: 'https://celorocha.github.io/ToDo-ReactApp/'
    },
    {
        image: cramsGamesImg,
        title: 'Crams Games',
        description: 'Um site de jogos online para jogar e se divertir com os amigos, tem tabela de lideres, salva suas vitórias, tem lobby com bate-papo e um jogo baseado em turnos.',
        english: 'A gaming site for playing with your friends, with leaderboard, victory counter, lobby, chat and turn based game.',
        technologies: ['ReactJS', 'Firebase', 'React-Router', 'Responsive'],
        github: 'https://github.com/CeloRocha/gaming-site',
        site: 'https://gaming-site-4e8d8.web.app/'
    },
    {
        image: letMeAskImg,
        title: 'LetMe Ask',
        description: 'Um site para proporcionar uma melhor interação durante aulas online, criando uma sala onde os alunos podem fazer suas perguntas e marcarem as mais interessantes, nas quais o professor poderá responder em ordem de interesse.',
        english: 'A helpful site for answer the most desired questions during a stream.',
        technologies: ['ReactJS', 'Firebase', 'React-Router'],
        github: 'https://github.com/CeloRocha/let-me-ask',
        site: 'https://let-me-ask-13098.web.app/'
    },
    {
        image: quizAppImg,
        title: 'Quizzical',
        description: 'Um site para testar seu conhecimento, veja se é capaz de acertar 100%. Usando a API do Open Trivia DB (OTDB), foi o meu primeiro projeto com ReactJS, utilizando componentes e buscando dados online.',
        english: 'Using the Open Trivia DB (OTDB), this site is my first ReactJS project, using a API to fecth data.',
        technologies: ['ReactJS', 'OTDB'],
        github: 'https://github.com/CeloRocha/react-quiz-app',
        site: 'https://celorocha.github.io/react-quiz-app/'
    },
    {
        image: weatherAppImg,
        title: 'Weather Site',
        description: 'Um aplicativo simples para buscar o tempo atual em qualquer cidade, mostrando sua temperatura, humidade e o tempo.',
        english: 'This is a simple weather app, where you can search for the temperature, humidity and sky state.',
        technologies: ['ReactJS', 'Open Weather', 'Responsive'],
        github: 'https://github.com/CeloRocha/weather-app',
        site: 'https://celorocha.github.io/weather-app/'
    },
    {
        image: calculatorImg,
        title: 'Calculator',
        description: 'Um projeto de lógica de programação, que pode parecer simples a primeira vista, mas apresenta vários desafios, pois essa calculadora resolve equações com parentesis e vários operandos, considerando a prioridade correta.',
        english: 'This is a logic project, that appears to be simple in the first view, but can be somewhat complex, because this calculator solves equations with parenthesis and all operands considering the correct priority.',
        technologies: ['Javascript', 'Animation'],
        github: 'https://github.com/CeloRocha/calculator',
        site: 'https://celorocha.github.io/calculator/'
    },
    {
        image: sketchImg,
        title: 'Etch a Sketch',
        description: 'Desenhe sua imagem pixelada, com esse projeto visando a manipulação do DOM apenas com JS, HTML e CSS puros.',
        english: 'Draw your pixeled image, with this DOM manipulation project with only JS, HTML and CSS',
        technologies: ['Javascript'],
        github: 'https://github.com/CeloRocha/Etch-a-Sketch',
        site: 'https://celorocha.github.io/Etch-a-Sketch/'
    }

]

export default projects;