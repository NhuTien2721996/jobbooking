import * as types from "./constants";

const initialState = {
    navVisible : false,
    routes:[]
}

const Menus = (state = initialState, action) => {
    switch (action.type) {
    case types.TOGGLE_NAV:
        return { ...state, navVisible : !state.navVisible }
    case types.CHANGE_TOGGLE_NAV:
        return { ...state, navVisible : action.value }
        case types.GET_ALL_ROUTES_MENU:
            return {...state,routes: action.routes}
    default:
        return state
    }
}
export default Menus;
