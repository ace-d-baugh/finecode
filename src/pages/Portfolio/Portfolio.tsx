// pages/Portfolio/Portfolio.tsx
import Projects from '../../assets/data/projects.json';
import Photo from "../../components/common/Photo/Photo";
import { Link } from "react-router-dom";
import './Portfolio.css'

interface LongDescription {
    issue: string;
    solution: string;
    lessonsLearned: string;
    extraInfo: string;
}

interface Project {
    id: number;
    title: string;
    shortDescription: string;
    longDescription: LongDescription;
    technologies: string[];
    imageUrls: string[];
    codeUrl: string;
    liveUrl: string;
    type: string;
}

function Portfolio() {
    return (
        <div className="Portfolio">
            <h1>Portfolio | Case Studies</h1>
            <div className="project-grid">
                {Projects.map((project: Project) => (
                    <div key={project.id} className="project-card">
                        <div className="project-header">
                            <Link to={`/project/${project.id}`}>
                                <h2>{project.title}</h2>
                            </Link>
                        </div>
                        <div className="project-content">
                            <p className="project-type">{project.type}</p>
                            <div className="project-image">
                                <Photo src={project.imageUrls[0]} width={200} height={200} alt={project.title} />
                            </div>
                            <p className="description">{project.shortDescription}</p>
                            <p className="issue">{project.longDescription.issue}</p>
                        </div>
                        <div className="project-footer">
                            <Link to={`/project/${project.id}`} className="more-details-btn">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
