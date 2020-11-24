import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";
import {
    getAllCityRequest, getAllDistrictRequest,
    getAllNationsRequest,
    getAllPeoplePageRequest, getAllWard, getAllWardRequest,
    getSelectsRequest
} from "../../../states/duck/pages/findPeople/action";
import {getDate} from "../../homePage";
import {useTranslate, withTranslate} from 'react-redux-multilingual';

const FindPeople = () => {
    const dispatch = useDispatch();
    const dataPeoplePage = useSelector(state => state.searchPeople.people.listPeople);
    const pageCount = useSelector(state => state.searchPeople.people.pagecount);
    const dataSelects = useSelector(state => state.searchPeople.selects);
    const dataNations = useSelector(state => state.searchPeople.listNation);
    const dataCity = useSelector(state => state.searchPeople.listCity);
    const dataDistrict = useSelector(state => state.searchPeople.listDistrict);
    const dataWard = useSelector(state => state.searchPeople.listWard);
    const [keyword, setKeyword] = useState("");
    const [page, setPage] = useState(1);
    const [toggleSearch, setToggleSearch] = useState(false);
    const customStyles = {
        container: (provided) => ({
            ...provided,
            marginBottom: "10px"
        }),
        control: (provided) => ({
            ...provided,
            minHeight: "unset",
            height: "35px",
            border: "1px solid #b0d1e4",
            position: "relative",
            paddingRight: "32px"
        }),
        // placeholder: (provided) => ({
        //     ...provided,
        //     top: "50%",
        //     transform: "translateY(-50%)",
        //     fontSize: "12px",
        //     position: "absolute",
        //     whiteSpace: "nowrap"
        // }),
        indicatorSeparator: (provided) => ({
            ...provided,
            display: "none"
        }),
        indicatorsContainer: (provided) => ({
            ...provided,
            position: "absolute",
            top: "0",
            right: "0"
        }),
        singleValue: (provided) => ({
            ...provided,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "14px"
        }),
        menu: (provided) => ({
            ...provided,
            zIndex: "10",
        })
    }
    const rating = [
        { value: '1', label: '1 sao' },
        { value: '2', label: '2 sao' },
        { value: '3', label: '3 sao' },
        { value: '4', label: '4 sao' },
        { value: '5', label: '5 sao' },
    ]
    let html = [];
    for (let i = 1; i <= pageCount; i++) {
        html.push(i)
    }
    const lang = useTranslate();
    const getFormSearch = () => {
        dispatch(getAllNationsRequest());
        dispatch(getAllCityRequest());
    }
    const [codeCity, setCodeCity] = useState("");
    const [codeDistrict, setCodeDistrict] = useState('');
    const [codeWard, setCodeWard] = useState('');
    const [ratingFrom, setRatingFrom] = useState('');
    const [ratingTo, setRatingTo] = useState('');
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
                                                <div className="bs-col tn-50-5 xs-50-5 sm-33-10 md-33-15 lg-20-10">
                                                    <input type="text" className="form-input"
                                                           placeholder="Kỹ năng"/>

                                                </div>
                                                <div className="bs-col tn-50-5 xs-50-5 sm-33-10 md-33-15 lg-20-10">
                                                    <Select options={dataSelects}
                                                            placeholder={'Chọn lĩnh vực'}
                                                            styles={customStyles}
                                                            onChange={(val) => setKeyword(val.value)}
                                                    />
                                                </div>
                                                <div className="bs-col tn-50-5 xs-50-5 sm-33-10 md-33-15 lg-20-10">

                                                    <Select options={dataSelects}
                                                            placeholder={'Chọn nghề nghiệp'}
                                                            styles={customStyles}
                                                        // onChange={(val) => setKeyword(val.value)}
                                                    />
                                                </div>
                                                {toggleSearch ?
                                                    <React.Fragment>
                                                        <div
                                                            className="bs-col tn-50-5 xs-50-5 sm-33-10 md-33-15 lg-20-10">
                                                            <Select options={dataNations}
                                                                    placeholder={'Chọn lĩnh vực'}
                                                                    styles={customStyles}
                                                                // onChange={(val) => setKeyword(val.value)}
                                                                // defaultValue={dataNations[0]}
                                                                    value={dataNations.filter(item => item.label === "Việt Nam")}
                                                            />
                                                        </div>
                                                        <div
                                                            className="bs-col tn-50-5 xs-50-5 sm-33-10 md-33-15 lg-20-10">
                                                            <Select options={dataCity}
                                                                    placeholder={'Chọn tỉnh thành'}
                                                                    styles={customStyles}
                                                                    onChange={(val) => setCodeCity(val.value)}
                                                            />
                                                        </div>
                                                        <div
                                                            className="bs-col tn-50-5 xs-50-5 sm-33-10 md-33-15 lg-20-10">
                                                            <Select options={dataDistrict}
                                                                    placeholder={'Chọn quận huyện'}
                                                                    styles={customStyles}
                                                                    onChange={(val) => setCodeDistrict(val.value)}
                                                            />
                                                        </div>
                                                        <div
                                                            className="bs-col tn-50-5 xs-50-5 sm-33-10 md-33-15 lg-20-10">
                                                            <Select options={dataWard}
                                                                    placeholder={'Chọn phường xã'}
                                                                    styles={customStyles}
                                                                    onChange={(val) => setCodeWard(val.value)}
                                                            />
                                                        </div>
                                                        <div
                                                            className="bs-col tn-50-5 xs-50-5 sm-33-10 md-33-15 lg-20-10">
                                                            <Select options={rating}
                                                                    placeholder={'Từ'}
                                                                    styles={customStyles}
                                                                    onChange={(val) => setRatingFrom(val.value)}
                                                            />
                                                        </div>
                                                        <div
                                                            className="bs-col tn-50-5 xs-50-5 sm-33-10 md-33-15 lg-20-10">
                                                            <Select options={rating}
                                                                    placeholder={'Đến'}
                                                                    styles={customStyles}
                                                                    onChange={(val) => setRatingTo(val.value)}
                                                            />
                                                        </div>
                                                    </React.Fragment> :
                                                    ""
                                                }


                                                <div className="bs-col tn-50-5 xs-50-5 sm-33-10 md-33-15 lg-25-10">
                                                    <div className="item">
                                                        <button className="btn-search"
                                                                onClick={() => onSearch(keyword)}
                                                        >{lang('search', {value: ''})}
                                                        </button>
                                                        <span className="show_search"
                                                              onClick={() => getFormSearch(setToggleSearch(!toggleSearch))}>{toggleSearch ? "Ẩn tìm kiếm chính xác" : "Tìm kiếm chính xác"}</span>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="content-list">
                                    <div className="bs-row row-tn-5 row-xs-5 row-sm-10 row-md-15">
                                        {dataPeoplePage.length > 0 ? dataPeoplePage.map((item, index) => {
                                            return <div
                                                className="bs-col tn-100-5 xs-100-5 sm-50-10 md-50-15 lg-33-15"
                                                key={index}>
                                                <div className="item" data-aos="fade-up" data-aos-delay="300">
                                                    <div className="avatar">
                                                        <img
                                                            src={`https://api.jobbooking.com/Upload/Customer/${getDate(dataPeoplePage)[index]}/${item.filename1}`}
                                                            alt=""/>
                                                    </div>
                                                    <div className="info">
                                                        <p className="name">{item.fullname}</p>
                                                        <p className="rating">
                                                        <span className="star">
                                                            {item.rating}
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                        </span>
                                                            Đánh giá
                                                            <span className="number">34</span>
                                                            Đã làm
                                                            <span className="number">12</span>
                                                        </p>
                                                        <p className="field">
                                                            <span className="name">Lĩnh vực:Giải trí</span>
                                                            <span className="name">Ca sĩ tự do</span>
                                                        </p>
                                                        <p className="address">
                                                            <i className="fas fa-map-marker-alt"></i>
                                                            {item.fulladdress2}
                                                        </p>
                                                        <p className="price">
                                                            <i className="fas fa-dollar-sign"></i>2.000.000
                                                        </p>
                                                    </div>
                                                    <button className="btn-contact">Liên hệ
                                                        <span className="item"><img src="/images/arrow-right.png"
                                                                                    alt=""/></span>
                                                    </button>
                                                </div>
                                            </div>
                                        }) : <div className="bs-col tn-100-5">
                                            <p className="noti" style={{textAlign: "center"}}>Không có dữ liệu</p>
                                        </div>}
                                    </div>
                                    <div className="paginator" data-aos="fade-up">
                                        {html.length > 1 ?
                                            <ul className="list">
                                                {page > 1 ? <li className="list-item btn__control"
                                                                onClick={() => setPage(page - 1)}>
                                                        Prev
                                                    </li>
                                                    :
                                                    <li className="list-item btn__control" style={{cursor: "no-drop"}}>
                                                        Prev
                                                    </li>
                                                }

                                                {html.map((item, index) => {
                                                    return <li className={`list-item ${page === item ? "active" : ""}`}
                                                               onClick={() => setPage(item)}
                                                               key={index}>
                                                        {item}
                                                    </li>
                                                })}
                                                {page < html.length ?
                                                    <li className="list-item btn__control"
                                                        onClick={() => setPage(page + 1)}>
                                                        Next
                                                    </li>
                                                    :
                                                    <li className="list-item btn__control" style={{cursor: "no-drop"}}>
                                                        Next
                                                    </li>
                                                }


                                            </ul> : ""}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default withTranslate(FindPeople);
