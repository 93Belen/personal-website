import './work.css';
import '../../index.css';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { GitHub } from '../buttons/github';

export const Work = () => {
    return (
        <Container id='work'>
            <Container id='blur'>
                <h1>Project Name</h1>
                <p>Small description of the prject blablabla about the project and maybe I dont know, something else I cant think of anything right now</p>
                    <div id='media'></div>
                    <h2>Technologies</h2>
                    <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
                    </a>
                    <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
                    </a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
                    </a> 
                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> 
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> 
                    </a> 
                    <a href="https://reactnative.dev/" target="_blank" rel="noreferrer"> 
                        <img src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" width="40" height="40"/>
                    </a> 
                    <a href="https://redux.js.org" target="_blank" rel="noreferrer"> 
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/> 
                    </a>
                <div id='githubButton'>
                    <GitHub />
                </div>
            </Container>
        </Container>
    )
}