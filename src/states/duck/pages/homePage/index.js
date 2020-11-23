import * as types from './constants';
const initialState = [];
const homePage = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_DATA_HOMEPAGE:
            return action.data;
        default:
            return state;
    }
}
export default homePage;
