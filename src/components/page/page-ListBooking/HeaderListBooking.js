import React from "react";
import {useTranslate} from 'react-redux-multilingual'


const HeaderListBooking = () => {
    const lang = useTranslate();

    return (
       <section className="section section-category">
           <div className="bs-container">
               <div className="bs-row">
                   <div className="bs-col">
                       <div className="module-category" data-aos="fade-up" data-aos-delay="300">
                           <div className="module-content">
                               <div className="bs-row row-tn-5 row-xs-5 row-sm-10 row-md-15">
                                   <div className="bs-col tn-100-5 xs-50-5 sm-25-10 md-25-15 lg-25-15">
                                       <div className="item">
                                           <div className="image">
                                               <img src="/images/layer-12.png" alt=""/>
                                           </div>
                                           <p className="title">{lang('title_banner_job_search', { value: ''})}</p>
                                       </div>
                                   </div>
                                   <div className="bs-col tn-100-5 xs-50-5 sm-25-10 md-25-15 lg-25-15">
                                       <div className="item item-1">
                                           <div className="image">
                                               <img src="/images/layer-13.png" alt=""/>
                                           </div>
                                           <p className="title">{lang('title_banner_people_search', { value: ''})}</p>
                                       </div>
                                   </div>
                                   <div className="bs-col tn-100-5 xs-50-5 sm-25-10 md-25-15 lg-25-15">
                                       <div className="item item-2">
                                           <div className="image">
                                               <img src="/images/layer-14.png" alt=""/>
                                           </div>
                                           <p className="title">{lang('title_banner_job_done', { value: ''})}</p>
                                       </div>
                                   </div>
                                   <div className="bs-col tn-100-5 xs-50-5 sm-25-10 md-25-15 lg-25-15">
                                       <div className="item item-3">
                                           <div className="image">
                                               <img src="/images/layer-15.png" alt=""/>
                                           </div>
                                           <p className="title">{lang('title_banner_job_received', { value: ''})}</p>
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

export default HeaderListBooking;
