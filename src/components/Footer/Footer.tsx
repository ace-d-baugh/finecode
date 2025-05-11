// components/Footer/Footer.tsx
import Frame from '../Frame/Frame'
import './Footer.css'

function Footer({ company }: { company: string }) {
    return (
        <footer className="footer">
            <Frame>
                <p>&copy; {new Date().getFullYear()} {company}. All rights reserved.</p>
            </Frame>
        </footer>
    );
}

export default Footer