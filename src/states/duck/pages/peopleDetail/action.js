import * as constants from './constanst';
import callApi from "../../../../utils/ApiCaller";


export const getPeopleDetailRequest=(people)=>{
    return (dispatch)=>{
        return callApi('news/peopledetail','POST',people).then(res=>{
            dispatch(getPeopleDetail(res.data.comments,res.data.customer,res.data.imagefile))
        })
    }
}
export const getPeopleDetail = (comments,customer,images) => {
    return {
        type: constants.GET_PEOPLE_DETAIL,
        comments,customer,images
    }
}
