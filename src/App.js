import { Home } from "./components/home/home";
import "./App.css"
import { Container } from "react-bootstrap";
import { About } from "./components/about/about";
import { Contact } from "./components/contact/contact";
import { Cv } from './components/cv/cv';
import { Work } from "./components/work/work";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/nav/nav";

function App() {
  return (
    <Container id='app'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/cv' element={<Cv />}></Route>
        <Route path='/work' element={<Work />}></Route>
      </Routes>
    </Container>
  )
}

export default App;
