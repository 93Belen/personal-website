import './contact.css';
import '../../index.css';
import { Container, Row, Col } from 'react-bootstrap';
import { GitHub } from '../buttons/github';
import { Linkedin } from '../buttons/linkedin';
import { Link } from 'react-router-dom';

export const Contact = () => {
    return (
        <Container id='contact'>
            <Container id='contact-info'>
                <Container id='text-container'>
                    <h2>Email</h2>
                    <p>93bgarciamartinez@gmail.com</p>
                    <h2>Phone</h2>
                    <p>913-274-0955</p>
                    <Linkedin />
                    <GitHub />
                </Container>           
            </Container>
        </Container>
    )
}