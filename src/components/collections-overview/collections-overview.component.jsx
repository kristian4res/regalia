import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';

import './collections-overview.styles.scss';


const CollectionsOverview = ({ collectionsProp }) => {
    return (
        <div className="collections-overview">
            {
                collectionsProp.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    collectionsProp: selectShopCollections
});

export default connect(mapStateToProps)(CollectionsOverview);