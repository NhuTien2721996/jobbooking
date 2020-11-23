import * as types from './constants';
const initialState =[];
const newDetail = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_NEWS_DETAIL:
            return action.data;
        default:
            return state;
    }
}
export default newDetail;
