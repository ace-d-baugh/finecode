// pages/Project/Project.tsx

import { useParams, useNavigate } from 'react-router-dom';
import Projects from '../../assets/data/projects.json';
import Carousel from '../../components/common/Carousel/Carousel';
import './Project.css';

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

// Unicode symbols that render reliably in all browsers
const techIconMap: Record<string, string> = {
    'React':        '⚛',
    'Angular':      '∠',
    'Node.js':      '⬡',
    'Express':      '▸',
    'MongoDB':      '◉',
    'SQL':          '▦',
    'CSS':          '◈',
    'HTML':         '◇',
    'JavaScript':   'ƒ',
    'TypeScript':   'ʦ',
    'Bootstrap':    '⊞',
    'PHP':          'φ',
    'C#':           '♯',
    '.NET Core':    '⬢',
    'Stripe':       '§',
    'WordPress':    'Ψ',
    'WooCommerce':  'Ω',
    'Photoshop':    '✦',
    'SoapUI':       '⬡',
    'Swagger':      '◎',
    'Git':          '⑂',
};

function getTechIcon(tech: string): string {
    return techIconMap[tech] || '◆';
}

function Project() {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const project: Project | undefined = Projects.find(
        (p: Project) => p.id === Number(projectId)
    );

    if (!project) {
        return (
            <div className="Project project-not-found">
                <div className="not-found-inner">
                    <h1>Project Not Found</h1>
                    <div className="deco-divider"><span className="deco-divider-inner">◆</span></div>
                    <button className="btn-back" onClick={() => navigate('/portfolio')}>
                        ← Back to Portfolio
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="Project">

            {/* ── Page Header ── */}
            <div className="project-page-header">
                <p className="project-type-badge">{project.type}</p>
                <h1>{project.title}</h1>
                <p className="project-short-desc">{project.shortDescription}</p>
                <div className="deco-divider"><span className="deco-divider-inner">◆ ◆ ◆</span></div>
            </div>

            {/* ── Carousel ── */}
            <div className="project-carousel-wrap">
                <Carousel imageUrls={project.imageUrls} title={project.title} />
            </div>

            {/* ── Case Study ── */}
            <div className="project-case-study">

                <div className="case-section">
                    <h2><span className="case-icon">◈</span> The Challenge</h2>
                    <p>{project.longDescription.issue}</p>
                </div>

                <div className="case-section">
                    <h2><span className="case-icon">◉</span> The Solution</h2>
                    <p>{project.longDescription.solution}</p>
                </div>

                <div className="case-section">
                    <h2><span className="case-icon">◎</span> Lessons Learned</h2>
                    <p>{project.longDescription.lessonsLearned}</p>
                </div>

                {project.longDescription.extraInfo && project.longDescription.extraInfo.trim() && (
                    <div className="case-section case-extra">
                        <h2><span className="case-icon">◇</span> Notes</h2>
                        <p>{project.longDescription.extraInfo}</p>
                    </div>
                )}

            </div>

            {/* ── Technologies ── */}
            <div className="project-technologies">
                <div className="deco-divider"><span className="deco-divider-inner">◆ ◆ ◆</span></div>
                <h2>Technologies</h2>
                <ul className="tech-list">
                    {project.technologies.map((tech: string) => (
                        <li key={tech} className="tech-badge">
                            <span className="tech-icon">{getTechIcon(tech)}</span>
                            <span className="tech-name">{tech}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* ── Links ── */}
            <div className="project-links">
                <div className="deco-divider"><span className="deco-divider-inner">◆ ◆ ◆</span></div>
                <div className="links-row">
                    {project.codeUrl && project.codeUrl !== '#' && (
                        <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-btn"
                        >
                            View Code
                        </a>
                    )}
                    {project.liveUrl && project.liveUrl !== '#' && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-btn"
                        >
                            Live Demo
                        </a>
                    )}
                    <button className="btn-back" onClick={() => navigate('/portfolio')}>
                        ← All Projects
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Project;
