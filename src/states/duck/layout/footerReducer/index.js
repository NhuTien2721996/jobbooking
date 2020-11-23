import * as types from "./constants";

const initialState = {
    navVisible : false,
    dataFooter:[]
}

const dataFooter = (state = initialState, action) => {
    switch (action.type) {
    case types.TOGGLE_NAV:
        return { ...state, navVisible : !state.navVisible }
    case types.CHANGE_TOGGLE_NAV:
        return { ...state, navVisible : action.value }
        case types.GET_ALL_DATA_FOOTER:
            return {...state,dataFooter: action.data}
    default:
        return state
    }
}
export default dataFooter;
