import { Button} from "react-bootstrap"
import "./buttons.css";

export const GitHub = (props) => {
    const url = props.url;

    const takeToGitHub = () => {
        window.open(url)
    }
    

    return <Button onClick={takeToGitHub} onTouchStart={takeToGitHub} id='github' variant='outline-warning'>GitHub</Button>
}