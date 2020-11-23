import * as constants from './constanst';
import callApi from "../../../../utils/ApiCaller";

export const getAllJobRequest = (data) => {
    return (dispatch) => {
        return callApi('news/searchjob', 'POST', data).then(res => {
            dispatch(getAllJob(res.data.results));
        });
    }
};
export const getAllJob = data => {
    return {
        type: constants.GET_ALL_JOB,
        data
    }
}
