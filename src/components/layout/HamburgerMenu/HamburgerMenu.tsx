// components/HamburgerMenu/HamburgerMenu.tsx

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
						<Link to="/about">
							<i className="nf nf-oct-person_fill"> <span>About</span></i>
						</Link>
					</li>
					<li>
						<Link to="/portfolio">
							<i className="nf nf-oct-briefcase"> <span>Portfolio</span></i>
						</Link>
					</li>
					<li>
						<Link to="/resume">
							<i className="nf nf-oct-log"> <span>Resumé</span></i>
						</Link>
					</li>
					<li>
						<Link to="/blog">
							<i className="nf nf-fa-book_journal_whills"> <span>Blog</span></i>
						</Link>
					</li>
					<li>
						<Link to="/contact">
							<i className="nf nf-md-email_newsletter"> <span>Contact</span></i>
						</Link>
					</li>
				</ul>
			)}
		</div>
	);
}

export default HamburgerMenu;
