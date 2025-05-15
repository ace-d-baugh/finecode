// components/Photo/Photo.tsx

import Frame from "../Frame/Frame"
import './Photo.css'

function Photo({ src, width, height, alt }: { src: string, width: number, height: number, alt: string }) {
    return (
        <div className="photo-container">
            <Frame className="all">
                <img src={src} width={width} height={height} alt={alt} />
            </Frame>
        </div>
    );
}

export default Photo