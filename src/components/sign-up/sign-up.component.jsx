import React, { Component } from 'react';

import CustomFormContainer from '../custom-form-container/custom-form-container.component';
import CustomForm from '../custom-form/custom-form.component';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import './sign-up.styles.scss';

class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert('Passwords do not match, please try again.');
            return;
        }

        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({[name]: value});
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <CustomFormContainer>
                <h2 className='title'>Don't have an account?</h2>
                <span>Sign up with your email and password</span>
                <CustomForm onSubmit={this.handleSubmit}>
                    <div>
                        <FormInput 
                            type='text'
                            name='displayName'
                            value={displayName}
                            onChange={this.handleChange}
                            label='Name'
                            required
                        />
                        <FormInput 
                            type='email'
                            name='email'
                            value={email}
                            onChange={this.handleChange}
                            label='Email'
                            required
                        />
                        <FormInput 
                            type='password'
                            name='password'
                            value={password}
                            onChange={this.handleChange}
                            label='Password'
                            required
                        />
                        <FormInput 
                            type='password'
                            name='confirmPassword'
                            value={confirmPassword}
                            onChange={this.handleChange}
                            label='Confirm Password'
                            required
                        />
                    </div>
                    <div>
                        <CustomButton type='submit'>Sign Up</CustomButton>
                    </div>
                </CustomForm>
            </CustomFormContainer>
        )
    }
}

export default SignUp;