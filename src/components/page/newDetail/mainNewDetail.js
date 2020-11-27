import React from "react";
import {filterData, transformDate} from "../../../constants/ConfigConstants";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";


const MainNewDetail = () => {

    return (
        <div className="bs-col lg-75-15 md-66-15 sm-60-15">
            <section className="section section-mainContent" data-aos="fade-up" data-aos-delay="500">
                <ShowContent/>
            </section>
        </div>
    );
}

export default MainNewDetail;


const ShowContent=()=>{
    const data = useSelector(state => state.homePage);
    const match = useParams();
    let newDetail = [];
    let newDetailArr = filterData(data, 4);
    for (let i = 0; i <= newDetailArr.length - 1; i++) {
        if (match && newDetailArr[i].id === match.id) {
            newDetail.push(newDetailArr[i])
        }
    }
    return (
        <React.Fragment>
            {newDetail.map((item,index)=>{
             return  <div className="module module-mainContent" key={index}>
                    <div className="item-header">
                        <h5 className="title">{item.name}</h5>
                        <span className="time">
                        <i className="far fa-clock"/>
                            {transformDate(newDetail,4)}
                    </span>
                    </div>
                    <div className="item-content">
                        <div className="image">
                            <img src={`https://api.jobbooking.com/Temp/LandingPages/News/${transformDate(newDetail,4)}/${item.filename}`} alt=""/>
                        </div>
                        <p className="desc" dangerouslySetInnerHTML={{__html: item.content}} />
                    </div>
                </div>
            })}

        </React.Fragment>

    )
}
