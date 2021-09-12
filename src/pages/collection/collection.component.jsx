import React from 'react';

import { connect } from 'react-redux';

import { selectItemCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';
import SubHeader from '../../components/sub-header/sub-header.component';


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
    collectionProp: selectItemCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);