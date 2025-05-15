// components/Card/Card.tsx

import Frame from '../Frame/Frame'
import Photo from '../Photo/Photo'
import './Card.css'

function Card({ key, title, imageUrl, alt, description }: { key: number, title: string, imageUrl: string, alt: string, description: string }) {
    return (
        <div className="Card">
            <Frame className="card-frame all">
                <div>
                    <Frame className="card-frame all">
                        <h3 className='title'>{title}</h3>
                    </Frame>
                    <Photo src={imageUrl} width={200} height={200} alt={alt} />
                    <p className='description'>{description}</p>
                </div>
            </Frame>
        </div>
    );
}

export default Card