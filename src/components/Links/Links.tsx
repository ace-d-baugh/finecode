// Links.js
import { Link } from 'react-router-dom';
import './Links.css';

function Links() {
	return (
		<ul className="navbar-links">
			<li>
				<Link to="/about">About</Link>
			</li>
			<li>
				<Link to="/portfolio">Portfolio</Link>
			</li>
			<li>
				<Link to="/resume">Resum&eacute;</Link>
			</li>
			<li>
				<Link to="/contact">Contact</Link>
			</li>
		</ul>
	);
}

export default Links;
