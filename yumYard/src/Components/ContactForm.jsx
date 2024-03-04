import React, { useEffect } from 'react';

const ContactForm = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="visme_d"
            data-title="Contact Form"
            data-url="dm0xvwq1-contact-form"
            data-domain="forms"
            data-full-page="false"
            data-min-height="500px"
            data-form-id="37569"
        >
        </div>
    );
};

export default ContactForm;