import React from 'react';

import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem  } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';


const CheckoutItem = ({ cartItem, clearItemProp, addItemProp, removeItemProp}) => {
    const { name, imageUrl, price, size, color, quantity } = cartItem;    

    return (
        <article className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">£{price}</span>
                <span className="product-detail-1">Size: {size}</span>
                <span className="product-detail-1">Color: {color}</span>
            </div>
            <div className="item-actions">
                <span className="quantity">
                    <div className="arrow" onClick={() => removeItemProp(cartItem)}>&#10094;</div>
                    <span className="value">{quantity}</span>
                    <div className="arrow" onClick={() => addItemProp(cartItem)}>&#10095;</div>
                </span>
            </div>
            <div className="remove-button" onClick={() => clearItemProp(cartItem)}>&#10005;</div>
        </article>
    )
};

const mapDispatchToProps = dispatch => ({
    clearItemProp: item => dispatch(clearItemFromCart(item)),
    addItemProp: item =>  dispatch(addItem(item)),
    removeItemProp: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);