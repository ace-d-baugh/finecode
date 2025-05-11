// components/Logo/Logo.tsx
import Frame from '../Frame/Frame';

function Logo({ logoText }: { logoText: string }) {
	return (
		<div className="Logo">
			<Frame>
				<h1>{logoText}</h1>
			</Frame>
		</div>
	);
}

export default Logo;