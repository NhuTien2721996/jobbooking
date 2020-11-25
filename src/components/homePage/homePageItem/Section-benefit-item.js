import React from "react";
import {filterData, transformDate} from "../../../constants/ConfigConstants";

const SectionBenefitItem = ({data}) => {
    return (
        <React.Fragment>
            {filterData(data, 2).map((item, index) => {
                return <div className={`item item-${index + 1}`} data-aos="fade-up" data-aos-delay="1000" key={index}>
                    <div className="item-content">
                        <div className="layer-before">
                            <img
                                src={`https://api.jobbooking.com/Temp/LandingPages/Benefit/${transformDate(data, 2)[index]}/${item.filename}`}
                                alt=""/>
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
                                            <img src={`/images/line-${index + 1}.png`} alt=""/>
                                        </span>

                </div>

            })}
        </React.Fragment>
    );
}

export default SectionBenefitItem;
