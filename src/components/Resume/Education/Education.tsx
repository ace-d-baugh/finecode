// components/Resume/Education/Education.tsx

import Frame from "../../Frame/Frame";
import './Education.css';
import Learning from "../../../data/education.json";

interface Certification {
	id: number;
	title: string;
	school: string;
	location: string;
	date: string;
	accolades: string[];
	type: string;
}

function Education() {
	return (
		<nav className="Education">
			<Frame className="all">
			<h3>Education</h3>
        {Learning.filter((certification) => certification.type === 'degree').map(
          (certification: Certification) => (
            <div className="degrees" key={certification.title}>
              <div className="degree">
                <div className="date">{certification.date}</div>
                <div className="cert-title">{certification.title}</div>
                <div className="school">{certification.school}</div>
                <div className="location">{certification.location}</div>
                <div className="accolades">
                  <ul>
                    {certification.accolades.map((accolade, index) => (
                      <li key={index}>{accolade}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )
        )}
        <h3>Certifications</h3>
        {Learning.filter((certification) => certification.type !== 'degree').map(
          (certification: Certification) => (
            <div className="degrees" key={certification.title}>
              <div className="degree">
                <div className="date">{certification.date}</div>
                <div className="cert-title">{certification.title}</div>
                <div className="school">{certification.school}</div>
                <div className="location">{certification.location}</div>
                <div className="accolades">
                  <ul>
                    {certification.accolades.map((accolade, index) => (
                      <li key={index}>{accolade}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )
        )}
      </Frame>
    </nav>
  );
}

export default Education;