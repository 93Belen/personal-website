import './contact.css';
import '../../index.css';
import { Container, Form, FormGroup, FloatingLabel, FormControl, Button, Col, Row} from 'react-bootstrap';
import { GitHub } from '../buttons/github';
import { Linkedin } from '../buttons/linkedin';

export const Contact = () => {
    const info = {
        email: '',
        subject: '',
        body: ''
    }

    return (
        <Container id='contact'>
            <Container id='contact-info'>
                <Container id='text-container'>
                    <Row>
                    <Col md={6} xs={12}>
                        <p>&#128075; Hey! If you need a Software Developer <span className='span'>passionated</span> about the craft,
                            I am currently looking for a position as a <span className='span'>React Developer</span>. 
                            Email me at <span className='span'>belengm.dev@gmail.com</span><br/></p>
                            <p>&#128222; Call me at <span className='span'>913-274-0955</span><br/>
                            &#128187; And don't forget to <span className='span'>connect with me</span><br/></p>
                    </Col>
                    <Col md={6} xs={12}>
                        <Form method="post" action='mailto:belengm.dev@gmail.com' id='email-form' enctype="text/plain">
                        <FormGroup
                    className='mb-3 input'
                    >
                        <FloatingLabel
                        label='Email'
                        >
                        <FormControl name='email' id='email' type='text' />
                        </FloatingLabel>
                    </FormGroup>
                    <FormGroup
                    className='mb-3 input'
                    >
                        <FloatingLabel
                        label='Subject'
                        >
                        <FormControl name='subject' id='subject' type='text' />
                        </FloatingLabel>
                    </FormGroup>
                    <FormGroup
                    className='mb-3 input'
                    >
                        <FloatingLabel
                        label='Email'
                        >
                        <FormControl name='body' id='email-text' type='text' />
                        </FloatingLabel>
                    </FormGroup>
                    <Button id='submit' type='submit' variant='outline-warning'>Send it!</Button>
                        </Form>
                    </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Linkedin />
                            <GitHub url={'https://github.com/93Belen'} />
                        </Col>
                    </Row>
                </Container>           
            </Container>
        </Container>
    )
}