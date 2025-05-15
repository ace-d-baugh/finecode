// components/Navbar/Navbar.tsx

import Frame from '../Frame/Frame';
import NavLinks from '../NavLinks/NavLinks';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import './Navbar.css';

function Navbar() {
	return (
		<nav className="Navbar">
			<Frame className="all">
				<NavLinks />
				<HamburgerMenu />
			</Frame>
		</nav>
	);
}

export default Navbar;
