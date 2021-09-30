import React, { useState } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { addItem } from '../../redux/cart/cart.actions';

import { selectProduct } from '../../redux/shop/shop.selectors';

import StickyComponent from '../../components/sticky-comp/sticky-comp.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import CustomSelect from '../../components/custom-select/custom-select.component';
import { ProductPageContainer, ImageContainer, Image, ProductInformation, ProductTitle, ProductForm, FormSelect, SwatchFieldset } from './product-page.styles';

import './product-page.styles.scss';


const ProductPage = ({ productProp, addItemProp }) => {
    const { name, imageUrl, price } = productProp;
    const [productSize, setProductSize]= useState();
    const [productColor, setProductColor] = useState('');
    const [productQuantity, setProductQuantity] = useState();
    
    const sizes = [
        { value: 's', label: 'Small'},
        { value: 'm', label: 'Medium' },
        { value: 'l', label: 'Large' }
    ];

    const quantity = [
        { value: 1, label: '1'},
        { value: 2, label: '2' },
        { value: 3, label: '3' },
        { value: 4, label: '4' },
        { value: 5, label: '5' },
        { value: 6, label: '6' }
    ];

    function handleSize(e) {
        setProductSize(e.value);
    };

    function handleQuantity(e) {
        setProductQuantity(e.value);
    };

    function handleColor(e) {
        setProductColor(e.target.value);
    };

    function handleForm(e) {
        e.preventDefault();
        addItemProp({...productProp, size: productSize, quantity: productQuantity})
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
            <ProductInformation>
                <StickyComponent>
                    <div className="sticky-inner">
                    <ProductTitle>
                        <h1>{name}</h1>
                        <h2>£{price}.00</h2>
                    </ProductTitle>
                    <ProductForm onSubmit={handleForm}>
                        <SwatchFieldset>
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
                        </SwatchFieldset>
                        <FormSelect>
                            <CustomSelect
                                placeholder="Select size"
                                options={sizes} 
                                onChange={handleSize}
                            />
                            <CustomSelect
                                placeholder="Select quantity"
                                options={quantity}
                                onChange={handleQuantity}
                            />
                        </FormSelect>
                        <CustomButton type="submit">Add to Cart</CustomButton>
                    </ProductForm>
                    </div>
                </StickyComponent>
            </ProductInformation>
        </ProductPageContainer>
    )
};

// Create dummy data
ProductPage.defaultProps = {
    productProp: {
        id: 1,
        name: 'PRODUCT TITLE',
    }
}

ProductPage.propTypes = {
    productProp: PropTypes.object
}

const mapStateToProps = (state, ownProps) => ({
    productProp: selectProduct(ownProps.match.params.collectionId, ownProps.match.params.productId)(state)
});

const mapDispatchToProps = dispatch => ({
    addItemProp: item => dispatch(addItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
