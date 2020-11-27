import React, { useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import {useTranslate} from 'react-redux-multilingual';
import {getDate} from "../../../../constants/ConfigConstants";
import {getAllPeoplePageRequest, toggleModal} from "../../../../states/duck/pages/findPeople/action";
import {getPeopleDetailRequest} from "../../../../states/duck/pages/peopleDetail/action";
import {showRating} from "../FindPeople";

const ListPeople = () => {
    const dataPeopleFilter = useSelector(state => state.searchPeople.peopleFilter)
    const dataPeople = useSelector(state => state.searchPeople.people.listPeople);
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
        if (dataPeopleFilter) {
            people = dataPeopleFilter;
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
    }, [dataPeopleFilter, dispatch, page]);

    return (
        <div className="bs-row row-tn-5 row-xs-5 row-sm-10 row-md-15">
            {dataPeople.length > 0 ? dataPeople.map((item, index) => {
                    return <div className="bs-col tn-100-5 xs-100-5 sm-50-10 md-50-15 lg-33-15"
                                key={index}>
                        <div className="item" data-aos="fade-up" data-aos-delay="300"
                             onClick={() => onToggle(item.id, true)}>
                            <div className="avatar">
                                <img
                                    src={`https://api.jobbooking.com/Upload/Customer/${getDate(dataPeople)[index]}/${item.filename1}`}
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
                </div>}
        </div>
    );
}



export default ListPeople;
