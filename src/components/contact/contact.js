import './contact.css';
import '../../index.css';
import { Container, Form, FormGroup, FloatingLabel, FormControl, Button, Col, Row, Modal} from 'react-bootstrap';
import { GitHub } from '../buttons/github';
import { Linkedin } from '../buttons/linkedin';
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';

export const Contact = () => {
    const [show, setShow] = useState(false);
    let header;
    const [state, handleSubmit] = useForm("xyyaknaq");

  if (state.succeeded) {
      header = 'Thank you for your message! '

  }
  else {
      header = 'Sorry, something went wrong.'

  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
    return (
        <Container id='contact'>
            <Container id='contact-info'>
                <Container id='text-container'>
                    <Row>
                    <Col md={6} xs={12}>
                        <p>&#128075; Hey! If you need a Software Developer <span className='span'>passionated</span> about the craft,
                            I am currently looking for a position as a <span className='span'>React Developer</span>. 
                            Email me at <span className='span'>belengm.dev@gmail.com</span><br/></p>
                            
                    </Col>
                    <Col md={6} xs={12}>
                        <Form id='email-form' onSubmit={handleSubmit}>
                            <Modal className='modal' show={show} onHide={handleClose}>
                                <Modal.Header className='modal-header' closeButton>
                                    {header}
                                </Modal.Header>
                            </Modal>
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
                            <Button onClick={handleShow} id='submit' variant='outline-warning' type="submit" disabled={state.submitting}>
                                Submit
                            </Button>
                            </Form>
                    </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                           <p>&#128073; And don't forget to <span className='span'>connect with me</span><br/>
                            <Linkedin />
                            <GitHub url={'https://github.com/93Belen'} /></p>
                        </Col>
                    </Row>
                </Container>           
            </Container>
        </Container>
    )
}