// components/LogoScroll/LogoScroll.tsx

import './LogoScroll.css'

function LogoScroll() {
    const logos = [
        { src: "/src/assets/images/logos/disney.png", alt: "The Walt Disney Company" },
        { src: "/src/assets/images/logos/carmike.png", alt: "Carmike Cinemas" },
        { src: "/src/assets/images/logos/rfinity.png", alt: "RFinity" },
        { src: "/src/assets/images/logos/schwans.png", alt: "Schwan Food Co" },
        { src: "/src/assets/images/logos/blockbuster.png", alt: "Blockbuster" },
        { src: "/src/assets/images/logos/misys.png", alt: "Misys" },
        { src: "/src/assets/images/logos/magnus.png", alt: "First Magnus" },
        { src: "/src/assets/images/logos/sears.png", alt: "Sears" },
        { src: "/src/assets/images/logos/kbtoys.png", alt: "KB Toys" },
    ];

    return (
        <div className="LogoScroll">
            <h2 className="logos-title">Trusted By</h2>
            <div className="logos-track">
                {/* First set */}
                <div className="logos-set" aria-hidden="false">
                    {logos.map((logo, index) => (
                        <img
                            key={`logo-a-${index}`}
                            src={logo.src}
                            alt={logo.alt}
                            title={logo.alt}
                        />
                    ))}
                </div>
                {/* Duplicate set — creates seamless loop */}
                <div className="logos-set" aria-hidden="true">
                    {logos.map((logo, index) => (
                        <img
                            key={`logo-b-${index}`}
                            src={logo.src}
                            alt=""
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LogoScroll;
