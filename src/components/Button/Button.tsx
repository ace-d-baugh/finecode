import { Link } from 'react-router-dom';
import Frame from '../Frame/Frame';

function Button({ text, link }: { text: string; link: string }) {
    return (
        <Link to={link}>
            <Frame>{text}</Frame>
        </Link>
    );
}

export default Button