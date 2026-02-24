// components/layout/HomeNavbar/HomeNavbar.tsx

import { useEffect, useRef, useState } from 'react';
import Logo from '../Logo/Logo';
import NavLinks from '../NavLinks/NavLinks';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import './HomeNavbar.css';

function HomeNavbar() {
  const navRef = useRef<HTMLElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const sentinel = navRef.current;
    if (!sentinel) return;

    // IntersectionObserver detects when nav reaches top of viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: '-1px 0px 0px 0px',
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
        <Logo logoText="Digital Elegance" />
        <NavLinks />
        <HamburgerMenu />
      </div>
    </nav>
  );
}

export default HomeNavbar;
