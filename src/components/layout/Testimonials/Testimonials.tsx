// components/Testimonials/Testimonials.tsx

import Frame from '../../common/Frame/Frame'
import Testimonial from "../Testimonial/Testimonial"
import './Testimonials.css'

function Testimonials() {
    return (
        <div className="Testimonials-container">
            <Frame className="testimonials-frame all">
                <div className="testimonials">
                    <h1>Testimonials</h1>
                    <div className="testimonials-list">
                        <Testimonial id={0} />
                        <Testimonial id={1} />
                        <Testimonial id={2} />
                        <Testimonial id={3} />
                        <Testimonial id={4} />
                        <Testimonial id={5} />
                    </div>
                </div>
            </Frame>
        </div>
    );
}

export default Testimonials