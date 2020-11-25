import React from "react";
import {transformDate} from "../../../constants/ConfigConstants";


const MainNewDetail = ({newDetail}) => {
    return (
        <div className="bs-col lg-75-15 md-66-15 sm-60-15">
            <section className="section section-mainContent" data-aos="fade-up" data-aos-delay="500">
                {newDetail.map((item,index)=>{
                    return <div className="module module-mainContent" key={index}>
                        <div className="item-header">
                            <h5 className="title">{item.name}</h5>
                            <span className="time">
                        <i className="far fa-clock"></i>
                                {transformDate(newDetail,4)}
                    </span>
                        </div>
                        <div className="item-content">
                            <div className="image">
                                <img src={`https://api.jobbooking.com/Temp/LandingPages/News/${transformDate(newDetail,4)}/${item.filename}`} alt=""/>
                            </div>
                                <p className="desc" dangerouslySetInnerHTML={{__html: item.content}} ></p>
                        </div>
                    </div>

                })}
            </section>
        </div>
    );
}

export default MainNewDetail;
