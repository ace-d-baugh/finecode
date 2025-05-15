// pages/Portfolio.tsx

import Frame from "../components/Frame/Frame";
import Projects from '../data/projects.json';
import { Link } from "react-router-dom";

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
            <Frame>
                <div>
                    <h1>Portfolio | Case Studies</h1>
                    {Projects.map((project: Project) => (
                        <div key={project.id}>
                            // link to the Project page and pass the project id as a parameter
                            <Link to={`/project/${project.id}`}>
                                <h2>{project.title}</h2>
                            </Link>
                            <p>{project.shortDescription}</p>
                            <img src={project.imageUrls[0]} alt={project.title} />
                            <p>{project.longDescription.issue}</p>
                            <p>{project.type}</p>
                        </div>
                    ))}
                </div>
            </Frame>
        </div>
    );
}

export default Portfolio;