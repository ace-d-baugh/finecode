// components/Showcase/Showcase.tsx

import Frame from "../Frame/Frame"
import Card from "../Card/Card"
import './Showcase.css'

function Showcase() {
    return (
        <div className="Showcase">
            <Frame className="all">
                <div>
                    <h1>Showcase</h1>
                    <div className="row cards">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </Frame>
        </div>
    );
}

export default Showcase