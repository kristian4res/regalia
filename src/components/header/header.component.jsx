import React from 'react';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CustomLink from '../custom-link/custom-link.component';
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { ReactComponent as Logo } from '../../assets/regalia-color.svg';
import './header.styles.scss';


const Header = ({ currentUserProp, cartHiddenProp  }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' title='Regalia' />
        </LogoContainer>
        <OptionsContainer>
            <CustomLink to='/shop'>
                SHOP
            </CustomLink>
            <CustomLink to='/contact'>
                CONTACT
            </CustomLink>
            {
                currentUserProp 
                ?
                <OptionLink as='div' onClick={() => {
                    auth.signOut();
                }}>
                    SIGN OUT
                </OptionLink>
                :
                <CustomLink to='/signin'>
                    SIGN IN
                </CustomLink>
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