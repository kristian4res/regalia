import React from 'react';

import ContactForm from '../../components/contact-form/contact-form.component';

import './contact.styles.scss';


const ContactPage = () => {
    const title = 'Contact Us'

    return (
        <div className="contact-container">
            <ContactForm title={title} />
        </div>
    )
};

export default ContactPage;