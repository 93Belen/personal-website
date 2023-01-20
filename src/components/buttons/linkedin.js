import { Button } from "react-bootstrap"
import "./buttons.css";

export const Linkedin = () => {

    const takeToLinkedin = () => {
        window.open('https://www.linkedin.com/in/93belen/')
    }


    return <Button onClick={takeToLinkedin} onTouchStart={takeToLinkedin} id='linkedin' variant='outline-info'>LinkedIn</Button>
}