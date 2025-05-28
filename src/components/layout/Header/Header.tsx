// components/Header/Header.tsx

import Frame from '../../common/Frame/Frame';
import './Header.css';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';

function Header({ logoText }: { logoText: string }) {
	return (
		<header className="Header">
			<Frame className="all">
				<div className="header-elements">
					<Logo logoText = {logoText} />
                	<Navbar />
				</div>
			</Frame>
		</header>
	);
}

export default Header;