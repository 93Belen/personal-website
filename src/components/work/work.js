import './work.css';
import '../../index.css';
import { Container, Image, Row, Col, Carousel, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { GitHub } from '../buttons/github';
import { icons } from '../icons/icons';
import { render } from '@testing-library/react';

export const Work = () => {

    const renderTech = (arr) =>{
        const result = [];
        arr.forEach(element => {
            let icon;
            switch(element){
                case 'HTML':
                    icon =  icons.html;
                break;
                case 'CSS':
                    icon = icons.css;
                break;
                case 'JavaScript':
                    icon = icons.javascript;
                break;
                case 'Python':
                    icon = icons.python;
                break;
                case 'Java':
                    icon = icons.java;
                break;
                case 'React':
                    icon = icons.react;
                break;
                case 'React Native':
                    icon = icons.reactNative;
                break;
                case 'BootStrap' || 'React-Bootstrap':
                    icon = icons.bootstrap;
                break;
                case 'Redux':
                    icon = icons.redux;
                break;
                case 'Spring':
                    icon = icons.spring;
                break;
                case 'MySQL':
                    icon = icons.mysql;
                break;
                case 'Git':
                    icon = icons.git;
                break;
                case 'Figma':
                    icon = icons.figma;
                break;
                case 'Jasmine':
                    icon = icons.jasmine;
                break;
                case 'Jest':
                    icon = icons.jest;
                break;
                case 'Mocha':
                    icon = icons.mocha;
                break;
                case 'Postman':
                    icon = icons.postman;
                break;
                
                
            }
            result.push(
                <OverlayTrigger
                className='overlay'
                placement='right'
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip id="button-tooltip-2">{element}</Tooltip>}
                >
                  {icon}
                </OverlayTrigger>
            )
        });
        return result
    }

    return (
        <Container id='work'>
            <Container id='blur'>
            <Carousel id='carousel' variant='light' interval={null}>
      <Carousel.Item>
        <h1>WalkKit Web & App</h1>
                <p>Website and App that show you the best times to walk your dog based on the weather conditions.
                The Web version gives you a sumary of the best times for the whole week, have a responsive design, and follows accesibility and best practices.
                While the App tells you whether the conditions are good or not, for each hour of the same day.</p>
                    <Container id='tech-icons'>
                    <h2>Technologies</h2>
                        {renderTech(['HTML', 'CSS', 'React', "React Native", "Figma", "Jest", "Git"])}
                    </Container>
                    
                <div id='githubButton'>
                    <GitHub url={'https://github.com/stars/93Belen/lists/walkkit-web-app'} />
                </div>
      </Carousel.Item>
      <Carousel.Item>
        <h1>Project Name 2</h1>
                <p>Small description of the prject blablabla about the project and maybe I dont know, something else I cant think of anything right now</p>
                    <h2>Technologies</h2>
                    <Container id='tech-icons'><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
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
                    </a></Container>
                <div id='githubButton'>
                    <GitHub url={'https://github.com/93Belen'} />
                </div>
      </Carousel.Item>
       <Carousel.Item>
        <h1>Project Name 3</h1>
                <p>Small description of the prject blablabla about the project and maybe I dont know, something else I cant think of anything right now</p>
                    <h2>Technologies</h2>
                    <Container id='tech-icons'><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
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
                    </a></Container>
                <div id='githubButton'>
                    <GitHub url={'https://github.com/93Belen'} />
                </div>
      </Carousel.Item>
    </Carousel>
            </Container>
        </Container>
    )
}