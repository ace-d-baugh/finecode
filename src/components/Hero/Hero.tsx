import Button from '../Button/Button'

function Hero() {
    return (
        <div>
            <h1>Elevate Your Digital Success</h1>
            <p>Expert full-stack web solutions driving business growth and online success with Digital Elegance.</p>
            <Button props={{ text: "Hire Me", link: "/contact" }} />
        </div>
    );
}

export default Hero