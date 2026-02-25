// pages/Contact/Contact.tsx

import './Contact.css'

function Contact() {
    return (
        <div className="Contact">
            <div className="contact-header">
                <h2>Get In Touch</h2>
                <p className="contact-subtitle">Have a project in mind? Let's build something great together.</p>
                <div className="deco-divider"><span className="deco-divider-inner">◆ ◆ ◆</span></div>
            </div>

            <div className="contact-layout">
                {/* Left: info panel */}
                <div className="contact-info">
                    <div className="contact-info-item">
                        <span className="contact-info-icon">◈</span>
                        <div>
                            <h3>Email</h3>
                            <p>ace-d-baugh@users.noreply.github.com</p>
                        </div>
                    </div>
                    <div className="contact-info-item">
                        <span className="contact-info-icon">◉</span>
                        <div>
                            <h3>Location</h3>
                            <p>Orlando, FL</p>
                        </div>
                    </div>
                    <div className="contact-info-item">
                        <span className="contact-info-icon">◎</span>
                        <div>
                            <h3>Availability</h3>
                            <p>Open to full-time &amp; freelance opportunities</p>
                        </div>
                    </div>
                </div>

                {/* Right: form */}
                <div className="contact-form-wrap">
                    <form className="contact-form">
                        <div className="contact-form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" required />
                        </div>
                        <div className="contact-form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="your@email.com" required />
                        </div>
                        <div className="contact-form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" placeholder="Subject" required />
                        </div>
                        <div className="contact-form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" placeholder="Your Message" required></textarea>
                        </div>
                        <div className="submit-btn">
                            <div className="btn-container contact-submit-btn">
                                <button type="submit">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact
