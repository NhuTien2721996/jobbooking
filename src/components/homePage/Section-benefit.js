import React from "react";
import {filterData, transformDate} from "./index";
import {useTranslate} from 'react-redux-multilingual';

const SectionBenefit = ({data}) => {
    const lang=useTranslate();
    return (
        <section className="section section-benefit">
            <div className="bs-container">
                <div className="bs-row">
                    <div className="bs-col">
                        <div className="module module-benefit">
                            <p className="text-after" data-aos="fade-down" data-aos-delay="500">{lang('benefit_boxShadow',{value:''})}
                            </p>
                            <div className="module-header">
                                <h2 className="title"  data-aos="fade-right">
                                    {lang('title_benefit_index',{value:''})}
                                </h2>
                            </div>
                            <div className="module-content" data-aos="fade-up" data-aos-delay="500">
                                <div className="main-content">
                                    <img src="/images/main-content.png" alt="" className="image-main"/>
                                    {filterData(data,2).map((item,index)=>{
                                        return <div className={`item item-${index+1}`} data-aos="fade-up" data-aos-delay="1000" key={index}>
                                            <div className="item-content">
                                                <div className="layer-before">
                                                    <img src={`https://api.jobbooking.com/Temp/LandingPages/Benefit/${transformDate(data,2)[index]}/${item.filename}`} alt=""/>
                                                    <p className="title">
                                                        {item.name}
                                                    </p>
                                                </div>
                                                <div className="layer-after">
                                                    <h5 className="header">
                                                        {item.name}
                                                    </h5>
                                                    <p className="content">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                            <span className="line">
                                            <img src={`/images/line-${index+1}.png`} alt=""/>
                                        </span>

                                        </div>

                                    })}

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
