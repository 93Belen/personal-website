import './cv.css';
import { Container, Image, Tooltip, OverlayTrigger } from 'react-bootstrap';
import '../../index.css';
import { icons } from '../icons/icons';
import { CvButton } from '../buttons/CvButton';

export const Cv = () => {

    return (
        <Container id='cv'>
            <Container id='cv-text'>
            <p id='statement'><span className='span'>Thank you for looking at my CV!</span>
            I am currently looking for a position as a <span className='span'>React Developer</span>
            <a href="../../imgs/cv-simple.pdf" download='BelenGarciaMartinez-resume.pdf'>
                <CvButton />
            </a>
            </p>
            <h2 className='span'>Languages and Tools</h2>
            <p>
                <OverlayTrigger
                className='overlay'
                placement='right'
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip id="button-tooltip-2">JavaScript</Tooltip>}
                >
                    {icons.javascript}
                </OverlayTrigger>
                <OverlayTrigger
                className='overlay'
                placement='right'
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip id="button-tooltip-2">React & React Native</Tooltip>}
                >
                    {icons.react}
                </OverlayTrigger>
                <OverlayTrigger
                className='overlay'
                placement='right'
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip id="button-tooltip-2">Redux</Tooltip>}
                >
                    {icons.redux}
                </OverlayTrigger>
                <OverlayTrigger
                className='overlay'
                placement='right'
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip id="button-tooltip-2">React-Bootstrap</Tooltip>}
                >
                    {icons.bootstrap}
                </OverlayTrigger>
                <OverlayTrigger
                className='overlay'
                placement='right'
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip id="button-tooltip-2">Git</Tooltip>}
                >
                    {icons.git}
                </OverlayTrigger>
                <OverlayTrigger
                className='overlay'
                placement='right'
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip id="button-tooltip-2">Figma</Tooltip>}
                >
                    {icons.figma}
                </OverlayTrigger>
                <OverlayTrigger
                className='overlay'
                placement='right'
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip id="button-tooltip-2">Java</Tooltip>}
                >
                    {icons.java}
                </OverlayTrigger>
                <OverlayTrigger
                className='overlay'
                placement='right'
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip id="button-tooltip-2">Spring</Tooltip>}
                >
                    {icons.spring}
                </OverlayTrigger> 
                <OverlayTrigger
                className='overlay'
                placement='right'
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip id="button-tooltip-2">MySQL</Tooltip>}
                >
                    {icons.mysql}
                </OverlayTrigger>
                <OverlayTrigger
                className='overlay'
                placement='right'
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip id="button-tooltip-2">Python</Tooltip>}
                >
                    {icons.python}
                </OverlayTrigger>
                <OverlayTrigger
                className='overlay'
                placement='right'
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip id="button-tooltip-2">Jasmine</Tooltip>}
                >
                    {icons.jasmine}
                </OverlayTrigger>
                <OverlayTrigger
                className='overlay'
                placement='right'
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip id="button-tooltip-2">Jest</Tooltip>}
                >
                    {icons.jest}
                </OverlayTrigger>
                <OverlayTrigger
                className='overlay'
                placement='right'
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip id="button-tooltip-2">Mocha</Tooltip>}
                >
                    {icons.mocha}
                </OverlayTrigger>
                <OverlayTrigger
                className='overlay'
                placement='right'
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip id="button-tooltip-2">Postman</Tooltip>}
                >
                    {icons.postman}
                </OverlayTrigger> 
                 </p>

            <h2 className='span'>Experience & Skills</h2>
            <p>Javascript <span className='span'>frontend frameworks</span> for web applications such as React and Redux</p>
            <p>Frontend <span className='span'>UI libraries</span>, such as Bootstrap and React-Bootstrap</p>
            <p>Performing <span className="span">UX/UI</span> design activities</p>

            <p>Build web applications by using <span className='span'>responsive</span> HTML/CSS practices</p>

            <p>Security frameworks for <span className='span'>authorization and authentication</span></p>
            <p>Creating and executing <span className='span'>unit testing</span> and debugging</p>
            <p><span className='span'>Version control systems</span> such as GitHub</p>

            <p><span className='span'>Creation and deployment</span> of APIs</p>

            <p>Use third party <span className='span'>APIs</span> with Authorization requirements</p>

            <p>SQL <span className='span'>database</span></p>

            <p>Design and development of <span className='span'>full-stack</span> web applications</p>

            <p>Efficient <span className='span'>data structures</span> and analizes algorithms with BigO notation</p>
            <p>Follow <span className='span'>accessibility</span> best practices</p>

            <p>Production of fully functional applications writing <span className='span'>clean code</span>.</p>
            <p>Heavily <span className='span'>problem solving</span> oriented.</p>

            <p>Excellent <span className='span'>time managment</span></p>

            <h2 className='span'>Work Experience</h2>

            <h3>Whole Foods (Overland Park, KS)</h3>
            <p>Aug 2022 - Present</p>
            <p>Sales Assistant</p>

            <h3>Waiting for work permit</h3>
            <p>Nov 2021 - Aug 2022</p>
            <p>Study Software Development</p>

            <h3>Deichmann (Almeria, Spain)</h3>
            <p>Dec 2019 - Nov 2021</p>
            <p>Sales Assistant</p>

            <h3>Online translation services</h3>
            <p>Apr 2020 - Nov 2021</p>
            <p>at Gengo and Rev.com</p>

            <h3>Whole Foods (London, UK)</h3>
            <p>Dec 2018 - Oct 2019</p>
            <p>Sales Assistant</p>

            <h3>Aramark (JP. Morgan Building, London)</h3>
            <p>Apr 2018 - Dec 2018</p>
            <p>CateringAssistant</p>


            <h3>Whole Foods (London, UK)</h3>
            <p>Oct 2017 - Apr 2018</p>
            <p>Sales Assistant</p>

        <h2 className='span'>Education</h2>
        <h3>University of Granada</h3>
        <p>Philosophy Degree</p>
        <p>Spain</p>

        <h3>LaunchCode Web Development Course</h3>
        <p>Front-end: JavaScript, Angular and TypeScripat</p>
        <p id='last-sentenc'>Back-end: Java, Thymeleaf and Spring</p>
            </Container>
            <Image id='astronaut' src={require('../../imgs/astronaut.png')} />
            <Image id='rocket' src={require('../../imgs/rocket.png')} />
        </Container>
    )
}