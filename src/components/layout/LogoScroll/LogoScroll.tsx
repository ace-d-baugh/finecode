// components/LogoScroll/LogoScroll.tsx

import './LogoScroll.css'

function LogoScroll() {
    // Define logos array for reusability
    const logos = [
        { src: "/src/assets/images/logos/disney.png", alt: "The Walt Disney Company" },
        { src: "/src/assets/images/logos/carmike.png", alt: "Carmike Cinemas" },
        { src: "/src/assets/images/logos/rfinity.png", alt: "RFinity" },
        { src: "/src/assets/images/logos/schwans.png", alt: "Schwans" },
        { src: "/src/assets/images/logos/blockbuster.png", alt: "Blockbuster" },
        { src: "/src/assets/images/logos/misys.png", alt: "Misys" },
        { src: "/src/assets/images/logos/magnus.png", alt: "First Magnus" },
        { src: "/src/assets/images/logos/sears.png", alt: "Sears" },
        { src: "/src/assets/images/logos/kbtoys.png", alt: "KB Toys" },
    ];

    return (
        <div className="LogoScroll">
            <h2 className="logos-title">Trusted By</h2>
            <div className="logos">
                {/* First set of logos */}
                {logos.map((logo, index) => (
                    <img
                        key={`logo-${index}`}
                        src={logo.src}
                        alt={logo.alt}
                    />
                ))}
                {/* Duplicate set of logos for seamless scroll */}
                {logos.map((logo, index) => (
                    <img
                        key={`logo-duplicate-${index}`}
                        src={logo.src}
                        alt={logo.alt}
                    />
                ))}
            </div>
        </div>
    );
}

export default LogoScroll;