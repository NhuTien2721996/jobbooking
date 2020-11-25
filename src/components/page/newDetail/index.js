import React, {Fragment, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import HeaderPage from "./headerPage";
import MainNewDetail from "./mainNewDetail";
import SideBar from "./sidebar";
import {useParams} from "react-router-dom"
import {getAllDataRequestHomePage} from "../../../states/duck/pages/homePage/action";
import {filterData} from "../../../constants/ConfigConstants";


export const NewDetail = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.homePage);
    const match = useParams();
    let newDetail = [];
    let newDetailArr = filterData(data, 4);
    for (let i = 0; i <= newDetailArr.length - 1; i++) {
        if (match && newDetailArr[i].id === match.id) {
            newDetail.push(newDetailArr[i])
        }
    }
    useEffect(() => {
        dispatch(getAllDataRequestHomePage());

    }, []);
    return (
        <Fragment>
            <div className="header-page">
                <HeaderPage newDetail={newDetail}
                />
            </div>
            <div className="content-page">
                <div className="bs-container">
                    <div className="bs-row">
                        <MainNewDetail newDetail={newDetail}/>
                        <SideBar newDetailArr={newDetailArr}/>
                    </div>
                </div>
            </div>
        </Fragment>

    );
}

export default NewDetail;
