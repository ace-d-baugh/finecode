// components/Resume/Skills/Skills.tsx

import Frame from "../../../common/Frame/Frame"
import './Skills.css';
import Data from "../../../../assets/data/skills.json"

const leftArray = Data.filter((_: string, index: number) => index % 2 === 0);
const rightArray = Data.filter((_: string, index: number) => index % 2 !== 0);
function Skills() {
	return (
		<div className="Skills">
			<Frame className="all">
                <h3>Skills</h3>
				<div className="skills-display">
					<ul>
					{leftArray.map((value: string) => (
						<li className="left">{value}</li>
					))}
					</ul>
					<ul>
					{rightArray.map((value: string) => (
						<li className="right">{value}</li>
					))}
					</ul>			
				</div>
			</Frame>
		</div>
	);
}

export default Skills;