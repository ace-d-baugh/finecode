// pages/projects/DragDrop.tsx

import Frame from "../../components/Frame/Frame"
import './DragDrop.css'
import projects from '../../data/projects.json'

function DragDrop() {
    return (
        <div className="DragDrop">
            <Frame>
                <div>
                    <h1>Drag n Drop Selector</h1>
                </div>
            </Frame>
        </div>
    );
}

export default DragDrop