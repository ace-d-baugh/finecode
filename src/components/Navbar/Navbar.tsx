import { Link } from 'react-router-dom';
import Links from '../Links/Links';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import './Navbar.css';

function Navbar({ logoText }: { logoText: string }) {
	return (
		<nav className="navbar">
			<div className="navbar-logo">
				<Link to="/">{logoText}</Link>
			</div>
			<Links />
			<HamburgerMenu />
		</nav>
	);
}

export default Navbar;
