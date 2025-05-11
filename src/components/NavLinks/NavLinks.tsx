// components/NavLinks/NavLinks.tsx

import { Link } from 'react-router-dom';
import './NavLinks.css';
import Frame from "../Frame/Frame";

function NavLinks() {
	return (
		<div className="NavLinks">
			<Frame>
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
						<Link to="/blog">Blog</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</Frame>
		</div>
	);
}

export default NavLinks;
