import * as types from './constants';
const initialState = {
    people:{
        listPeople:[],
        page:"",
        pagecount:"",
    },
    peopleFilter:'',
    peopleTop:[],
    selects:[],
    listNation:[],
    listCity:[],
    listDistrict:[],
    listWard:[],
    toggleModal:false,
    page:1,
    toggleFormSearch:false,
    keyword:''

}
const searchPeople = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PEOPLE_FIND_PEOPLE_PAGE:
            return {...state,people: {listPeople: action.data,page: action.page,pagecount: action.pagecount}};
        case types.GET_TOP_PEOPLE:
            return {...state,peopleTop: action.data};
        case types.GET_SELECTS:
            return {...state,selects: action.data};
        case types.GET_ALL_NATIONS:
            return {...state,listNation: action.data};
        case types.GET_ALL_CITY:
            return {...state,listCity: action.data};
        case types.GET_ALL_DISTRICT:
            return {...state,listDistrict: action.data};
        case types.GET_ALL_WARD:
            return {...state,listWard: action.data};
        case types.TOGGLE_MODAL_PEOPLE_DETAIL:
            return {...state,toggleModal:action.status};
        case types.GET_PAGE_NUMBER:
            return {...state,page:action.page};
        case types.TOGGLE_FORM_SEARCH:
            return {...state,toggleFormSearch:action.status};
        case types.GET_ALL_KEYWORD:
            return {...state,keyword:action.keyword};
        case types.GET_DATA_PEOPLE_FILTER:
            return {...state,peopleFilter:action.data};
        default:
            return state;
    }
}
export default searchPeople;
