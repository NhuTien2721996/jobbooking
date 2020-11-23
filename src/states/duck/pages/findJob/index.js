import * as types from './constanst';
const initialState = []
const searchJob = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_JOB:
            return action.data;
        default:
            return state;
    }
}
export default searchJob;
