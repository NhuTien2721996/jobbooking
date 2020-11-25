import React from "react";
import {useTranslate} from 'react-redux-multilingual';
import SectionBenefitItem from "./homePageItem/Section-benefit-item";
import { useSelector} from "react-redux";

const SectionBenefit = () => {
    const lang = useTranslate();
    const data = useSelector(state => state.homePage);
    return (
        <section className="section section-benefit">
            <div className="bs-container">
                <div className="bs-row">
                    <div className="bs-col">
                        <div className="module module-benefit">
                            <p className="text-after" data-aos="fade-down"
                               data-aos-delay="500">{lang('benefit_boxShadow', {value: ''})}
                            </p>
                            <div className="module-header">
                                <h2 className="title" data-aos="fade-right">
                                    {lang('title_benefit_index', {value: ''})}
                                </h2>
                            </div>
                            <div className="module-content" data-aos="fade-up" data-aos-delay="500">
                                <div className="main-content">
                                    <img src="/images/main-content.png" alt="" className="image-main"/>
                                    <SectionBenefitItem data={data}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default SectionBenefit;
