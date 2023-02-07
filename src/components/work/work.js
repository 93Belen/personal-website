import './work.css';
import '../../index.css';
import { Container, Carousel, OverlayTrigger, Tooltip, Row, Col } from 'react-bootstrap';
import { GitHub } from '../buttons/github';
import { icons } from '../icons/icons';
import { YouTube } from '../buttons/youtube';

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
                case 'BootStrap' || 'React-Bootstrap':
                    icon = icons.bootstrap;
                break;
                case 'Redux':
                    icon = icons.redux;
                break;

                case 'MySQL':
                    icon = icons.mysql;
                break;
                case 'Git':
                    icon = icons.git;
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
        <h1>WalkKit Web & App<br/> {renderTech(['HTML', 'CSS', 'JavaScript', "React", "Git"])}</h1>
                <p>Website and App that show you the best times to walk your dog based on the weather conditions.
                The Web version is built with Vanilla JavaScript, it gives you a summary of the best times for the whole week, has a responsive design, and follows accessibility best practices.
                On the other hand, the App is built with React Native and it tells you whether the conditions are good or not for each hour of the same day.</p>
                <p><span className='span'>Check out the video below</span> to see the web version in action. In this video I explain how I made it, the problems that I encountered, how I solved them, and what I learned from them.</p>
                    <Container id='tech-icons'>
                    </Container>
                    <Container className='video-container'>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6LPBX8z4vxE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Container>
                <Container id='githubButton'>
                    <Col>
                        <Row><YouTube url="https://youtu.be/6LPBX8z4vxE" /></Row>
                        <Row><GitHub url={'https://github.com/stars/93Belen/lists/walkkit-web-app'} /></Row>
                    </Col>
                </Container>
      </Carousel.Item>
      <Carousel.Item>
        <h1>LegaAlly<br/> {renderTech(["JavaScript", 'React', "Redux", "Git", "Java"])}</h1>
                <p>Website that provides you with information about abortion rights in the US, based on your particular case.
 The back end is built with Spring and Java and calls a third-party API. The front end is built with React, Redux and React-router-dom.
                </p>
                <p><span className='span'>Check out the video below</span> to see this project in action. In this video I explain how I made it, the problems that I encountered, how I solved them, and what I learned from them.</p>
                <Container id='tech-icons'>
                    </Container>
                    <Container className='video-container'>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6LPBX8z4vxE?start=212" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Container>
                <Container id='githubButton'>
                    <Col>
                        <Row><YouTube url='https://youtu.be/6LPBX8z4vxE?t=213' /></Row>
                        <Row><GitHub url={'https://github.com/stars/93Belen/lists/legally'} /></Row>
                    </Col>       
                </Container>
      </Carousel.Item>
       <Carousel.Item>
        <h1>KCB<br/> {renderTech(['React', "Redux", "Git", "Java", "MySQL"])}</h1>
                <p>Website where, as a business owner who is part of a minority, you can create an account and register your businesses into a database. 
                    And as a non-business owner, you can create an account to look for minority owned businesses in the Kansas City area and Like them. 
                    If you decide not to create an account, you will still be able to look for businesses, but wont be able to create a Like list.</p>
                    <p id='disclaimer'>This is a group project and my responsabilities are:</p>
                    <ul id='list'>
                        <li>Authorization with Spring Security</li>
                        <li>Designed front-end</li>
                        <li>Built React and Redux</li>
                        <li>Responsive design</li>
                        <li>Some front-end functionality</li>
                    </ul>
                <Container id='tech-icons'>
                    </Container>
                <Container id='githubButton'>
                    <Col>
                    <Row><GitHub url={'https://github.com/stars/93Belen/lists/kcb'} /></Row>
                    </Col>
                    
                </Container>
      </Carousel.Item>
    </Carousel>
            </Container>
        </Container>
    )
}