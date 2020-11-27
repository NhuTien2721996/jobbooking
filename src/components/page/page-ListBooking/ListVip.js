import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {BsSlide} from "../../../bases/shared";
import {getTopPeopleRequest} from "../../../states/duck/pages/findPeople/action";


const ListVip = () => {
    const dispatch = useDispatch();
    const topPeople = useSelector(state => state.searchPeople.peopleTop);
    useEffect(() => {
        let topPeople = {
            numberPage: 6,
            page: 1,
            pageIndex: 1,
            pageSize: 6,
        }
        dispatch(getTopPeopleRequest(topPeople))
    }, [dispatch]);
    return (
        <React.Fragment>
            {topPeople.lenght > 0 ?
            <section className="section section-vip">
                <div className="image-after">
                    <img src="/images/image-after.png" alt=""/>
                </div>
                <div className="bs-container">
                    <div className="bs-row">
                        <div className="bs-col">
                            <div className="module-vip">
                                <div className="module-header">
                                    <h2 className="title" data-aos="fade-left" data-aos-delay="500">
                                        DANH SÁCH VIP
                                    </h2>
                                </div>
                                <div className="module-content" data-aos="fade-up" data-aos-delay="600">
                                    <BsSlide {...slideSettings}>
                                        <Item/>
                                        <Item/>
                                        <Item/>
                                        <Item/>
                                        <Item/>
                                    </BsSlide>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>:""}

        </React.Fragment>

    );
}

let slideSettings = {
    slidesToShow: 4,
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
                slidesToShow: 4,
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

export default ListVip;

const Item = () => {
    return (
        <div className="item">
            <div className="item-content">
                <div className="image">
                    <img src="/images/layer-16.png" alt=""/>
                    <div className="item-text">
                        <button className="btn btn_commom">LIÊN HỆ</button>
                        <p className="name">TRƯƠNG LƯƠNG DĨNH</p>
                        <p className="industry">Nghề nghiệp: Ca sĩ</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
