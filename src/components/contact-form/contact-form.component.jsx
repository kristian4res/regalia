import React, { Component } from 'react';
import Select from 'react-select';

import FormInput from '../form-input/form-input.component';

import { FORM_SUBJECTS } from './contact-form.data';

import './contact-form.styles.scss';


class ContactForm extends Component {
    constructor() {
        super();

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        };
    }

    render() {
        const { firstName, lastName, email, message } = this.state;

        return (
            <div className="contact-form-container">
                <h2 className="title">Contact us</h2>
                <span className="title-description">Representatives are available between 8:30 - 17:00 GMT (Monday - Friday) by using the form below.</span>
                
                <form className="contact-form">
                    <Select
                        placeholder="Subject"
                        options={FORM_SUBJECTS} 
                    />
                    <div className="name-container">
                        <FormInput 
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={''}
                            label='First Name'
                            required
                        />
                        <FormInput
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={''}
                            label='Last Name'
                            required
                        />
                    </div>
                    <FormInput 
                        type="email"
                        name="email"
                        value={email}
                        onChange={''}
                        label='Email'
                        required
                    />
                    <FormInput 
                        type="textarea"
                        name="message"
                        value={message}
                        onChange={''}
                        label='Message'
                        required
                    />
                </form>
            </div>
        )
    }
};

export default ContactForm;