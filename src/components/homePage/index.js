import React, {Fragment, useEffect} from "react";
import {useDispatch} from "react-redux";
import {Helmet} from "react-helmet";
import SectionBanner from "./Section-banner";
import SectionAbout from "./Section-about";
import SectionBenefit from "./Section-benefit";
import SectionDownload from "./Section-download";
import SectionNews from "./Section-news";
import {getAllDataRequestHomePage} from "../../states/duck/pages/homePage/action";


const HomePage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllDataRequestHomePage())

    }, [dispatch]);
    return (
        <Fragment>
            <Helmet>
                <title>Trang chủ</title>
            </Helmet>
            <SectionBanner/>
            <SectionAbout/>
            <SectionBenefit/>
            <SectionDownload/>
            <SectionNews/>
        </Fragment>

    );
}

export default HomePage;
