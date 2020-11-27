import React, {Fragment, useEffect} from "react";
import {useDispatch} from "react-redux";
import HeaderPage from "./headerPage";
import MainNewDetail from "./mainNewDetail";
import SideBar from "./sidebar";
import {getAllDataRequestHomePage} from "../../../states/duck/pages/homePage/action";


export const NewDetail = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllDataRequestHomePage());
    }, [dispatch]);
    return (
        <Fragment>
            <div className="header-page">
                <HeaderPage/>
            </div>
            <div className="content-page">
                <div className="bs-container">
                    <div className="bs-row">
                        <MainNewDetail/>
                        <SideBar/>
                    </div>
                </div>
            </div>
        </Fragment>

    );
}

export default NewDetail;
