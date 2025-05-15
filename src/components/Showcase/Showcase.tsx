// components/Showcase/Showcase.tsx

import Frame from "../Frame/Frame"
import Card from "../Card/Card"
import './Showcase.css'
import Projects from '../../data/projects.json'


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


function Showcase() {
    return (
        <div className="Showcase">
            <Frame className="showcase-frame all">
                <div>
                    <h1>Showcase</h1>
                    <div className="cards">
                        {/* map the first 9 projects */}
                        {Projects.slice(0, 9).map((project: Project) => (
                            <Card key={project.id} title={project.title} imageUrl={project.imageUrls[0]} alt={project.title} description={project.shortDescription} />
                        ))}
                    </div>
                </div>
            </Frame>
        </div>
    );
}

export default Showcase