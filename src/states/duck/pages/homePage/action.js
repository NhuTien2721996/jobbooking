import * as constants from './constants';
import callApi from "../../../../utils/ApiCaller";

export const getAllDataRequestHomePage = () => {
    return (dispatch) => {
        return callApi('landingpages/getlandingpages', 'GET', null).then(res => {
            dispatch(getAllDataHomePage(res.data));
        });
    }
};
export const getAllDataHomePage = data => {
    return {
        type: constants.GET_ALL_DATA_HOMEPAGE,
        data
    }
}
