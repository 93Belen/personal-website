import { Button} from "react-bootstrap"
import "./buttons.css";

export const YouTube = (props) => {
    const url = props.url;

    const takeToGitHub = () => {
        window.open(url)
    }
    

    return <Button onClick={takeToGitHub} onTouchStart={takeToGitHub} id='youtube' variant='outline-warning'>Video</Button>
}