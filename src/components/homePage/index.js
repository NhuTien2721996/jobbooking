import React, {Fragment, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Helmet} from "react-helmet";
import SectionBanner from "./Section-banner";
import SectionAbout from "./Section-about";
import SectionBenefit from "./Section-benefit";
import SectionDownload from "./Section-download";
import SectionNews from "./Section-news";
import {getAllDataRequestHomePage} from "../../states/duck/pages/homePage/action";

export const filterData = (data, type) => {
    let newData = [];
    for (let i = 0; i <= data.length - 1; i++) {
        if (data[i].type === type) {
            newData.push(data[i])
        }
    }
    return newData;
}
export const transformDate = (data, type) => {
    let dateArr = [];
    let time = [];
    let newDay = [];
    for (let i = 0; i <= data.length - 1; i++) {
        if (data[i].type === type) {
            dateArr.push(data[i].createddate);
        }
    }
    for (let i = 0; i <= dateArr.length - 1; i++) {
        time.push(new Date(dateArr[i]))
        newDay.push(time[i].getFullYear() + "/" + (time[i].getMonth() + 1) + "/" + time[i].getDate());
    }
    return newDay;

}
export const getDate=(data)=>{
    let dateArr = [];
    let time = [];
    let newDay = [];
    for (let i = 0; i <= data.length - 1; i++) {
            dateArr.push(data[i].createddate);
    }
    for (let i = 0; i <= dateArr.length - 1; i++) {
        time.push(new Date(dateArr[i]))
        newDay.push(time[i].getFullYear() + "/" +((time[i].getMonth() + 1)>10? (time[i].getMonth() + 1): "0"+(time[i].getMonth() + 1)) + "/" + (time[i].getDate()>10? time[i].getDate():"0"+time[i].getDate()));
    }
    return newDay;
}
export const getDateJob=(data)=>{
    let dateArr = [];
    let time = [];
    let newDay = [];
    for (let i = 0; i <= data.length - 1; i++) {
        dateArr.push(data[i].field_datecreate);
    }
    for (let i = 0; i <= dateArr.length - 1; i++) {
        time.push(new Date(dateArr[i]))
        newDay.push(time[i].getFullYear() + "/" + (time[i].getMonth() + 1) + "/" + time[i].getDate());
    }
    return newDay;
}
export const transformDateFooter = (data, value) => {
    let dateArr = [];
    let time = [];
    let newDay = [];
    for (let i = 0; i <= data.length - 1; i++) {
        if (data[i].isfooter === value) {
            dateArr.push(data[i].createddate);
        }
    }
    for (let i = 0; i <= dateArr.length - 1; i++) {
        time.push(new Date(dateArr[i]))
        newDay.push(time[i].getFullYear() + "/" + (time[i].getMonth() + 1) + "/" + time[i].getDate());
    }
    return newDay;

}
const HomePage = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.homePage);

    useEffect(() => {
        dispatch(getAllDataRequestHomePage())
    }, []);
    return (
        <Fragment>
            <Helmet>
                <title>Trang chủ</title>
            </Helmet>
            <SectionBanner data={data}/>
            <SectionAbout data={data}/>
            <SectionBenefit data={data}/>
            <SectionDownload/>
            <SectionNews data={data}/>
        </Fragment>

    );
}

export default HomePage;
