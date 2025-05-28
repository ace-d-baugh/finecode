// components/Hero/Hero.tsx

import Frame from '../../common/Frame/Frame'
import Button from '../../common/Button/Button'
import './Hero.css'

function Hero() {
    return (
        <div className="Hero">
            <Frame className="all">
                <div className="hero-content">
                    <h2>Elevate Your Digital Success</h2>
                    <p>Expert full-stack web solutions driving business growth and online success with Digital Elegance.</p>
                    <div className="hero-btn">
                        <Button text="Hire Me" link="/contact" />
                    </div>
                </div>
            </Frame>
        </div>
    );
}

export default Hero