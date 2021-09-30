import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotalValue } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import './checkout.styles.scss';
import SubHeader from '../../components/sub-header/sub-header.component';


const CheckoutPage = ({ cartItemsProp, cartTotalValueProp }) => {
    const title = 'Checkout'
    
    return (
        <div className='checkout-page'>
            <SubHeader title={title.toUpperCase()} />
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Size</span>
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
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
            }
            <div className="total">
                <span>TOTAL: £{cartTotalValueProp}</span>
            </div>
            <div className="checkout-payment">
                <div className="test-warning">
                    NOTICE: Please use the following credit card information to test Stripe payments.
                    <br/>
                    4242 4242 4242 4242 - Exp: 01/25 - CVV: 123 (Visa)
                    <br/>
                    5555 5555 5555 4444 - Exp: 02/25 - CVV: 456 (Mastercard)
                </div>
                <StripeCheckoutButton price={cartTotalValueProp} />
            </div>
            
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    cartItemsProp: selectCartItems,
    cartTotalValueProp: selectCartTotalValue
});

export default connect(mapStateToProps)(CheckoutPage);
