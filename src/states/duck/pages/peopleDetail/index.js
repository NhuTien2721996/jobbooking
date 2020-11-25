import * as types from './constanst';
const initialState ={
    comments:[],
    customer:[],
    images:""
};
const peopleDetail = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PEOPLE_DETAIL:
            return {comments: action.comments,customer: action.customer,images: action.images};
        default:
            return state;
    }
}
export default peopleDetail;
