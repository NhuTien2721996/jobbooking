import React from "react";
import {Link} from "react-router-dom";


const SectionDownload = () => {

    return (
        <section className="section section-download">
            <div className="bs-container">
                <div className="bs-row">
                    <div className="bs-col">
                        <div className="module module-download">
                            <p className="text-after" data-aos="fade-up" data-aos-delay="1000">DOWNLOAD APP</p>

                            <div className="bs-row row-tn-5 row-xs-5 row-sm-10 row-md-15">
                                <div className="bs-col tn-100-5 tn-order-last xs-100-5 xs-order-last sm-100-10 sm-order-last md-50-15 lg-50-15">
                                    <div className="item-icon"  data-aos="fade-right">
                                        <img src="/images/layer-5.png" alt=""/>
                                    </div>
                                </div>
                                <div className="bs-col tn-100-5 xs-100-5 sm-100-10 md-50-15 lg-50-15">
                                    <div className="item-text" data-aos="fade-left" data-aos-delay="500">
                                        <h2 className="title">DOWNLOAD APP</h2>
                                        <p className="desc" data-aos="fade-left" data-aos-delay="700">
                                            Resources exquisite set arranging moonlight sem him household had. Months
                                            had too ham cousin remove far spirit. She procuring the why performed
                                            continual improving.
                                        </p>
                                        <div className="list-link" data-aos="fade-left" data-aos-delay="900">
                                            <div className="wrapper">
                                                <Link to="#" className="link">
                                                    <img src="/images/icon-apple.png" alt=""/>
                                                </Link>
                                            </div>
                                           <div className="wrapper chplay">
                                               <Link to="#" className="link">
                                                   <img src="/images/icon-chplay.png" alt=""/>
                                               </Link>
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

export default SectionDownload;
