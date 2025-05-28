// components/ShortBio/ShortBio.tsx

import Button from "../../common/Button/Button";
import Frame from "../../common/Frame/Frame";
import './ShortBio.css'

function ShortBio() {
    return (
        <div className="ShortBio">
            <Frame className="all">
                <div>
                    <h1>ShortBio</h1>
                        <p>As a full-stack web developer with a Bachelor's degree in Web Development and certifications in Mobile Application Development and Internet Marketing, I specialize in creating dynamic web and mobile applications. My experience includes working on a high-profile project for the Walt Disney Company. Additionally, my certifications in mobile app development and internet marketing enable me to deliver comprehensive solutions that drive user engagement and business growth. I am passionate about leveraging technology to create impactful applications and am committed to continuous learning and innovation.</p>
                    <Button text="Get To Know Me" link="/about" />
                </div>
            </Frame>
        </div>
    );
}

export default ShortBio;