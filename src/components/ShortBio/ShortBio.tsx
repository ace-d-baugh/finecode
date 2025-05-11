// components/ShortBio/ShortBio.tsx

import Button from "../Button/Button";
import Frame from "../Frame/Frame";
import './ShortBio.css'

function ShortBio() {
    return (
        <div className="ShortBio">
            <Frame>
                <div>
                    <h1>ShortBio</h1>
                    <Button text="Get To Know Me" link="/about" />
                </div>
            </Frame>
        </div>
    );
}

export default ShortBio;