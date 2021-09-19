import React from 'react';

import { connect } from 'react-redux';

import { selectItemCollection, selectProduct } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';
import SubHeader from '../../components/sub-header/sub-header.component';

import './collection.styles.scss';


const CollectionPage = ({ collectionProp }) => {
    const { title, items } = collectionProp;

    return (
        <div className="collection-page">
            <SubHeader title={title.toUpperCase()} />
            <div className="items">
                {   
                    items.map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    collectionProp: selectItemCollection(ownProps.match.params.collectionId)(state),
    productProp: selectProduct(ownProps.match.params.productId)(state)
})

export default connect(mapStateToProps)(CollectionPage);