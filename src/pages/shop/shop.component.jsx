import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import CollectionsPageContainer from '../collection/collection.container';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import ProductPageContainer from '../product-page/product-page.container';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

class ShopPage extends Component {
    componentDidMount() {
        const { fetchCollectionsStartAsyncProp } = this.props;
        fetchCollectionsStartAsyncProp();
    }

    render() {
        const { match } = this.props;

        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route exact path={`${match.path}/:collectionId`} component={CollectionsPageContainer} />
                <Route exact path={`${match.path}/:collectionId/:productId`} component={ProductPageContainer}/>
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStartAsyncProp: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);