import React, {useState, useEffect} from "react";
import { useDispatch} from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import {
    getAllCityRequest, getAllDistrictRequest,
    getAllNationsRequest,
    getAllPeoplePageRequest, getAllWardRequest,
    getSelectsRequest
} from "../../../states/duck/pages/findPeople/action";
import {useTranslate, withTranslate} from 'react-redux-multilingual';
import {getPeopleDetailRequest} from "../../../states/duck/pages/peopleDetail/action";
import ModalPeoplePage from "./PeopleListItem/modal";
import ListPeople from "./PeopleListItem/ListPeopleItem";
import Paginator from "./PeopleListItem/paginator";
import FormSelect from "./PeopleListItem/FormSelect";

export const showRating = (number) => {
    let star = [];
    for (let i = 1; i <= number; i++) {
        star.push("fas fa-star start__content--item")
    }
    return star;
}

const FindPeople = () => {
    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState("");
    const [page, setPage] = useState(1);
    const [toggleSearch, setToggleSearch] = useState(false);
    const [toggleModal, setToggleModal] = useState(false);
    const [codeCity, setCodeCity] = useState("");
    const [codeDistrict, setCodeDistrict] = useState('');
    const [codeWard, setCodeWard] = useState('');
    const [ratingFrom, setRatingFrom] = useState('');
    const [ratingTo, setRatingTo] = useState('');
    const lang = useTranslate();
    const getFormSearch = () => {
        dispatch(getAllNationsRequest());
        dispatch(getAllCityRequest());
    }
    const onSearch = (keyword) => {
        let people = {
            customer_career: null,
            districtid: codeDistrict,
            field: keyword,
            pageindex: page,
            pagesize: 12,
            provinceid: codeCity,
            ratingfrom: ratingFrom,
            ratingto: ratingTo,
            skills: [""],
            wardid: codeWard,
        }
        dispatch(getAllPeoplePageRequest(people))
    }
    const showDetail = (id, status) => {
        let peopleDetail = {
            IDCustomer: id,
            pageIndex: page
        }
        dispatch(getPeopleDetailRequest(peopleDetail))
        setToggleModal(status);
    }
    const onHandleChangePage=(page)=>{
        setPage(page)
    }
    const onHandle = (status) => {
        setToggleModal(status)
    }
    const onHandleChangeKeyword=(keyword)=>{
        setKeyword(keyword)
    }
    const onHandleChangeCodeCity=(value)=>{
        setCodeCity(value)
    }
    const onHandleChangeDistrict=(value)=>{
        setCodeDistrict(value)
    }
    const onHandleChangeCodeWard=(value)=>{
        setCodeWard(value)
    }
    const onHandleChangeRatingFrom=(value)=>{
        setRatingFrom(value)
    }
    const onHandleChangeRatingTo=(value)=>{
        setRatingTo(value)
    }
    useEffect(() => {
        if (toggleModal) {
            document.body.classList.add('active-modal');
        } else {
            if (document.getElementsByClassName("show-modal").length === 0) {
                document.body.classList.remove('active-modal');
            }
        }
    }, [toggleModal])
    useEffect(() => {
        let people;
        if (keyword) {
            people = {
                customer_career: null,
                districtid: null,
                field: keyword,
                pageindex: page,
                pagesize: 12,
                provinceid: null,
                ratingfrom: null,
                ratingto: null,
                skills: [""],
                wardid: null,
            }
        } else {
            people = {
                customer_career: null,
                districtid: null,
                field: null,
                pageindex: page,
                pagesize: 12,
                provinceid: null,
                ratingfrom: null,
                ratingto: null,
                skills: [""],
                wardid: null,
            }
        }
        dispatch(getAllPeoplePageRequest(people))
    }, [page]);
    useEffect(() => {
        dispatch(getSelectsRequest())

    }, []);
    useEffect(() => {
        if (codeCity) {
            dispatch(getAllDistrictRequest(codeCity))
        }
    }, [codeCity]);
    useEffect(() => {
        if (codeDistrict) {
            dispatch(getAllWardRequest(codeDistrict))
        }
    }, [codeDistrict]);
    return (
        <React.Fragment>
            <section className="section section-find">
                <div className="bs-container">
                    <div className="bs-row">
                        <div className="bs-col">
                            <div className="module-find">
                                <div className="module-header">
                                    <h2 className="title" data-aos="fade-up">{lang('title_header', {value: ''})}</h2>
                                    <h2 className="title__shadow" data-aos="fade-down" data-aos-delay="300"
                                        data-aos-duration="3000"> {lang('title_header', {value: ''})}</h2>
                                </div>
                                <div className="module-content">
                                    <div className="content-form" data-aos="fade-up">
                                        <div className="content-form__title">
                                            <p className="title"> {lang('title_content', {value: ''})}</p>
                                        </div>
                                        <div className="content-form__content">
                                            <div className="form-select">
                                                <div className="bs-row row-md-5">
                                                    <FormSelect
                                                        onHandleChangeKeyword={onHandleChangeKeyword}
                                                        onHandleChangeCodeCity={onHandleChangeCodeCity}
                                                        onHandleChangeDistrict={onHandleChangeDistrict}
                                                        onHandleChangeCodeWard={onHandleChangeCodeWard}
                                                        onHandleChangeRatingFrom={onHandleChangeRatingFrom}
                                                        onHandleChangeRatingTo={onHandleChangeRatingTo}
                                                        toggleSearch={toggleSearch}
                                                        keyword={keyword}
                                                    />
                                                    <div className="bs-col tn-100-5 xs-50-5 sm-33-10 md-33-15 lg-25-10">
                                                        <div className="item">
                                                            <button className="btn-search"
                                                                    onClick={() => onSearch(keyword)}
                                                            >{lang('search', {value: ''})}
                                                            </button>
                                                            <span className="show_search"
                                                                  onClick={() => getFormSearch(setToggleSearch(!toggleSearch))}>{toggleSearch ? lang('hide_search_detail', {value: ''}) : lang('search_detail', {value: ''})}</span>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bs-container custom-container">
                    <div className="content-list">
                        <div className="bs-row row-tn-5 row-xs-5 row-sm-10 row-md-15">
                            <ListPeople showDetail={showDetail}/>
                        </div>
                        <Paginator page={page}
                                   onHandleChangePage={onHandleChangePage}
                        />
                    </div>
                </div>
            </section>
            <ModalPeoplePage toggleModal={toggleModal}
                             onHandle={onHandle}
            />
        </React.Fragment>
    );
}


export default withTranslate(FindPeople);
