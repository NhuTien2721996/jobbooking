import React from "react";
import SectionBannerItem from "./homePageItem/Section-banner-item";
import {useSelector} from "react-redux";

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
                                        <SectionBannerItem data={data} />
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
