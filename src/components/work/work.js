import './work.css';
import '../../index.css';
import { Container, Carousel, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { GitHub } from '../buttons/github';
import { icons } from '../icons/icons';

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
                default:
                
                
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
                        {renderTech(['HTML', 'CSS', 'JavaScript', "React Native", "Figma", "Jest", "Git"])}
                    </Container>
                    
                <div id='githubButton'>
                    <GitHub url={'https://github.com/stars/93Belen/lists/walkkit-web-app'} />
                </div>
      </Carousel.Item>
      <Carousel.Item>
        <h1>LegaAlly</h1>
                <p>Website that provides you with information about abortion rights in the US, based in your particular case.
                The back-end is built with Spring and Java, and calls a third party API. The front-end is built with React, Redux and React-router-dom.
                </p>
                <Container id='tech-icons'>
                    <h2>Technologies</h2>
                        {renderTech(['HTML', 'CSS', "JavaScript", 'React', "Redux", "Figma", "Git", "Spring", "Java"])}
                    </Container>
                <div id='githubButton'>
                    <GitHub url={'https://github.com/stars/93Belen/lists/legally'} />
                </div>
      </Carousel.Item>
       <Carousel.Item>
        <h1>KCB</h1>
                <p>Website where, as a business owner who is part of a minority, you can create an account and register your businesses into a database. 
                    And as a non-business owner, you can create an account and look for minority owned businesses in the Kansas City area. 
                    If you create an account you can also add businesses to your personal liked list. If you decide not to create an account, you will still be able to look for businesses, but wont be able to create a liked list.</p>
                    <p id='disclaimer'>This is a group project and my responsabilities are:</p>
                    <ul id='list'>
                        <li>Authorization with Spring Security</li>
                        <li>Designed front-end</li>
                        <li>Built React and Redux</li>
                        <li>Responsive design</li>
                        <li>Some front-end functionality</li>
                    </ul>
                <Container id='tech-icons'>
                    <h2>Technologies</h2>
                        {renderTech(['HTML', 'CSS', "JavaScript", 'React', "Redux", "Figma", "Git", "Spring", "Java", "MySQL", "Postman"])}
                    </Container>
                <div id='githubButton'>
                    <GitHub url={'https://github.com/stars/93Belen/lists/kcb'} />
                </div>
      </Carousel.Item>
    </Carousel>
            </Container>
        </Container>
    )
}