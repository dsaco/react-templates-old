export const HOME_RECEIVE_LIST = 'HOME_RECEIVE_LIST';

export function fetchList() {
    return dispatch => {
        return delay(2000).then(() => {
            dispatch({
                type: HOME_RECEIVE_LIST,
                list: [1, 2],
            })
        })
    }
}


function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms);
    })
}