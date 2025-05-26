// components/Resume/Header/Header.tsx

import Frame from "../../Frame/Frame"
import './Header.css';

function Header() {
	return (
		<nav className="Header">
			<Frame className="all">
                <h1>Matthew Ace Baugh</h1>
				<p>Kissimmee, FL</p>
				<p>(208) 557-9223 - <a href="mailto:ace@digitalelegance.com">ace@digitalelegance.com</a></p>
			</Frame>
		</nav>
	);
}

export default Header;