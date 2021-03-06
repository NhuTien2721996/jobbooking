import React from "react";
import {Link} from "react-router-dom";
import {filterData, transformDate} from "../../../constants/ConfigConstants";
import {useSelector} from "react-redux";


const SideBar = () => {

    return (
        <div className="bs-col lg-25-15 md-33-15 sm-40-15">
            <section className="section section-sidebar" data-aos="fade-up" data-aos-delay="800">
                <div className="module module-sidebar">
                    <div className="module-header">
                        <p className="title">Tin tức</p>
                    </div>
                    <div className="module-content">
                       <ShowContent/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SideBar;


const ShowContent=()=>{
    const data = useSelector(state => state.homePage);
    return(
        <React.Fragment>
            {filterData(data,4).map((item,index)=>{
              return  <div className="item" key={index}>
                    <div className="bs-row row-xs-5">
                        <div className="bs-col xs-40-5">
                            <div className="image">
                                <img src={`https://api.jobbooking.com/Temp/LandingPages/News/${transformDate(filterData(data,4),4)[index]}/${item.filename}`} alt=""/>
                            </div>
                        </div>
                        <div className="bs-col xs-60-5">
                            <div className="text">
                                <Link to={`/tin-tuc/${item.id}`} className="title">{item.name}</Link>
                                <p className="admin"/>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </React.Fragment>
    )
}
