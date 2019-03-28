import { fork, takeLatest, put } from 'redux-saga/effects';

import { HOME_REQUEST_LIST, HOME_RECEIVE_LIST } from '../actions/homeAction';

const delay = (ms) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms)
    })
};

function* getList() {
    try {
        const list = yield delay(3000).then(() => {
            return [1, 2, 3];
        });
        yield put({
            type: HOME_RECEIVE_LIST,
            list,
        });
    } catch (e) {
        alert('error');
    }
}

function* watchGetList() {
    yield takeLatest(HOME_REQUEST_LIST, getList);
}

export default function* homeSaga() {
    yield fork(watchGetList);
}