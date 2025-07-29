// components/Hero/Hero.tsx

import Button from '../../common/Button/Button'
import './Hero.css'

function Hero() {
    return (
        <div className="Hero">
            <div className="hero-content">
                <h2>Elevate Your Digital Success</h2>
                <p>Expert full-stack web solutions driving business growth and online success with Digital Elegance.</p>
                <div className="hero-btn">
                    <Button text="Hire Me" link="/contact" />
                </div>
            </div>
        </div>
    );
}

export default Hero