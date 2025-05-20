// components/Testimonial/Testimonial.tsx

import Testimonials from '../../data/testimonials.json'
import Frame from "../Frame/Frame"
import './Testimonial.css'

function Testimonial({ id }: { id: number }) {
    return (
        <div className="Testimonial">
            <Frame className="testimonial-frame all">
                <div className="testimonial">
                    <p className='testimonial-quote'>{Testimonials[id].quote}</p>
                    <h3 className='testimonial-name'>{Testimonials[id].name}</h3>
                    <img className='testimonial-image' src={Testimonials[id].imageUrl} alt={Testimonials[id].name} />
                </div>
            </Frame>
        </div>
    );
}

export default Testimonial