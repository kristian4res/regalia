import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsPage from '../collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import ProductPage from '../product-page/product-page.component';

const ShopPage = ({ match }) => {
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route exact path={`${match.path}/:collectionId`} component={CollectionsPage} />
            <Route exact path={`${match.path}/:collectionId/:productId`} component={ProductPage}/>
        </div>
    )
};

export default ShopPage;