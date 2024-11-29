import { useState } from 'react';
import { Link } from 'react-router-dom';
import './HamburgerMenu.css';

function HamburgerMenu() {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="hamburger-menu">
			<button className="hamburger-button" onClick={handleToggle}>
				<span className="hamburger-icon"></span>
			</button>
			{isOpen && (
				<ul className="hamburger-links">
					<li>
						<Link to="/">Home</Link>
					</li>
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
			)}
		</div>
	);
}

export default HamburgerMenu;
