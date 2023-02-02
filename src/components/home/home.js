import { Col, Container, Row, Image } from "react-bootstrap"
import './home.css';
import "../../index.css";
import { GitHub } from "../buttons/github";




export const Home = () => {
    return (
        <Container id='home'>
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
            <Row id='row'>
                <Col className='d-flex' id='title' md={{span: 7}} xs={{span: 12}}><h1 id='h1'>Hi, I'm <span className='span'>Belén</span><br/>
                a <span className='span'>Software Developer</span></h1></Col>

                <Col className='d-flex' id='sub-text' xs={{span: 12}} md={{order: 'first', span: 4}}><p className='p'>From Ikea furniture<br/>
                to full-stack web apps...<br/>
                I just love building stuff</p>
                <GitHub url={'https://github.com/93Belen'} /></Col>
                <Image id='img-me' src={require('../../imgs/me.png')} />
        </Row>
        </Container>
    )
}