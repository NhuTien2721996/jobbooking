import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";
import {
    getAllCityRequest, getAllDistrictRequest,
    getAllNationsRequest,
    getAllPeoplePageRequest, getAllWardRequest,
    getSelectsRequest
} from "../../../states/duck/pages/findPeople/action";
import {getDate, getDateModal} from "../../homePage";
import {useTranslate, withTranslate} from 'react-redux-multilingual';
import {BsSlide} from "../../../bases/shared";
import {getPeopleDetailRequest} from "../../../states/duck/pages/peopleDetail/action";

const showRating = (number) => {
    let star = [];
    for (let i = 1; i <= number; i++) {
        star.push("fas fa-star start__content--item")
    }
    return star;
}

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
    const [toggleModal, setToggleModal] = useState(false);
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
            top: "65%",
            transform: "translateY(-50%)",
            fontSize: "14px"
        }),
        menu: (provided) => ({
            ...provided,
            zIndex: "10",
        })
    }
    const customStylesNation = {
        container: (provided) => ({
            ...provided,
            marginBottom: "10px",
            pointerEvents: "none"
        }),
        control: (provided) => ({
            ...provided,
            minHeight: "unset",
            height: "35px",
            border: "1px solid #b0d1e4",
            position: "relative",
            paddingRight: "32px"
        }),
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
        {value: '1', label: '1 sao'},
        {value: '2', label: '2 sao'},
        {value: '3', label: '3 sao'},
        {value: '4', label: '4 sao'},
        {value: '5', label: '5 sao'},
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
    let showModal = toggleModal ? "show-modal" : "";
    const showDetail = (id) => {
        let peopleDetail = {
            IDCustomer: id,
            pageIndex: page
        }
        dispatch(getPeopleDetailRequest(peopleDetail))
    }
    const customer = useSelector(state => state.peopleDetail.customer);
    let date = customer.createddate;
    let newDate = new Date(date)
    let transformDate = newDate.getFullYear() + '/' + (newDate.getMonth() < 10 ? '0' + (newDate.getMonth() + 1) : (newDate.getMonth() + 1)) + '/' + (newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate())
    const images = useSelector(state => state.peopleDetail.images);
    let newImagesArr = images.split(",");
    const comments = useSelector(state => state.peopleDetail.comments);
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
                                                    <div className="bs-col tn-100-5 xs-50-5 sm-33-10 md-33-15 lg-20-10">
                                                        <input type="text" className="form-input"
                                                               placeholder="Kỹ năng"/>

                                                    </div>
                                                    <div className="bs-col tn-100-5 xs-50-5 sm-33-10 md-33-15 lg-20-10">
                                                        <Select options={dataSelects}
                                                                placeholder={'Chọn lĩnh vực'}
                                                                styles={customStyles}
                                                                onChange={(val) => setKeyword(val.value)}
                                                        />
                                                    </div>
                                                    <div className="bs-col tn-100-5 xs-50-5 sm-33-10 md-33-15 lg-20-10">

                                                        <Select
                                                            placeholder={'Chọn nghề nghiệp'}
                                                            styles={customStyles}
                                                        />
                                                    </div>
                                                    {toggleSearch ?
                                                        <React.Fragment>
                                                            <div
                                                                className="bs-col tn-100-5 xs-50-5 sm-33-10 md-33-15 lg-20-10">
                                                                <Select options={dataNations}
                                                                        styles={customStylesNation}
                                                                        value={dataNations.filter(item => item.label === "Việt Nam")}
                                                                        disabled
                                                                />
                                                            </div>
                                                            <div
                                                                className="bs-col tn-100-5 xs-50-5 sm-33-10 md-33-15 lg-20-10">
                                                                <Select options={dataCity}
                                                                        placeholder={'Chọn tỉnh thành'}
                                                                        styles={customStyles}
                                                                        onChange={(val) => setCodeCity(val.value)}
                                                                />
                                                            </div>
                                                            <div
                                                                className="bs-col tn-100-5 xs-50-5 sm-33-10 md-33-15 lg-20-10">
                                                                <Select options={dataDistrict}
                                                                        placeholder={'Chọn quận huyện'}
                                                                        styles={customStyles}
                                                                        onChange={(val) => setCodeDistrict(val.value)}
                                                                />
                                                            </div>
                                                            <div
                                                                className="bs-col tn-100-5 xs-50-5 sm-33-10 md-33-15 lg-20-10">
                                                                <Select options={dataWard}
                                                                        placeholder={'Chọn phường xã'}
                                                                        styles={customStyles}
                                                                        onChange={(val) => setCodeWard(val.value)}
                                                                />
                                                            </div>
                                                            <div
                                                                className="bs-col tn-100-5 xs-50-5 sm-33-10 md-33-15 lg-20-10">
                                                                <Select options={rating}
                                                                        placeholder={'Từ'}
                                                                        styles={customStyles}
                                                                        onChange={(val) => setRatingFrom(val.value)}
                                                                />
                                                            </div>
                                                            <div
                                                                className="bs-col tn-100-5 xs-50-5 sm-33-10 md-33-15 lg-20-10">
                                                                <Select options={rating}
                                                                        placeholder={'Đến'}
                                                                        styles={customStyles}
                                                                        onChange={(val) => setRatingTo(val.value)}
                                                                />
                                                            </div>
                                                        </React.Fragment> :
                                                        ""
                                                    }


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
                            {dataPeoplePage.length > 0 ? dataPeoplePage.map((item, index) => {
                                return <div
                                    className="bs-col tn-100-5 xs-100-5 sm-50-10 md-50-15 lg-33-15"
                                    key={index}>
                                    <div className="item" data-aos="fade-up" data-aos-delay="300"
                                         onClick={() => showDetail(item.id, setToggleModal(true))}>
                                        <div className="avatar">
                                            <img
                                                src={`https://api.jobbooking.com/Upload/Customer/${getDate(dataPeoplePage)[index]}/${item.filename1}`}
                                                alt=""/>
                                        </div>
                                        <div className="info">
                                            <p className="name">{item.fullname}</p>
                                            <p className="rating">
                                            <span className="star_content">
                                                {showRating(item.rating).map((item, index) => {
                                                    return <i className={item} key={index}
                                                              style={{color: '#ffc400', fontSize: '14px'}}></i>
                                                })}
                                            </span>
                                                | Tham gia : {item.datecreatestring}
                                            </p>
                                            <p className="field">
                                                <span className="name" style={{width: "100%"}}>{item.fieldname}</span>
                                            </p>
                                            <p className="address">
                                                <i className="fas fa-map-marker-alt"></i>
                                                {item.fulladdress2}
                                            </p>
                                            <p className="address">
                                                <i className="fas fa-map-marker-alt"></i>
                                                Tham gia | Phá hợp
                                                đồng: {item.numofjob1} | {item.numofjob3 ? item.numofjob3 : 0}
                                            </p>
                                            <p className="address">
                                                <i className="fas fa-map-marker-alt"></i>
                                                Hoàn thành | Tỉ
                                                lệ: {item.numofjob4 ? item.numofjob4 : 0} | {item.percenfinishstring ? item.percenfinishstring : "0%"}
                                            </p>
                                            <p className="address skills">
                                                <i className="fas fa-map-marker-alt"></i>
                                                Kỹ năng: <span className="content">
                                             {item.skills}
                                        </span>
                                            </p>
                                            <p className="address skills">
                                                <i className="fas fa-map-marker-alt"></i>
                                                Nghề nghiệp: <span className="content">
                                             {item.careers}
                                        </span>
                                            </p>

                                        </div>
                                        <span className="view">View : {item.views}</span>
                                        <button className="btn-contact">{lang('button_contact', {value: ''})}
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
            </section>
            <div className={`bs-modal modal-top ${showModal}`}>
                <div className="modal-frame">
                    <div className="modal__backdrop"></div>
                    <div className={`content-modal ${showModal}`}>
                        <span title="close" className="close__modal" onClick={() => setToggleModal(false)}>X</span>
                        <div className="body-modal">
                            <div className="head">
                                <p className="title">{customer.fullname}</p>
                            </div>
                            <div className="content">
                                {newImagesArr.length === 1 && newImagesArr[0] === "" ? "" : <div className="show_image">
                                    <BsSlide {...slideSettings}>
                                        {newImagesArr.map((item, index) => {
                                            return <div className="item" key={index}>
                                                <div className="images">
                                                    <img
                                                        src={`https://api.jobbooking.com/Temp/Customer_Careers/${transformDate}/${item}`}
                                                        alt=""/>
                                                        <span className="style style-top-right"></span>
                                                        <span className="style style-bottom-right"></span>
                                                        <span className="style style-bottom-left"></span>
                                                </div>

                                            </div>
                                        })}

                                    </BsSlide>
                                </div>}
                                <div className="show_info">
                                    <div className="bs-row row-md-10">
                                        <div className="bs-col tn-100-5 xs-100-5 sm-50-5 md-50-10 lg-50-10">
                                            <div className="item">
                                                <div className="head">
                                                    <p className="title">thông tin cơ bản</p>
                                                </div>
                                                <div className="content">
                                                    <div className="bs-row row-md-5">
                                                        <div className="bs-col tn-50-5 xs-25-5 sm-50-5 md-25-5 lg-25-5">
                                                            <p className="text">Chiều cao</p>
                                                        </div>
                                                        <div className="bs-col tn-50-5 xs-25-5 sm-50-5 md-25-5 lg-25-5">
                                                            <p className="text">175</p>
                                                        </div>
                                                        <div className="bs-col tn-50-5 xs-25-5 sm-50-5 md-25-5 lg-25-5">
                                                            <p className="text">Hôn hân</p>
                                                        </div>
                                                        <div className="bs-col tn-50-5 xs-25-5 sm-50-5 md-25-5 lg-25-5">
                                                            <p className="text">Độc thân</p>
                                                        </div>
                                                        <div className="bs-col tn-50-5 xs-25-5 sm-50-5 md-25-5 lg-25-5">
                                                            <p className="text">Số đo 3 vòng</p>
                                                        </div>
                                                        <div
                                                            className="bs-col tn-50-5 xs-25-5 xs-25-5 sm-50-5 md-25-5 lg-25-5">
                                                            <p className="text">90-60-90</p>
                                                        </div>
                                                        <div className="bs-col tn-50-5 xs-25-5 sm-50-5 md-25-5 lg-25-5">
                                                            <p className="text">Thông tin</p>
                                                        </div>
                                                        <div className="bs-col tn-50-5 xs-25-5 sm-50-5 md-25-5 lg-25-5">
                                                            <p className="text">{customer.statusname}</p>
                                                        </div>
                                                        <div className="bs-col tn-50-5 xs-25-5 sm-50-5 md-25-5 lg-25-5">
                                                            <p className="text">Học vấn</p>
                                                        </div>
                                                        <div className="bs-col tn-50-5 xs-25-5 sm-50-5 md-25-5 lg-25-5">
                                                            <p className="text">Trung học</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bs-col tn-100-5 xs-100-5 sm-50-5 md-50-10 lg-50-10">
                                            <div className="item">
                                                <div className="head">
                                                    <p className="title">thống kê</p>
                                                    <p className="star">
                                                    <span className="show_star">
                                                      <i className="fas fa-star"></i>
                                                      <i className="fas fa-star"></i>
                                                      <i className="fas fa-star"></i>
                                                      <i className="fas fa-star"></i>
                                                      <i className="fas fa-star"></i>
                                                    </span>
                                                    </p>
                                                </div>
                                                <div className="content">
                                                    <div className="bs-row row-md-5">
                                                        <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                            <p className="text">Số việc đã nhận</p>
                                                        </div>
                                                        <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                            <p className="text">{customer.numofjob1!==null? customer.numofjob1:"0"}</p>
                                                        </div>
                                                        <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                            <p className="text">Điểm uy tín</p>
                                                        </div>
                                                        <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                            <p className="text">980/1000</p>
                                                        </div>
                                                        <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                            <p className="text">Danh hiệu</p>
                                                        </div>
                                                        <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                            <p className="text">Kim cương</p>
                                                        </div>
                                                        <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                            <p className="text">Đánh giá ngoại hình</p>
                                                        </div>
                                                        <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                            <p className="text">8/10</p>
                                                        </div>
                                                        <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                            <p className="text">Phá hợp đồng</p>
                                                        </div>
                                                        <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                            <p className="text">{customer.numofjob3!==null? customer.numofjob3:"0"}</p>
                                                        </div>
                                                        <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                            <p className="text">Tiếp nhận công việc</p>
                                                        </div>
                                                        <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                            <p className="text">7/10</p>
                                                        </div>
                                                        <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                            <p className="text">Trạng thái</p>
                                                        </div>
                                                        <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                            <p className="text">Đang online</p>
                                                        </div>
                                                        <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                            <p className="text">Giao tiếp</p>
                                                        </div>
                                                        <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                            <p className="text">9/10</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="show_comment">
                                    <div className="head">
                                        <p className="title">bình luận đối tác</p>
                                    </div>
                                    <div className="content">
                                        {comments.map((item, index) => {
                                            return <div className="item" key={index}>
                                                <div className="avatar">
                                                    <img
                                                        src={`https://api.jobbooking.com/Upload/Customer/${getDateModal(comments)[index]}/${item.filename1}`}
                                                        alt=""/>
                                                </div>
                                                <div className="item_text">
                                                    <p className="star">
                                                    <span className="show_star">
                                                        {showRating(item.rating).map((item, index) => {
                                                            return <i className={item} key={index}></i>
                                                        })}
                                                    </span>
                                                    </p>
                                                    <p className="comment">
                                                        {item.comment}
                                                    </p>
                                                    <p className="name">{item.commentbyname}</p>
                                                </div>
                                            </div>

                                        })}
                                    </div>
                                    <div className="button">
                                        <button className="btn-commom">Xem thêm</button>
                                    </div>
                                </div>
                                <div className="show-mess">
                                    <div className="wrapper_show_mess">
                                        <div className="show-mess_content">
                                            <div className="item_mess">
                                                <div className="avatar">
                                                    <img src="/images/layer-16.png" alt=""/>
                                                </div>
                                                <div className="content_mess">
                                                    <p className="name">Trang , <span className="time">2:05pm</span></p>

                                                    <p className="contetn_detail">
                                                        Up unpacked friendly ecstatic so possible humoured do. Ample end
                                                        might folly quiet one set spoke her. We no am former valley
                                                        assure.
                                                        Four need spot ye said we find mile.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="item_mess mess_send">
                                                <div className="content_mess">
                                                    <p className="name">Tu?n , <span className="time">2:05pm</span></p>

                                                    <p className="contetn_detail">
                                                        Up unpacked friendly ecstatic so possible humoured do. Ample end
                                                        might folly quiet one set spoke her. We no am former valley
                                                        assure.
                                                        Four need spot ye said we find mile.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="item_mess">
                                                <div className="avatar">
                                                    <img src="/images/layer-16.png" alt=""/>
                                                </div>
                                                <div className="content_mess">
                                                    <p className="name">Trang , <span className="time">2:05pm</span></p>
                                                    <p className="contetn_detail">
                                                        Up unpacked friendly ecstatic so possible humoured do. Ample end
                                                        might folly quiet one set spoke her. We no am former valley
                                                        assure.
                                                        Four need spot ye said we find mile.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-input">
                                            <input type="text" className="form-control" placeholder="Nhập nội dung..."/>
                                            <button className="btn-commom send-mess">Gửi đi</button>
                                            <button className="btn-commom send-mess respon" style={{display:'none'}}>
                                                <i className="fas fa-paper-plane"></i>
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="button">
                                <button className="btn-commom">Mời tham gia công việc</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
var slideSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    centerPadding: "0",
    dots: false,
    fade: false,
    autoplay: true,
    infinite: false,
    draggable: false,
    swipeToSlide: false,
    touchMove: false,
    swipe: false,
    nextArrowSetting: {
        label: <i className="fas fa-angle-left"></i>,
        className: "list__control next__btn"
    },
    prevArrowSetting: {
        label: <i className="fas fa-angle-left"></i>,
        className: "list__control prev__btn"
    },
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 479,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};


export default withTranslate(FindPeople);
