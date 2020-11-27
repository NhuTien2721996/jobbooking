import React from "react";
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {filterData} from "../../../constants/ConfigConstants";


const HeaderPage = () => {
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
        <section className="section section-headerPage" data-aos="fade-up">
            <div className="bs-container">
                <div className="bs-row">
                    <div className="bs-col">
                        <div className="module module-headerPage">
                            <div className="module-header">
                                <h3 className="title">tin tức</h3>
                            </div>
                            <div className="module-content">
                                <ul className="header-list">
                                    <li className="header-list__item">
                                        <Link to="/" className="header-list__link">
                                            Home
                                        </Link>
                                    </li>

                                    <li className="header-list__item">
                                        <Link to="#" className="header-list__link">
                                            Tin tức
                                        </Link>
                                    </li>
                                    {newDetail.map((item,index)=>{
                                      return  <li className="header-list__item" key={index}>
                                            <Link to="#" className="header-list__link">
                                                {item.name}
                                            </Link>
                                        </li>
                                    })}

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeaderPage;
