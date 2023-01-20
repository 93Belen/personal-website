import { Home } from "./components/home/home";
import "./App.css"
import { Col, Container } from "react-bootstrap";
import { About } from "./components/about/about";
import { Contact } from "./components/contact/contact";
import { Cv } from './components/cv/cv';
import { Work } from "./components/work/work";
import { Routes, Route } from "react-router-dom";
import { NavElement } from "./components/nav/nav";
import {useLocation} from 'react-router-dom';
import { useEffect } from "react";

function App() {
  const location = useLocation();
  useEffect(()=>{
    if(location.pathname != '/' && window.innerWidth > 768){
      document.getElementById('nav-col').style.background = 'var(--blue)'
    }
    else {
      document.getElementById('nav-col').style.background = 'var(--black)'
    }
  });

  return (
    <Container id='app'>
      <Col id='nav-col' sx={12} md={2}><NavElement /></Col>
      <Col id='page-col' sx={12} md={10}><Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/cv' element={<Cv />}></Route>
        <Route path='/work' element={<Work />}></Route>
      </Routes></Col>    
    </Container>
  )
}

export default App;
