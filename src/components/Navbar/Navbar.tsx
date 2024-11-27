// components/Navbar/Navbar.tsx
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar({ logoText }: { logoText: string }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">{logoText}</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/resume">Resum&eacute;</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;