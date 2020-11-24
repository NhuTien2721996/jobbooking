import React from "react";
import {BsSlide} from "../../bases/shared";
import {filterData, transformDate} from "./index";
import {Link} from "react-router-dom";
import {useTranslate} from 'react-redux-multilingual';


const SectionNews = ({data}) => {
    const lang=useTranslate();

    return (
        <section className="section section-news">
            <div className="bs-container">
                <div className="bs-row">
                    <div className="bs-col">
                        <div className="module module-news">
                            <p className="text-after">{lang('news_boxShadow',{value:''})}
                            </p>
                            <div className="module-header">
                                <h2 className="title" data-aos="fade-right">
                                    {lang('title_news_index',{value:''})}

                                </h2>
                            </div>
                            <div className="module-content" data-aos="fade-up" data-aos-delay="500">
                                <div className="item">
                                    <BsSlide {...slideSettings}>

                                        {filterData(data, 4).map((item, index) => {
                                            return <div className="content" key={index}>
                                                <div className="wrapper">
                                                    <Link to={`/tin-tuc/${item.id}`} className="link">
                                                        <img
                                                            src={`https://api.jobbooking.com/Temp/LandingPages/News/${transformDate(data, 4)[index]}/${item.filename}`}
                                                            alt=""/>
                                                        <div className="content-hover">
                                                            <div className="content-text">
                                                          <span className="time">
                                                           <i className="far fa-clock"></i>
                                                              {transformDate(data, 4)[index]}
                                                           </span>
                                                                <h5 className="tile">
                                                                    {item.name}
                                                                </h5>
                                                                <p className="desc">
                                                                    {item.description}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                </div>
                                            </div>
                                        })}
                                    </BsSlide>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
var slideSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    centerPadding: "0",
    dots: false,
    fade: false,
    autoplay: false,
    infinite: false,
    draggable: false,
    swipeToSlide: false,
    touchMove: false,
    swipe: false,
    nextArrowSetting: {
        label: <img src="/images/arrow-right.png" alt=""/>,
        className: "list__control next__btn"
    },
    prevArrowSetting: {
        label: <img src="/images/arrow-left.png" alt=""/>,

        className: "list__control prev__btn"
    },
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 479,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};


export default SectionNews;
