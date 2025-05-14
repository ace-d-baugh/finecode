// pages/Portfolio.tsx

import Frame from "../components/Frame/Frame";
import projects from '../data/projects.json';

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
                    {projects.map((project: Project) => (
                        <div key={project.id}>
                            <h2>{project.title}</h2>
                        </div>
                    ))}
                </div>
            </Frame>
        </div>
    );
}

export default Portfolio;