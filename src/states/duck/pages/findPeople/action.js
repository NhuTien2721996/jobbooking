import * as constants from './constants';
import callApi from "../../../../utils/ApiCaller";

export const getAllPeoplePageRequest = (data) => {
    return (dispatch) => {
        return callApi('news/searchpeople', 'POST', data).then(res => {
            dispatch(getAllPeoplePage(res.data.results,res.data.currentpage,res.data.pagecount));
        });
    }
};
export const getAllPeoplePage = (data,page,pagecount) => {
    return {
        type: constants.GET_PEOPLE_FIND_PEOPLE_PAGE,
        data,page,pagecount
    }
}
export const getTopPeopleRequest = (data) => {
    return (dispatch) => {
        return callApi('news/find-best-peoples', 'POST', data).then(res => {
            dispatch(getTopPeople(res.data.results));
        });
    }
};
export const getTopPeople = data => {
    return {
        type: constants.GET_TOP_PEOPLE,
        data
    }
}
export const getSelectsRequest = () => {
    return (dispatch) => {
        return callApi('news/get-fields', 'GET', null).then(res => {
            dispatch(getSelects(res.data));
        });
    }
};
export const getSelects=data=>{
    return {
        type: constants.GET_SELECTS,
        data
    }
}
export const getAllNationsRequest=()=>{
    return (dispatch)=>{
        return callApi('com/all-nations2','GET',null).then(res=>{
            dispatch(getAllNations(res.data))
        })
    }
}
export const getAllNations=data=>{
    return {
        type:constants.GET_ALL_NATIONS,
        data
    }
}
export const getAllCityRequest=()=>{
    return (dispatch)=>{
        return callApi('com/all-province2','GET',null).then(res=>{
            dispatch(getAllCity(res.data))
        })
    }
}
export const getAllCity=data=>{
    return {
        type:constants.GET_ALL_CITY,
        data
    }
}
