import React from 'react';
import { connect } from 'react-redux';

import { selectProduct } from '../../redux/shop/shop.selectors';

import Select from 'react-select';
import CustomButton from '../../components/custom-button/custom-button.component';

import { ProductPageContainer, ImageContainer, Image } from './product-page.styles';
import './product-page.styles.scss';

const ProductPage = ({ productProp }) => {
    
    const sizes = [
        { value: 's', label: 'Small'},
        { value: 'm', label: 'Medium' },
        { value: 'l', label: 'Large' }
    ];

    function handleSize(e) {
        console.log(e);
    }

    return (
        <ProductPageContainer>
            <div className="product-preview">
                {
                    productProp 
                    ?   
                        // PLACEHOLDER IMAGES
                        <ImageContainer>
                            <Image src={productProp.imageUrl} />
                            <Image src={productProp.imageUrl} />
                        </ImageContainer> 
                    :   <h1>PRODUCT NOT FOUND</h1>
                }
                <div className="preview-description">
                    <h4 className="description">
                        "Sourced from the finest materials and crafted with the utmost care, a product that evolves your fashion."
                    </h4>
                    <dl className="description-list">
                        <div className="description-list-container">
                            <dt>Size |</dt>
                            <dd>The model is 173cm/5'8" and wears a size S</dd>
                        </div>
                        <div className="description-list-container">
                            <dt>Fit |</dt>
                            <dd>Fitted</dd>
                        </div>
                        <div className="description-list-container">
                            <dt>Composition |</dt>
                            <dd>Viscose 40%, Acrylic 40%, Polyamide 20%</dd>
                        </div>
                        <div className="description-list-container">
                            <dt>Art No. |</dt>
                            <dd>1003438001</dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div className="product-information">
                <div className="product-title">
                    <h1>PRODUCT TITLE</h1>
                    <h3>£9.99</h3>
                </div>
                <div className="product-form">
                    <form onSubmit={(e) => {e.preventDefault()}}>
                        <Select
                                placeholder="Select size"
                                options={sizes} 
                                onChange={handleSize}
                            />
                        <CustomButton type="submit">Add to Cart</CustomButton>
                    </form>
                </div>
            </div>
        </ProductPageContainer>
    )
};

const mapStateToProps = (state, ownProps) => ({
    productProp: selectProduct(ownProps.match.params.collectionId, ownProps.match.params.productId)(state)
})

export default connect(mapStateToProps)(ProductPage);
