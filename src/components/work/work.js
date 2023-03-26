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
                <h1>Artist Website<br/> {renderTech(['Redux', 'JavaScript', "React", "Git"])}</h1>
                <p>Website where an artist can sell his work. I built this project usin Next.js 13, Tailwind CSS, and I deployed it with Vercel. I used Stripe for the payment process.</p>
                <p>Click here to see the project live! <a style={{textDecoration: 'none', color: 'var(--orange)'}} target='_blank' rel="noreferrer" href='https://artist-porfolio.vercel.app'>Artist Website</a></p>
                    <Container id='tech-icons'>
                    </Container>
                    <Container className='video-container'>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Tt6ZlcI6tCc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Container>
                <Container id='githubButton'>
                    <Col>
                        <Row><YouTube url="https://youtu.be/Tt6ZlcI6tCc" /></Row>
                        <Row><GitHub url={'https://github.com/93Belen/artist-porfolio'} /></Row>
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
                        <li>Log-in and Sign-up functionality (Front and Back-end)</li>
                        <li>Design and built React and React-Bootstrap skeleton, and Redux logic</li>
                        <li>Different buttons functionalities (front-end)</li>
                        <li>Search functionality using knowledge of data structures and algorithms</li>
                        <li>Navigational and redirect  functionalities with React-router-dom and Private Routes</li>
                        <li>Coded half of the mobile-friendly responsive design</li>
                        <li>Unit testing with Jest</li>
                        <li>Deployed Front and Back end</li>
                    </ul>
                    <p>Click here to see the project live! <a style={{textDecoration: 'none', color: 'var(--orange)'}} target='_blank' rel="noreferrer" href='https://kcbusiness.dev'>kcbusiness.dev</a></p>
                <Container id='tech-icons'>
                    </Container>
                    <Container className='video-container'>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZHQ6mT0hFgY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Container>
                <Container id='githubButton'>
                    <Col>
                    <Row><YouTube url='https://youtu.be/ZHQ6mT0hFgY' /></Row>
                    <Row><GitHub url={'https://github.com/stars/93Belen/lists/kcb'} /></Row>
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
    </Carousel>
            </Container>
        </Container>
    )
}