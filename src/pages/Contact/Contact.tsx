// pages/Contact/Contact.tsx

import './Contact.css'

function Contact() {
    return (
        <div className="Contact">
            <h2>Contact</h2>
            <div className="contact-form">
                <form>
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
                        <button type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact