// components/Header/Header.tsx

import './Header.css';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';

function Header({ logoText }: { logoText: string }) {
	return (
		<header className="Header">
			<div className="header-elements">
				<Logo logoText = {logoText} />
				<Navbar />
			</div>
		</header>
	);
}

export default Header;