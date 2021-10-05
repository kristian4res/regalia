import { call, put, takeEvery } from 'redux-saga/effects';

import ShopActionTypes from './shop.types';
import { fetchCollectionsFailure, fetchCollectionsSuccess } from './shop.actions';

import { APP_KEY_PREFIX, convertCollectionsSnapshotToMap, firestoreDB  } from '../../firebase/firebase.utils';
import { collection, getDocs } from '@firebase/firestore';

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = collection(firestoreDB, `${APP_KEY_PREFIX}collections`);
        const snapshot = yield getDocs(collectionRef);
        const collectionsMap =  yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap)); 
    } catch (error) {
        yield put(fetchCollectionsFailure(error));
    }
};

export function* fetchCollectionsStartWatcher() {
    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
};