// components/Resume/Work/Work.tsx

import Frame from "../../../common/Frame/Frame"
import './Work.css';
import Jobs from "../../../../assets/data/work.json"

interface Job {
	id: number;
	title: string;
	employer: string;
	location: string;
	start: string;
	end: string;
	responsibilities: string[];
}

function Work() {
	return (
		<nav className="Work">
			<Frame className="all">
                <h3>Work History</h3>
				{ Jobs.map((job: Job ) => (
					<div className="job-listing">
						<div className="dates">{job.start} to {job.end}</div>
						<div className="job-title">{job.title}</div>
						<div className="job-employer">{job.employer}</div>
						<div className="job-location">{job.location}</div>
						<div className="job-responsibilities">
							<ul>{job.responsibilities.map((responsibility: string) => (
								<li>{responsibility}</li>
							))}
							</ul>
						</div>
					</div>
				))}
			</Frame>
		</nav>
	);
}

export default Work;