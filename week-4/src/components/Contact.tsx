import React from 'react';
import github from "../../public/github.png"
import telegram from "../../public/telegram.png"
import email from "../../public/email.png"

const Contact: React.FC = () => {
    return (
        <>
            <section className="social-buttons">
                <a href="https://github.com/yourusername" id="gh-link" target="_blank"><img src={github} alt="github" width="25"/> GitHub</a>
                <a href="https://t.me/yourusername" id="tg-link" target="_blank"><img src={telegram} alt="telegram" width="25"/> Telegram</a>
                <a href="mailto:your.email@example.com" id="email"><img src={email} alt="email" width="25"/> Email</a>
            </section>

            <section id="contact" className="contact-block">
                <div>
                    <p>If you have any questions or suggestions, feel free to contact me <strong> → </strong></p>
                </div>
                <a href="mailto:your.email@example.com">Write me</a>
            </section>
        </>
    );
};

export default Contact;
