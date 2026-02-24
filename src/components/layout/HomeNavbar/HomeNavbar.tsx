// components/layout/HomeNavbar/HomeNavbar.tsx

import { useEffect, useRef, useState } from 'react';
import NavLinks from '../NavLinks/NavLinks';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import './HomeNavbar.css';

function HomeNavbar() {
const navRef = useRef<HTMLElement>(null);
const [isSticky, setIsSticky] = useState(false);

useEffect(() => {
const sentinel = navRef.current;
if (!sentinel) return;

// Use IntersectionObserver to detect when nav reaches top of viewport
const observer = new IntersectionObserver(
([entry]) => {
// When the nav is NOT intersecting at top (has scrolled past it)
setIsSticky(!entry.isIntersecting);
},
{
threshold: 0,
rootMargin: '-1px 0px 0px 0px', // Trigger 1px past top
}
);

observer.observe(sentinel);
return () => observer.disconnect();
}, []);

return (
<nav
ref={navRef}
className={`HomeNavbar${isSticky ? ' is-sticky' : '' }`}
aria-label="Site navigation"
>
<div className="home-navbar-bg" />
<div className="home-navbar-content">
<NavLinks />
<HamburgerMenu />
</div>
</nav>
);
}

export default HomeNavbar;
