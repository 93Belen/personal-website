import './contact.css';
import '../../index.css';
import { Container, Form, FormGroup, FloatingLabel, FormControl, Button, Col, Row} from 'react-bootstrap';
import { GitHub } from '../buttons/github';
import { Linkedin } from '../buttons/linkedin';
import { useForm, ValidationError } from '@formspree/react';

export const Contact = () => {
    const [state, handleSubmit] = useForm("xyyaknaq");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
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
                        {/* <Form
                        action="https://formspree.io/f/xyyaknaq"
                        method="POST"
                        id='email-form' enctype="text/plain">
                        <FormGroup
                    className='mb-3 input'
                    >
                        <FloatingLabel
                        label='Email'
                        >
                        <FormControl name='email' type='email'  id='email' type='text' />
                        </FloatingLabel>
                    </FormGroup>
                    <FormGroup
                    className='mb-3 input'
                    >
                        <FloatingLabel
                        label='Email'
                        >
                        <FormControl name='message' id='email-text' type='text' />
                        </FloatingLabel>
                    </FormGroup>
                    <Button id='submit' type='submit' variant='outline-warning'>Send it!</Button>
                        </Form> */}
                        <Form id='email-form' onSubmit={handleSubmit}>
                            <FormGroup
                            className='mb-3 input'
                            >
                                <FloatingLabel label='email' htmlFor="email">
                            <FormControl
                                id="email"
                                type="email" 
                                name="email"
                            />
                            <ValidationError 
                                prefix="Email" 
                                field="email"
                                errors={state.errors}
                            />
                            </FloatingLabel>
                            </FormGroup>
                            <FormGroup
                            className='mb-3 input'
                            >
                                <FloatingLabel label='message'>
                                    <FormControl
                                    id="message"
                                    name="message"
                                    as='textarea' />
                                <ValidationError 
                                prefix="Message" 
                                field="message"
                                errors={state.errors}
                            />
                                </FloatingLabel>
                            </FormGroup>
                            <Button id='submit' variant='outline-warning' type="submit" disabled={state.submitting}>
                                Submit
                            </Button>
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