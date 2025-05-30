// components/ShortBio/ShortBio.tsx

import Button from "../../common/Button/Button";
import Frame from "../../common/Frame/Frame";
import './ShortBio.css'

function ShortBio() {
    return (
        <div className="ShortBio">
            <Frame className="all">
                <div>
                    <h2>Who I Am</h2>
                        <p>Hi, I’m Ace, a full-stack web developer with a knack for building seamless React and Angular apps. With a Bachelor’s in Web Development and certifications in Mobile Apps, Internet Marketing, and UX/UI Design, I create user-focused solutions that shine —like my work for the Walt Disney Company. I’m obsessed with tech that makes an impact. To see what I do, check out my projects below or ...</p>
                    <Button text="Get To Know Me" link="/about" />
                </div>
            </Frame>
        </div>
    );
}

export default ShortBio;