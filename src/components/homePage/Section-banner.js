import React from "react";
import {useSelector} from "react-redux";
import {filterData} from "../../constants/ConfigConstants";

const SectionBanner = () => {
    const data = useSelector(state => state.homePage);
    return (
        <section className="section section-banner">
            <div className="bs-container">
                <div className="bs-row">
                    <div className="bs-col">
                        <div className="module module-banner">
                            <div className="module-content">
                                <div className="bs-row row-tn-5 row-xs-5 row-sm-10 row-md-15">
                                    <div className="bs-col tn-100-5 xs-100-5 sm-100-10 md-50-15 lg-50-15">

                                        {filterData(data,5).map((item,index)=>{
                                            return SectionBannerItem(item,index)
                                        })}
                                    </div>
                                    <div className="bs-col tn-100-5 xs-100-5 sm-100-10 md-50-15 lg-50-15">
                                        <div className="item-icon" data-aos="fade-left">
                                            <img src="/images/image-banner.png" alt=""/>
                                        </div>
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

export default SectionBanner;


const SectionBannerItem = (item,index) => {

    return (
        <div className="item-text " data-aos="fade-right" key={index}>
            <h1 className="title">
                {item.name}
            </h1>

            <p className="desc" dangerouslySetInnerHTML={{__html: item.content}} />
            <div className="button" data-aos="fade-right" data-aos-delay="500">
                <span className="text">JOINOW</span>
                <div className="arrow">
                    <img src="/images/icon_arrow.png" alt=""/>
                </div>
            </div>
        </div>
    );
}
