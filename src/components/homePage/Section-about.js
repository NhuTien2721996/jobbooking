import React, {useState} from "react";
import SectionAboutItem from "./homePageItem/Section-about-item";
import {useSelector} from "react-redux";
import {filterData} from "../../constants/ConfigConstants";

const ShowTab = (tabItems, keyword) => {
    let html = null;
    const tabItemsClone = [...tabItems];
    if (tabItems.length > 0) {
        const tabItemClone = tabItemsClone.find(item => {
            return item.name === keyword;
        });
        html = tabItemClone.description;
    }
    return html;
};
const SectionAbout = () => {
    const data = useSelector(state => state.homePage);
    let tabData = filterData(data, 1);
    const [tabDefault, setTabDefault] = useState(tabData.length > 0 ? tabData[0].name : "Kết nối thông minh");
    const onHandle = (name) => {
        setTabDefault(name);
    }
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
                                                <SectionAboutItem tabData={tabData}
                                                                  tabDefault={tabDefault}
                                                                  onHandle={onHandle}
                                                />
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
