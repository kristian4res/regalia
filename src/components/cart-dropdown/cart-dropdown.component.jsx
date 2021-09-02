import React from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { createStructuredSelector } from 'reselect';

import './cart-dropdown.styles.scss';
import { selectCartItems } from '../../redux/cart/cart.selectors';


const CartDropdown = ({ cartItemsProp, history }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItemsProp.length ?
                cartItemsProp.map((cartItem) => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                : <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItemsProp: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));