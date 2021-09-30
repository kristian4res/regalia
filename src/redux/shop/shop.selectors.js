import { createSelector } from "reselect";
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);

export const selectItemCollectionForPreview = createSelector(
    [selectShopCollections],
    collections => (
        (collections ? Object.keys(collections).map(key => collections[key]) : [])
    )
);

export const selectItemCollection = memoize((collectionUrlParam) => 
    createSelector(
        [selectShopCollections],
        collections => collections[collectionUrlParam]
));

export const selectProduct = ((collectionUrlParam, itemUrlParam) => (
    createSelector(
        [selectShopCollections],
        collections => collections[collectionUrlParam].items.find(item => item.id === parseInt(itemUrlParam))
    )
));

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
);