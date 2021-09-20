import React from 'react';
import { connect } from 'react-redux';

import { ProductPageContainer, ImageContainer } from './product-page.styles';
import { selectProduct } from '../../redux/shop/shop.selectors';


const ProductPage = ({ productProp }) => {
    console.log(productProp);
    return (
        <ProductPageContainer>
            {
                productProp !== undefined ?
                <div className="product-information">
                    <ImageContainer imageUrl={productProp.imageUrl} />
                </div> :
                <h1>PRODUCT NOT FOUND</h1>
            }
            <div className="product-options">
                PRODUCT OPTIONS
            </div>
        </ProductPageContainer>
    )
};

const mapStateToProps = (state, ownProps) => ({
    productProp: selectProduct(ownProps.match.params.collectionId, ownProps.match.params.productId)(state)
})

export default connect(mapStateToProps)(ProductPage);
