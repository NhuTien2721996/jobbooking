import * as constants from './constants';
import callApi from "../../../../utils/ApiCaller";

export const getAllRoutesMenuRequest = () => {
    return (dispatch) => {
        return callApi('menu/getmenupages', 'GET', null).then(res => {
            dispatch(getAllRoutesMenu(res.data));
        });
    }
};
export const getAllRoutesMenu = routes => {
    return {
        type: constants.GET_ALL_ROUTES_MENU,
        routes
    }
}
