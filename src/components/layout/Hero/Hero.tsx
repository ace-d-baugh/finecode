// components/Hero/Hero.tsx

import Button from '../../common/Button/Button'
import './Hero.css'

function Hero() {
    return (
        <div className="Hero">
            <div className="hero-content">
                <h2>Elevate Your <wbr/>Digital&nbsp;Success</h2>
                <p>Expert&nbsp;full-stack&nbsp;web&nbsp;solutions driving business&nbsp;growth&nbsp;and online&nbsp;success with Digital&nbsp;Elegance.</p>
                <div className="hero-btn">
                    <Button text="Hire Me" link="/contact" />
                </div>
            </div>
        </div>
    );
}

export default Hero