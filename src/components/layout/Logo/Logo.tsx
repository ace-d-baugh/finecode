// components/Logo/Logo.tsx

import Frame from '../../common/Frame/Frame';
import { Link } from 'react-router-dom';
import './Logo.css'

function Logo({ logoText }: { logoText: string }) {
	return (
		<div className="Logo">
			<Frame className="all">
				<Link to="/"><h1>{logoText}</h1></Link>
			</Frame>
		</div>
	);
}

export default Logo;