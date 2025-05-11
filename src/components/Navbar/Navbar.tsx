import { Link } from 'react-router-dom';
import Frame from '../Frame/Frame';
import NavLinks from '../NavLinks/NavLinks';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import './Navbar.css';

function Navbar({ logoText }: { logoText: string }) {
	return (
		<nav className="Navbar">
			<Frame>
				<div className="navbar-logo">
					<Link to="/">{logoText}</Link>
				</div>
			</Frame>
			<NavLinks />
			<HamburgerMenu />
		</nav>
	);
}

export default Navbar;
