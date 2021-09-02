import React from 'react';

import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';


const CartDropdown = ({ cartItemsProp }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItemsProp.map((cartItem) => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = ({ cart: { cartItems }}) => ({
    cartItemsProp: cartItems
});

export default connect(mapStateToProps)(CartDropdown);