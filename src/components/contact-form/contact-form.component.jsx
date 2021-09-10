import React, { Component } from 'react';
import Select from 'react-select';

import FormInput from '../form-input/form-input.component';
import FormTextarea from '../form-textarea/form-textarea.component';
import CustomButton from '../custom-button/custom-button.component.jsx';

import { FORM_SUBJECTS, FORM_SUBJECTS_ORDER } from './contact-form.data';

import './contact-form.styles.scss';


class ContactForm extends Component {
    constructor() {
        super();

        this.state = {
            subject: '',
            orderNumber: '',
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        // const { subject, orderNumber, firstName, lastName, email, message } = this.state;

        // https://firebase.google.com/docs/firestore/manage-data/add-data
        alert('Success');
        this.setState({
            subject: '',
            orderNumber: '',
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        });
    }

    checkSubject = (subject, orderNumber, handleChange) => {
        if (FORM_SUBJECTS_ORDER.includes(subject)) {
            return (
                <FormInput 
                    type="text"
                    name="orderNumber"
                    value={orderNumber}
                    onChange={handleChange}
                    label='Order Number (e.g. PLUS-12345)'
                    required
                />
            );
        }
        return null;
    }
    
    handleSubject = (e) => {
        const { value } = e;

        this.setState({subject: value});
    }

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({[name]: value});
    }

    render() {
        const { subject, orderNumber, firstName, lastName, email, message } = this.state;

        return (
            <div className="contact-form-container">
                <h2 className="title">Contact us</h2>
                <span className="title-description">Representatives are available between 8:30 - 17:00 GMT (Monday - Friday) by using the form below.</span>
                
                <form className="contact-form" onSubmit={this.handleSubmit}>
                    <Select
                        placeholder="Subject"
                        options={FORM_SUBJECTS} 
                        onChange={this.handleSubject}
                        theme={theme => ({
                            ...theme,
                            borderRadius: 0,
                            colors: {
                              ...theme.colors,
                              primary25: 'grey',
                              primary: 'black',
                            },
                        })}
                    />
                    {
                        this.checkSubject(subject, orderNumber, this.handleChange)
                    }
                    <div className="name-container">
                        <FormInput 
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={this.handleChange}
                            label='First Name'
                            required
                        />
                        <FormInput
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={this.handleChange}
                            label='Last Name'
                            required
                        />
                    </div>
                    <FormInput 
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormTextarea 
                        type="textarea"
                        name="message"
                        value={message}
                        onChange={this.handleChange}
                        label='Message'
                        required
                    />
                    <CustomButton type='submit'>SEND</CustomButton>
                </form>
            </div>
        )
    }
};

export default ContactForm;