import { Container, Image, Col, Row } from "react-bootstrap"
import {Linkedin} from '../buttons/linkedin'
import './about.css'
import '../../index.css';

export const About = () => {
    return (
        <Container id='about'>
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
            <Container id='textContainer'>
            <Row style={{width: '77vw', maxHeight: '250px'}}>
            <Col md={10} sx={12}><h1 id='h1'> Hi! My name is <span className='span'>Belén</span>, a <span className='span'>Software Developer</span> from Spain, currently living in <span className='span'>Kansas City</span>.</h1></Col>
            <Col md={2} sx={0}><Image id='img-me-smile' src={require('../../imgs/me-smile.png')} /> </Col>
            </Row>
            <p>After studying <span className='span'>Philosophy</span> at the University of Granada, I moved to <span className='span'>London</span>.</p>
            <p>Looking for opportunities to better my life, I flee the economic struggles and work desert of <span className='span'>Spain</span>, not knowing a word of English and having almost no work experience.</p>
            <p>Two years later, I was fluent in <span className='span'>English</span> and had developed a strong work ethic and a career in retail.</p>
            <p>Worried about <span className='span'>Brexit</span> and its impact, I moved back to my country, as many others in my situation did. Few months later... Covid hit.</p>
            <p>During the Lock-down in Spain, I stumbled upon <span className='span'>coding</span>, and haven't stopped building projects since.</p>
            <p>But, after a couple of years, hopeless again about the future of <span className='span'>Spain</span>, 
            and having to survive with little more than $600 a month, my husband and I moved to <span className='span'>America</span>, where he grew up.</p>
            <p>Here, hard work pays off, and it has taken me little less than a year to get job ready for a carreer in <span className='span'>Tech</span>.</p>
            <p>Now, I see how my education in philosophy prepared me to understand <span className='span'>complex systems</span>, 
            find problems within them, and solve them by thinking <span className='span'>logically</span> and creatively.</p>
            <p>Becoming bilingual has made it easy for me to learn new <span className='span'>languages</span>.</p>
            <p>While, moving around the <span className='span'>world</span> and working in retail, have shaped me to be driven, learn fast, work hard, understand people, and be a team player.</p>
            <p>I have completed a couple of courses, but most importantly, I spend endless hours learning, coding, and researching.</p>
            <p><span className='span'>I just love building stuff</span>.</p>
            <p id='last-sentence'>I am seeking a full-time position as a <span className='span'>React Developer</span>. Connect with me in LinkedIn!
            <Linkedin /></p>
            </Container>
            <Image id='img-amercia' src={require('../../imgs/america-2.png')} />
        </Container>
    )
}