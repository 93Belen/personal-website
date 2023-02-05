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
            <div id='star-1'>
                <svg width="260" height="152" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.550349 151.626C-0.420877 149.955 41.1943 123.463 70.4961 106.435C99.7978 89.4068 258.746 -1.14981 259.718 0.521477C260.689 2.19276 103.315 95.459 74.0132 112.487C44.7114 129.515 1.52158 153.297 0.550349 151.626Z" fill="url(#paint0_radial_75_3)"/>
<defs>           
<radialGradient id="paint0_radial_75_3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(62.1656 115.323) rotate(-31.6786) scale(314.014 7.71934)">
<stop stop-color="#F3EFE8" stop-opacity="0.42"/>
<stop offset="1" stop-color="#D9D9D9" stop-opacity="0"/>
</radialGradient>
</defs>
            </svg>
            </div>
            <div id='star-2'>
                <svg width="260" height="152" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.550349 151.626C-0.420877 149.955 41.1943 123.463 70.4961 106.435C99.7978 89.4068 258.746 -1.14981 259.718 0.521477C260.689 2.19276 103.315 95.459 74.0132 112.487C44.7114 129.515 1.52158 153.297 0.550349 151.626Z" fill="url(#paint0_radial_75_3)"/>
<defs>           
<radialGradient id="paint0_radial_75_3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(62.1656 115.323) rotate(-31.6786) scale(314.014 7.71934)">
<stop stop-color="#F3EFE8" stop-opacity="0.42"/>
<stop offset="1" stop-color="#D9D9D9" stop-opacity="0"/>
</radialGradient>
</defs>
            </svg>
            </div>
            <div id='star-3'>
                <svg width="260" height="152" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.550349 151.626C-0.420877 149.955 41.1943 123.463 70.4961 106.435C99.7978 89.4068 258.746 -1.14981 259.718 0.521477C260.689 2.19276 103.315 95.459 74.0132 112.487C44.7114 129.515 1.52158 153.297 0.550349 151.626Z" fill="url(#paint0_radial_75_3)"/>
<defs>           
<radialGradient id="paint0_radial_75_3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(62.1656 115.323) rotate(-31.6786) scale(314.014 7.71934)">
<stop stop-color="#F3EFE8" stop-opacity="0.42"/>
<stop offset="1" stop-color="#D9D9D9" stop-opacity="0"/>
</radialGradient>
</defs>
            </svg>
            </div>
            <div id='star-4'>
                <svg width="260" height="152" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.550349 151.626C-0.420877 149.955 41.1943 123.463 70.4961 106.435C99.7978 89.4068 258.746 -1.14981 259.718 0.521477C260.689 2.19276 103.315 95.459 74.0132 112.487C44.7114 129.515 1.52158 153.297 0.550349 151.626Z" fill="url(#paint0_radial_75_3)"/>
<defs>           
<radialGradient id="paint0_radial_75_3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(62.1656 115.323) rotate(-31.6786) scale(314.014 7.71934)">
<stop stop-color="#F3EFE8" stop-opacity="0.42"/>
<stop offset="1" stop-color="#D9D9D9" stop-opacity="0"/>
</radialGradient>
</defs>
            </svg>
            </div>
            <Container id='contact-info'>
                <Container id='text-container'>
                    <Row>
                    <Col md={6} xs={12}>
                        <p>&#128075; Hey! If you need a Software Developer <span className='span'>passionate</span> about the craft,
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