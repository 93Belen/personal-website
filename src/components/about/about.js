import { Container } from "react-bootstrap"
import './about.css'
import '../../index.css';

export const About = () => {
    return (
        <Container id='about'>
            <Container id='text-container'>
                <p>A few years ago, I moved to <span className='span'>London</span>, not knowing a word of English and having almost no work experience.</p>
                <p>Two years later, I was <span className='span'>fluent in English</span> and had developed a strong work ethic and a career.</p>
                
                <p>During the lock-down in <span className='span'>Spain</span>, I stumbled upon coding, and haven't stopped building projects since.</p>

                <p>Now, I see how my education in <span className='span'>philosophy</span> prepared me to understand complex systems, find problems within them, and <span className='span'>solve them</span> by thinking logically and creatively.</p>
                <p>Becoming bilingual has made it easy for me to <span className='span'>learn new languages</span>.</p>

                <p>While, moving around the world and working in retail, have shaped me to be <span className='span'>driven</span>, learn fast, work hard, understand people, and be a team player.</p>

                <p>I have completed a couple of courses, but most importantly, I spend endless hours learning, coding, and researching.</p>
                <p><span id='last-sentence' className='span'>I just love building stuff</span>.</p>
            </Container>
        </Container>
    )
}