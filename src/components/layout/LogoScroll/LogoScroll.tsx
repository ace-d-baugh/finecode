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

    // Duplicate for seamless loop — all in ONE flat track, same spacing throughout
    const doubled = [...logos, ...logos];

    return (
        <div className="LogoScroll">
            <h2 className="logos-title">Trusted By</h2>
            <div className="logos-track">
                {doubled.map((logo, index) => (
                    <img
                        key={`logo-${index}`}
                        src={logo.src}
                        alt={index < logos.length ? logo.alt : ''}
                        aria-hidden={index >= logos.length ? true : undefined}
                        className="logos-item"
                        title={index < logos.length ? logo.alt : undefined}
                    />
                ))}
            </div>
        </div>
    );
}

export default LogoScroll;
