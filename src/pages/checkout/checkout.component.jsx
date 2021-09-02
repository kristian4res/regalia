import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotalValue } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';


const CheckoutPage = ({ cartItemsProp, cartTotalValueProp }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItemsProp.map(cartItem => (
                <span>{cartItem.name}</span>
            ))
        }
        <div className="total">
            <span>TOTAL: £{cartTotalValueProp}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItemsProp: selectCartItems,
    cartTotalValueProp: selectCartTotalValue
});

export default connect(mapStateToProps)(CheckoutPage);
