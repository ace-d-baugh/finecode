// components/Testimonials/Testimonials.tsx

import Testimonial from "../Testimonial/Testimonial"
import './Testimonials.css'

function Testimonials() {
    return (
        <div className="Testimonials-container">
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
        </div>
    );
}

export default Testimonials