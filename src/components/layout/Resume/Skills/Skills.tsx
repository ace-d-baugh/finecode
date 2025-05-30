// components/Resume/Skills/Skills.tsx

import Frame from "../../../common/Frame/Frame"
import './Skills.css';
import Data from "../../../../assets/data/skills.json"

function Skills() {
	return (
		<nav className="Skills">
			<Frame className="all">
                <h3>Skills</h3>
				<ul>
				{ Data.map((value: string) => (
					<li>{value}</li>
				)) }
				</ul>
			</Frame>
		</nav>
	);
}

export default Skills;