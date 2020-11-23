import React, { useState} from "react";
import {filterData, transformDate} from "./index";

const ShowTab = (tabItems, keyword) => {
    var html = null;
    const tabItemsClone = [...tabItems];
    if (tabItems.length > 0) {
        const tabItemClone = tabItemsClone.find(item => {
            return item.name === keyword;
        });
        html = tabItemClone.description;
    }
    return html;
};
const SectionAbout = ({data}) => {
    let tabData = filterData(data,1);
    const [tabDefault, setTabDefault] = useState(tabData.length>0? tabData[0].name:"Kết nối thông minh");
    return (
        <section className="section section-about">
            <div className="bs-container">
                <div className="bs-row">
                    <div className="bs-col">
                        <div className="module module-about" data-aos="fade-up">
                            <div className="module-content">
                                <div className="bs-tab">
                                    <div className="tab-container">
                                        <div className="tab-control">
                                            <ul className="control-list">
                                                {tabData.map((item, index) => {
                                                    return (
                                                        <li
                                                            key={index}
                                                            className={`control-list__item ${
                                                                tabDefault === item.name ? "active" : ""
                                                            }`}
                                                            onClick={() => setTabDefault(item.name)}
                                                        >
                                                            <span className="img">
                                                                <img src={`https://api.jobbooking.com//Temp/LandingPages/Feature/${transformDate(data,1)[index]}/${item.filename}`} className="icon" alt=""/>
                                                                <img src={`https://api.jobbooking.com//Temp/LandingPages/Feature/${transformDate(data,1)[index]}/${item.filename2}`} className="icon-hover"
                                                                     alt=""/>
                                                            </span>
                                                            <span className="name">{item.name}</span>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                        <div className="tab-content">
                                            <div className="tab-item">
                                                <p className="content">
                                                    {ShowTab(tabData, tabDefault)}
                                                </p>
                                            </div>
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
export default SectionAbout;
