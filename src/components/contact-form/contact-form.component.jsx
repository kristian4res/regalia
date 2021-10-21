import React, { Component } from 'react';
import { connect } from 'react-redux';

import CustomFormContainer from '../custom-form-container/custom-form-container.component';
import CustomForm from '../custom-form/custom-form.component';
import FormInput from '../form-input/form-input.component';
import FormTextarea from '../form-textarea/form-textarea.component';
import CustomButton from '../custom-button/custom-button.component';
import CustomSelect from '../custom-select/custom-select.component';

import { toastMessages } from '../../redux/toast-notif/toast-notif.messages';

import { FORM_SUBJECTS, FORM_SUBJECTS_ORDER } from './contact-form.data';
import { displayToast } from '../../redux/toast-notif/toast-notif.actions';

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
        // Default toast styling
        let toastType = 'success';

        this.props.displayToastProp({
            ...toastMessages[toastType],
            description: `Successfully submitted [This is only a test message]`,
        });    

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
        const { title } = this.props;
        const { subject, orderNumber, firstName, lastName, email, message } = this.state;

        return (
            <CustomFormContainer>
                <h2 className="title">{title.toUpperCase()}</h2>
                <span className="title-description">Representatives are available between 8:30 - 17:00 GMT (Monday - Friday) by using the form below.</span>
                
                <CustomForm onSubmit={this.handleSubmit}>
                    <div style={{margin: '0px 0px 20px 0px', padding: '0px'}}>
                        <CustomSelect
                            placeholder="Subject"
                            options={FORM_SUBJECTS} 
                            onChange={this.handleSubject}
                        />
                    </div>
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
                </CustomForm>
            </CustomFormContainer>
        )
    }
};

const mapDispatchToProps = (dispatch) => ({
    displayToastProp: content => dispatch(displayToast(content))
});

export default connect(null, mapDispatchToProps)(ContactForm);