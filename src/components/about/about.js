import { Container, Image } from "react-bootstrap"
import {Linkedin} from '../buttons/linkedin'
import './about.css'
import '../../index.css';

export const About = () => {
    return (
        <Container id='about'>
            <Container id='textContainer'>
            <h1 id='h1'> Hi! My name is <span className='span'>Belen</span>, a <span className='span'>Software Developer</span> from Spain, currently living in <span className='span'>Kansas City</span>.</h1>
            <p>After studying <span className='span'>Philosophy</span> at the University of Granada, I moved to <span className='span'>London</span>.</p>
            <p>Looking for opportunities to better my life, I flee the economic struggles and work desert of <span className='span'>Spain</span>, not knowing a word of English and having almost no work experience.</p>
            <p>Two years later, I was fluent in <span className='span'>English</span> and had developed a strong work ethic and a career in retail.</p>
            <p>A few months before Covid hit, I moved back to my country, as many immigrants did, worried about the crisis that <span className='span'>Brexit</span> might bring to England.</p>
            <p>During the Lock-down in Spain, I stumbled upon <span className='span'>coding</span>, and haven't stopped building projects since.</p>
            <p>But, after a couple of years, desapointed with how little the economic situation had improved in <span className='span'>Spain</span>, 
            and having to survive with little more than $600 a month, my husband and I moved to <span className='span'>America</span>, where he grew up.</p>
            <p>Here, hard work pays off, and it has taken me little less than a year to prepare myself for a carreer in <span className='span'>Tech</span>.</p>
            <p>Now, I see how my education in philosophy prepared me to understand <span className='span'>complex systems</span>, 
            find problems within them, and solve them by thinking <span className='span'>logically</span> and creatively.</p>
            <p>Becoming bilingual has made it easy for me to learn new <span className='span'>languages</span>.</p>
            <p>While, moving around the <span className='span'>world</span> and working in retail, have shaped me to be driven, learn fast, work hard, understand people, and be a team player.</p>
            <p>I have completed a couple of courses, but most importantly, I spend endless hours learning, coding, and researching.</p>
            <p><span className='span'>I just love building stuff</span>.</p>
            <p id='last-sentence'>I am seeking a full-time position as a <span className='span'>React Developer</span>. Connect with my in LinkedIn!
            <Linkedin /></p>
            </Container>
            <Image id='img-amercia' src={require('../../imgs/america.png')} />
        </Container>
    )
}