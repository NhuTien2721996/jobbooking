import React from "react";
import {Link} from "react-router-dom";


const HeaderPage = ({newDetail}) => {
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
