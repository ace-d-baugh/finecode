// components/Hero/Hero.tsx

import Frame from '../Frame/Frame'
import Button from '../Button/Button'
import './Hero.css'

function Hero() {
    return (
        <div className="Hero">
            <Frame>
                <div>
                    <h1>Elevate Your Digital Success</h1>
                    <p>Expert full-stack web solutions driving business growth and online success with Digital Elegance.</p>
                    <Button text="Hire Me" link="/contact" />
                </div>
            </Frame>
        </div>
    );
}

export default Hero