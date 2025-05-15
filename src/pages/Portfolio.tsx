// pages/Portfolio.tsx

import Button from "../components/Button/Button";
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
            <Frame className="all">
                <div>
                    <h1>Portfolio | Case Studies</h1>
                    {Projects.map((project: Project) => (
                        <div key={project.id}>
                            <Link to={`/project/${project.id}`}>
                                <h2>{project.title}</h2>
                            </Link>
                            <p>{project.type}</p>                            
                            <p>{project.shortDescription}</p>
                            <img src={project.imageUrls[0]} alt={project.title} />
                            <p>{project.longDescription.issue}</p>
                            <Button text="More Details" link={`/project/${project.id}`} />
                            <p>&nbsp;</p>
                        </div>
                    ))}
                </div>
            </Frame>
        </div>
    );
}

export default Portfolio;