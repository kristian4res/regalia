import React from 'react';

import ContactForm from '../../components/contact-form/contact-form.component';

import './contact.styles.scss';


const ContactPage = () => {
    return (
        <div className="contact-container">
            <ContactForm />
        </div>
    )
};

export default ContactPage;