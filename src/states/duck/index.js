import { combineReducers } from "redux";
import token from './../duck/pages/loginPage';
import homePage from "./pages/homePage";
import menus from "./layout/headerReducer";
import dataFooter from "./layout/footerReducer";
import searchPeople from "./pages/findPeople/index"
import newDetail from "./pages/newDetail/index";
import searchJob from "./pages/findJob";
import { IntlReducer as Intl } from 'react-redux-multilingual'

const rootReducer = combineReducers({
    token,homePage,menus,dataFooter,searchPeople,newDetail,searchJob,Intl
});
export default rootReducer;
