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
                <p>&#128075; Hey! If you need a Software Developer pasionated about the craft<br/>
                    I am currently looking for a position as a <span className='span'>React Developer</span><br/>
                    Contact me via email at <span className='span'>belengm.dev@gmail.com</span><br/>
                    Call me at <span className='span'>913-274-0955</span><br/>
                    And dont forget to <span className='span'>connect with me</span><br/>
                    <Linkedin />
                    <GitHub url={'https://github.com/93Belen'} />
                </p>
                </Container>           
            </Container>
        </Container>
    )
}