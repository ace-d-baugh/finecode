// components/Button/Button.tsx

import { Link } from 'react-router-dom';
import Frame from '../Frame/Frame';
import './Button.css'

function Button({ text, link }: { text: string; link: string }) {
    return (
        <Link to={link}>
            <Frame className="button">{text}</Frame>
        </Link>
    );
}

export default Button