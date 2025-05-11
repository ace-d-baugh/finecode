// components/Showcase/Showcase.tsx

import Frame from "../Frame/Frame"
import Card from "../Card/Card"
import './Showcase.css'

function Showcase() {
    return (
        <div className="Showcase">
            <Frame>
                <div>
                    <h1>Showcase</h1>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </Frame>
        </div>
    );
}

export default Showcase