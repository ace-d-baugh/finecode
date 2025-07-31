// components/Header/Header.tsx

import { useEffect, useRef, useState } from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';

function Header({ logoText }: { logoText: string }) {
	const backgroundRef = useRef<HTMLDivElement>(null);
	const [hasMoved, setHasMoved] = useState(false);

	useEffect(() => {
	const bg = backgroundRef.current;
	if (!bg) return;

	const handleScroll = () => {
		const scrolledDown = window.scrollY > 0;

		if (scrolledDown && !hasMoved) {
			bg.classList.remove('moving-out');
			bg.classList.add('moved');
			setHasMoved(true);
		} else if (!scrolledDown && hasMoved) {
			// Remove .moved before applying .moving-out
			bg.classList.remove('moved');

			// 🔧 Force a reflow to re-trigger animation
			void bg.offsetWidth;

			bg.classList.add('moving-out');
			setHasMoved(false);

			// Remove after animation finishes
			setTimeout(() => {
				bg.classList.remove('moving-out');
			}, 600);
		}
	};

	window.addEventListener('scroll', handleScroll);
	return () => window.removeEventListener('scroll', handleScroll);
}, [hasMoved]);

	return (
		<header className="Header">
			<div className="header-background" ref={backgroundRef}></div>
			<div className="header-elements">
				<Logo logoText={logoText} />
				<Navbar />
			</div>
		</header>
	);
}

export default Header;