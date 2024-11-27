// components/Footer/Footer.tsx
import './Footer.css'

function Footer({ company }: { company: string }) {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} {company}. All rights reserved.</p>
        </footer>
    );
}

export default Footer