import React from "react";
import {showRating} from "../FindPeople";
import {useTranslate} from "react-redux-multilingual";
import {useSelector} from "react-redux";
import {getDate} from "../../../../constants/ConfigConstants";



const ListPeople = ({showDetail}) => {
    const dataPeoplePage = useSelector(state => state.searchPeople.people.listPeople);
    const lang = useTranslate();
    const onToggle=(id,status)=>{
        showDetail(id,status)
    }
    return (
        <React.Fragment>
            {dataPeoplePage.length > 0 ? dataPeoplePage.map((item, index) => {
                return <div
                    className="bs-col tn-100-5 xs-100-5 sm-50-10 md-50-15 lg-33-15"
                    key={index}>
                    <div className="item" data-aos="fade-up" data-aos-delay="300"
                         onClick={() => onToggle(item.id, true)}>
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
        </React.Fragment>
    );
}


export default ListPeople;
