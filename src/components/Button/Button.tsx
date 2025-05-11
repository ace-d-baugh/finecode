import { Link } from 'react-router-dom';
import Outline from '../Outline/Outline';

function Button({ text, link }: { text: string; link: string }) {
    return (
        <Link to={link}>
            <Outline>{text}</Outline>
        </Link>
    );
}

export default Button