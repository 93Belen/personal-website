import { Col, Container, Row, Image } from "react-bootstrap"
import './home.css';
import "../../index.css";
import { GitHub } from "../buttons/github";




export const Home = () => {
    return (
        <Container id='home'>
            <Row id='title'>
                <Col><h1 id='h1'>Hi, I'm <span className='span'>Belén</span><br/>
                a <span className='span'>Software Developer</span></h1></Col>
            </Row>
            <Row id='text'>
                <Col><p className='p'>From Ikea furniture<br/>
                to full-stack web apps...<br/>
                I just love building stuff</p></Col>
            </Row>
            <Row id='githubRow'>
                <Col><GitHub /></Col>
            </Row>
            <Row id='imgRow'>
                <Col><Image id='img-me' src={require('../../imgs/me.png')} /></Col>
            </Row>
        </Container>
    )
}