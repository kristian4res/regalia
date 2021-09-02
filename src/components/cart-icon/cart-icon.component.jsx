import React from 'react';

import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';


const CartIcon = ({ toggleCartHiddenProp, itemCountProp }) => (
    <div className='cart-icon'  onClick={toggleCartHiddenProp}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCountProp}</span>
    </div>
);

const mapStateToProps = createStructuredSelector({
    itemCountProp: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    toggleCartHiddenProp: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);