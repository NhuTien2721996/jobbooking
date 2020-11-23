import * as constants from './constants';
import callApi from "../../../../utils/ApiCaller";

export const getAllDataFooterRequest = () => {
    return (dispatch) => {
        return callApi('menufooter/getmenuall', 'GET', null).then(res => {
            dispatch(getAllDataFooter(res.data));
        });
    }
};
export const getAllDataFooter = data => {
    return {
        type: constants.GET_ALL_DATA_FOOTER,
        data
    }
}
