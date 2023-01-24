import './contact.css';
import '../../index.css';
import { Container} from 'react-bootstrap';
import { GitHub } from '../buttons/github';
import { Linkedin } from '../buttons/linkedin';

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
                    <GitHub url={'https://github.com/93Belen'} />
                </Container>           
            </Container>
        </Container>
    )
}