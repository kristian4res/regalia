import React from 'react';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { ReactComponent as Logo } from '../../assets/regalia.svg';
import './header.styles.scss';


const Header = ({ currentUserProp, cartHiddenProp  }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' title='Regalia' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/contact'>
                CONTACT
            </OptionLink>
            {
                currentUserProp 
                ?
                <OptionLink as='div' onClick={() => {
                    auth.signOut();
                }}>
                    SIGN OUT
                </OptionLink>
                :
                <OptionLink to='/signin'>
                    SIGN IN
                </OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            !cartHiddenProp && <CartDropdown />
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUserProp: selectCurrentUser,
    cartHiddenProp: selectCartHidden
});

export default connect(mapStateToProps)(Header);