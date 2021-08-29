import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { signInWithEmailAndPassword } from 'firebase/auth';

import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    // Sign In with Email & Password
    handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } =  this.state;

        try {
            await signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => console.log(`User ${userCredential.user} has signed in!`));
            
            this.setState({ email: '', password: ''});
        } catch (error) {
            console.log('Error occured while signing in with email and password: ', error);
        }
    }

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({ [name]: value })
    }

    render() {
        const { email, password } = this.state;

        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>
                            
                <form className='sign-in-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email" 
                        label="Email" 
                        handleChange={this.handleChange} 
                        value={email} 
                        required 
                    />
                    <FormInput 
                        type="password" 
                        name="password" 
                        label="Password" 
                        handleChange={this.handleChange} 
                        value={password} 
                        required 
                    />
                    <div className='button-container'>
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;