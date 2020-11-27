import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import {
    getAllCityRequest, getAllDistrictRequest, getAllKeyword, getAllKeywordRequest,
    getAllNationsRequest,
    getAllPeoplePageRequest, getAllWardRequest, getSelectsRequest, toggleFormSearch, toggleModal
} from "../../../states/duck/pages/findPeople/action";
import {useTranslate, withTranslate} from 'react-redux-multilingual';
import Paginator from "./PeopleListItem/paginator";
import Select from "react-select";
import ModalPeoplePageSlide from "./PeopleListItem/SlideModal";
import {getPeopleDetailRequest} from "../../../states/duck/pages/peopleDetail/action";
import {getDate, getDateModal} from "../../../constants/ConfigConstants";

export const showRating = (number) => {
    let star = [];
    for (let i = 1; i <= number; i++) {
        star.push("fas fa-star start__content--item")
    }
    return star;
}

const FindPeople = () => {
    const lang = useTranslate();
    const page = useSelector(state => state.searchPeople.page);
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
                                                <FormSelect page={page}/>
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
                        <ListPeople/>
                        <Paginator/>
                    </div>
                </div>
            </section>
            <ModalPeoplePage/>
        </React.Fragment>
    );
}


export default withTranslate(FindPeople);


//Form search------------
const FormSelect = () => {
    const dispatch = useDispatch();
    const lang = useTranslate();
    const dataSelects = useSelector(state => state.searchPeople.selects);
    const dataNations = useSelector(state => state.searchPeople.listNation);
    const dataCity = useSelector(state => state.searchPeople.listCity);
    const dataDistrict = useSelector(state => state.searchPeople.listDistrict);
    const dataWard = useSelector(state => state.searchPeople.listWard);
    const page = useSelector(state => state.searchPeople.page);
    const toggleSearch = useSelector(state => state.searchPeople.toggleFormSearch);
    const [keyword, setKeyword] = useState("");
    const [codeCity, setCodeCity] = useState("");
    const [codeDistrict, setCodeDistrict] = useState('');
    const [codeWard, setCodeWard] = useState('');
    const [ratingFrom, setRatingFrom] = useState('');
    const [ratingTo, setRatingTo] = useState('');

    const rating = [
        {value: '1', label: '1 sao'},
        {value: '2', label: '2 sao'},
        {value: '3', label: '3 sao'},
        {value: '4', label: '4 sao'},
        {value: '5', label: '5 sao'},
    ]

    const onSearch = () => {
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
    const getFormSearch = (status) => {
        dispatch(toggleFormSearch(status))
        dispatch(getAllNationsRequest());
        dispatch(getAllCityRequest());

    }
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
    useEffect(() => {
        if (keyword) {
            dispatch(getAllKeywordRequest(keyword))
        }
    }, [dispatch, keyword]);

    useEffect(() => {
        if (codeCity) {
            dispatch(getAllDistrictRequest(codeCity))
        }
    }, [codeCity, dispatch]);
    useEffect(() => {
        if (codeDistrict) {
            dispatch(getAllWardRequest(codeDistrict))
        }
    }, [codeDistrict, dispatch]);
    useEffect(() => {
        dispatch(getSelectsRequest())

    }, [dispatch]);
    return (
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
                            onClick={onSearch}
                    >{lang('search', {value: ''})}
                    </button>
                    <span className="show_search"
                          onClick={() => getFormSearch(!toggleSearch)}>{toggleSearch ? lang('hide_search_detail', {value: ''}) : lang('search_detail', {value: ''})}</span>
                </div>

            </div>
        </div>
    )
        ;
}

//Modal------------
const ModalPeoplePage = () => {
    const dispatch = useDispatch();
    const customer = useSelector(state => state.peopleDetail.customer);
    const statusModal = useSelector(state => state.searchPeople.toggleModal);
    let showModal = statusModal ? "show-modal" : "";
    const onHandleChange = (value) => {
        dispatch(toggleModal(value))
    }
    useEffect(() => {
        if (statusModal) {
            document.body.classList.add('active-modal');
        } else {
            if (document.getElementsByClassName("show-modal").length === 0) {
                document.body.classList.remove('active-modal');
            }
        }
    }, [statusModal])
    return (
        <div className={`bs-modal modal-top ${showModal}`}>
            <div className="modal-frame">
                <div className="modal__backdrop"/>
                <div className={`content-modal ${showModal}`}>
                    <span title="close" className="close__modal" onClick={() => onHandleChange(false)}>X</span>
                    <div className="body-modal">
                        <div className="head">
                            <p className="title">{customer.fullname}</p>
                        </div>
                        <div className="content">
                            <ModalPeoplePageSlide/>
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
                                                      <i className="fas fa-star"/>
                                                      <i className="fas fa-star"/>
                                                      <i className="fas fa-star"/>
                                                      <i className="fas fa-star"/>
                                                      <i className="fas fa-star"/>
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="content">
                                                <div className="bs-row row-md-5">
                                                    <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                        <p className="text">Số việc đã nhận</p>
                                                    </div>
                                                    <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                        <p className="text">{customer.numofjob1 !== null ? customer.numofjob1 : "0"}</p>
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
                                                        <p className="text">{customer.numofjob3 !== null ? customer.numofjob3 : "0"}</p>
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
                                <ModalPeoplePageComments/>
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
                                        <button className="btn-commom send-mess respon" style={{display: 'none'}}>
                                            <i className="fas fa-paper-plane"/>
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

    );
}

//Get all people

const ListPeople = () => {
    const dataPeoplePage = useSelector(state => state.searchPeople.people.listPeople);
    const page = useSelector(state => state.searchPeople.page);
    const lang = useTranslate();
    const dispatch = useDispatch();
    const onToggle = (id, status) => {
        dispatch(toggleModal(status));

        let peopleDetail = {
            IDCustomer: id,
            pageIndex: page
        }
        dispatch(getPeopleDetailRequest(peopleDetail))
    }
    useEffect(() => {
        let people;
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
        dispatch(getAllPeoplePageRequest(people))
    }, [dispatch, page]);

    return (
        <div className="bs-row row-tn-5 row-xs-5 row-sm-10 row-md-15">
            {dataPeoplePage.length > 0 ? dataPeoplePage.map((item, index) => {
                    return <div
                        className="bs-col tn-100-5 xs-100-5 sm-50-10 md-50-15 lg-33-15"
                        key={index}>
                        <div className="item" data-aos="fade-up" data-aos-delay="300"
                             onClick={() => onToggle(item.id, true)}>
                            <div className="avatar">
                                <img
                                    src={`https://api.jobbooking.com/Upload/Customer/${getDate(dataPeoplePage)[index]}/${item.filename1}`}
                                    alt={item.fullname}/>
                            </div>
                            <div className="info">
                                <p className="name">{item.fullname}</p>
                                <p className="rating">
                                            <span className="star_content">
                                                {showRating(item.rating).map((item, index) => {
                                                    return <i className={item} key={index}
                                                              style={{color: '#ffc400', fontSize: '14px'}}>

                                                    </i>
                                                })}
                                            </span>
                                    | Tham gia : {item.datecreatestring}
                                </p>
                                <p className="field">
                                    <span className="name" style={{width: "100%"}}>{item.fieldname}</span>
                                </p>
                                <p className="address">
                                    <i className="fas fa-map-marker-alt">

                                    </i>
                                    {item.fulladdress2}
                                </p>
                                <p className="address">
                                    <i className="fas fa-map-marker-alt">

                                    </i>
                                    Tham gia | Phá hợp
                                    đồng: {item.numofjob1} | {item.numofjob3 ? item.numofjob3 : 0}
                                </p>
                                <p className="address">
                                    <i className="fas fa-map-marker-alt">

                                    </i>
                                    Hoàn thành | Tỉ
                                    lệ: {item.numofjob4 ? item.numofjob4 : 0} | {item.percenfinishstring ? item.percenfinishstring : "0%"}
                                </p>
                                <p className="address skills">
                                    <i className="fas fa-map-marker-alt">

                                    </i>
                                    Kỹ năng: <span className="content">
                                             {item.skills}
                                        </span>
                                </p>
                                <p className="address skills">
                                    <i className="fas fa-map-marker-alt">

                                    </i>
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
                })
                : <div className="bs-col tn-100-5">
                    <p className="noti" style={{textAlign: "center"}}>Không có dữ liệu</p>
                    {/*<div className="noti-icon" style={{textAlign: "center"}}>*/}
                    {/*    <img src="https://jobbooking.com/static/images/loading.gif" alt=""*/}
                    {/*         style={{transitionDelay: "2000"}}/>*/}

                    {/*</div>*/}
                </div>}
        </div>
    );
}


//Comment
const ModalPeoplePageComments = () => {
    const comments = useSelector(state => state.peopleDetail.comments);
    return (
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
                                                            return <i className={item} key={index}/>
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

    );
}
