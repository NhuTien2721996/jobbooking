import * as types from './constants';
const initialState = {
    people:{
        listPeople:[],
        page:"",
        pagecount:"",
    },
    peopleTop:[],
    selects:[],
    listNation:[],
    listCity:[],
    listDistrict:[],
    listWard:[]

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

        default:
            return state;
    }
}
export default searchPeople;
