import React from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';


const CollectionItem = ({ collection, item, addItemProp, history, match }) => {
    const { id, name, price, imageUrl } = item;
    const linkUrl = match.url === '/shop' ? `${match.url}/${collection.toLowerCase()}/${id}` : `${match.url}/${id}`;

    function handleClick() {
        history.push(`${linkUrl}`)
    }

    return (
        <div className='collection-item'>
            <div className='image' onClick={handleClick}
            style={{
                backgroundImage: `url(${imageUrl})`
            }}  
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>£{price}</span>
            </div>
            <CustomButton onClick={() => addItemProp(item)} invertedColors>ADD TO CART</CustomButton>
        </div>
)}

const mapDispatchToProps = dispatch => ({
    addItemProp: item => dispatch(addItem(item))
})

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));