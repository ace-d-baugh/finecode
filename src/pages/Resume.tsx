// pages/Resume.tsx

import Frame from "../components/Frame/Frame";
import Certifications from "../components/Resume/Ceritifications/Certifications";
import Education from "../components/Resume/Education/Education";
import Experience from "../components/Resume/Experience/Experience";
import Header from "../components/Resume/Header/Header";
import Recognition from "../components/Resume/Recognition/Recognition";
import Skills from "../components/Resume/Skills/Skills";
import Summary from "../components/Resume/Summary/Summary";
import Work from "../components/Resume/Work/Work";

function Resume() {
    return (
        <div className="Resume">
            <Frame className="all">
                <div>
                    <Header />
                    <Summary />
                    <Skills />
                    <Work />
                    <Education />
                    <Certifications />
                    <Experience />
                    <Recognition />
                </div>
            </Frame>
        </div>
    );
}

export default Resume