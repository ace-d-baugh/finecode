// components/NavLinks/NavLinks.tsx

import { Link } from 'react-router-dom';
import './NavLinks.css';
import Frame from "../Frame/Frame";

function NavLinks() {
	return (
		<div className="NavLinks">
			<Frame className="all">
				<ul className="navbar-links">
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
			</Frame>
		</div>
	);
}

export default NavLinks;
