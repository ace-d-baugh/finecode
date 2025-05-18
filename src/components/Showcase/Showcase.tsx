// components/Showcase/Showcase.tsx

import { useEffect } from "react";
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
    // Define logos array for reusability
    const logos = [
        { src: "/src/images/disney.png", alt: "The Walt Disney Company" },
        { src: "/src/images/carmike.png", alt: "Carmike Cinemas" },
        { src: "/src/images/rfinity.png", alt: "RFinity" },
        { src: "/src/images/schwans.png", alt: "Schwans" },
        { src: "/src/images/blockbuster.png", alt: "Blockbuster" },
        { src: "/src/images/misys.png", alt: "Misys" },
        { src: "/src/images/magnus.png", alt: "First Magnus" },
        { src: "/src/images/sears.png", alt: "Sears" },
        { src: "/src/images/kbtoys.png", alt: "KB Toys" },
    ];

    return (
        <div className="Showcase">
            <Frame className="showcase-frame all">
                <div>
                    <h1>Showcase</h1>
                    <div className="featured">
                        <div className="logos">
                            {/* First set of logos */}
                            {logos.map((logo, index) => (
                                <img
                                    key={`logo-${index}`}
                                    src={logo.src}
                                    alt={logo.alt}
                                />
                            ))}
                            {/* Duplicate set of logos for seamless scroll */}
                            {logos.map((logo, index) => (
                                <img
                                    key={`logo-duplicate-${index}`}
                                    src={logo.src}
                                    alt={logo.alt}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="cards">
                        {Projects.slice(0, 9).map((project: Project) => (
                            <Card
                                key={project.id}
                                title={project.title}
                                imageUrl={project.imageUrls[0]}
                                alt={project.title}
                                description={project.shortDescription}
                            />
                        ))}
                    </div>
                </div>
            </Frame>
        </div>
    );
}

export default Showcase;