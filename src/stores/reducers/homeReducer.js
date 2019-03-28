
import { HOME_RECEIVE_LIST } from '../actions/homeAction';

const homeReducer = (state = {
    list: [],
}, action) => {
    switch (action.type) {
        case HOME_RECEIVE_LIST:
            return Object.assign({}, state, { list: action.list });
        default:
            return state;
    }
}

export default homeReducer;