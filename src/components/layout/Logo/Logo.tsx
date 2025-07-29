// components/Logo/Logo.tsx

import { Link } from 'react-router-dom';
import './Logo.css'

function Logo({ logoText }: { logoText: string }) {
	return (
		<div className="Logo">
			<Link to="/">
				<h1>{logoText}</h1>
			</Link>
		</div>
	);
}

export default Logo;