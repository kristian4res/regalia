import React, { useState } from 'react';
import { connect } from 'react-redux';

import { selectProduct } from '../../redux/shop/shop.selectors';

import Select from 'react-select';
import CustomButton from '../../components/custom-button/custom-button.component';

import { ProductPageContainer, ImageContainer, Image } from './product-page.styles';
import './product-page.styles.scss';

const ProductPage = ({ productProp }) => {
    const { name, imageUrl } = productProp;
    const [productColor, setProductColor] = useState('');
    
    const sizes = [
        { value: 's', label: 'Small'},
        { value: 'm', label: 'Medium' },
        { value: 'l', label: 'Large' }
    ];

    function handleColor(e) {
        setProductColor(e.target.value);
    }

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
                            <Image src={imageUrl} />
                            <Image src={imageUrl} />
                        </ImageContainer> 
                    :   <h1>PRODUCT NOT FOUND</h1>
                }
                <div className="preview-description">
                    <h4 className="description">
                        "Sourced from the finest materials and crafted with the utmost care, a true product of innovation."
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
                    <h1>{name}</h1>
                    <h3>£9.99</h3>
                </div>
                <div className="product-form">
                    <form onSubmit={(e) => {e.preventDefault()}}>
                        <fieldset className="swatch-fieldset">
                            <legend>Color: {productColor}</legend>
                            <label htmlFor="jet-black">
                                <input type="radio" name="jet-black" title="Jet Black"
                                    value="jet-black"
                                    checked={productColor === 'jet-black'} 
                                    onChange={handleColor}
                                />
                                <span style={{backgroundColor: "#0A0A0A"}} />
                            </label>
                            <label htmlFor="off-white">
                                <input type="radio" name="off-white" title="Off White"
                                    value="off-white" 
                                    checked={productColor === 'off-white'} 
                                    onChange={handleColor}
                                />
                                <span style={{backgroundColor: "#f5f5f5"}} />
                            </label>
                            <label htmlFor="regal-purple">
                                <input type="radio" name="regal-purple" title="Regal Purple"
                                    value="regal-purple" 
                                    checked={productColor === 'regal-purple'} 
                                    onChange={handleColor}
                                />
                                <span style={{backgroundColor: "#7851a9"}} />
                            </label>
                        </fieldset>
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
