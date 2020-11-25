import React from "react";
import {useTranslate} from 'react-redux-multilingual';
import SectionNewsItem from "./homePageItem/Section-news-item";
import {useSelector} from "react-redux";


const SectionNews = () => {
    const data = useSelector(state => state.homePage);
    const lang = useTranslate();
    return (
        <section className="section section-news">
            <div className="bs-container">
                <div className="bs-row">
                    <div className="bs-col">
                        <div className="module module-news">
                            <p className="text-after">{lang('news_boxShadow', {value: ''})}
                            </p>
                            <div className="module-header">
                                <h2 className="title" data-aos="fade-right">
                                    {lang('title_news_index', {value: ''})}

                                </h2>
                            </div>
                            <div className="module-content" data-aos="fade-up" data-aos-delay="500">
                                <div className="item">
                                        <SectionNewsItem data={data}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}


export default SectionNews;
