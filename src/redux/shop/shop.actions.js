import ShopActionTypes from "./shop.types";

import { APP_KEY_PREFIX } from "../../firebase/firebase.utils";
import { convertCollectionsSnapshotToMap, firestoreDB } from '../../firebase/firebase.utils';
import { collection, onSnapshot } from '@firebase/firestore';

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
    return (dispatch) => {
        const collectionRef = collection(firestoreDB, `${APP_KEY_PREFIX}collections`);
        // isFetching => true
        dispatch(fetchCollectionsStart());

        // fetch data from firebase, create action object and dispatch to the store reducer
        onSnapshot(collectionRef, 
            async (snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap));
        }, 
            (errorMessage) => {
                dispatch(fetchCollectionsFailure(errorMessage))
        });
    }
}