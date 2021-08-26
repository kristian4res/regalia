import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' title='CRWN' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser 
                ?
                <div className='option' onClick={() => {
                    auth.signOut()
                        .then(() => console.log('signed out'))
                        .catch((err) => console.log(err))
                }}>
                    SIGN OUT
                </div>
                :
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            }
        </div>
    </div>
)

export default Header;