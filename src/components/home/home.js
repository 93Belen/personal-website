import { Col, Container, Row, Image } from "react-bootstrap"
import './home.css';
import "../../index.css";
import { GitHub } from "../buttons/github";




export const Home = () => {
    return (
        <Container id='home'>
            <Row id='row'>
                <Col className='d-flex' id='title' md={{span: 7, offset: 1}} xs={{span: 12}}><h1 id='h1'>Hi, I'm <span className='span'>Belén</span><br/>
                a <span className='span'>Software Developer</span></h1></Col>

                <Col className='d-flex' id='sub-text' xs={{span: 12}} md={{order: 'first', span: 4}}><p className='p'>From Ikea furniture<br/>
                to full-stack web apps...<br/>
                I just love building stuff</p>
                <GitHub /></Col>
                <Image id='img-me' src={require('../../imgs/me.png')} />
        </Row>
        </Container>
    )
}