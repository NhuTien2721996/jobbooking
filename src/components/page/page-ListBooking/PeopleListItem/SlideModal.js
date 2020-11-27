import React from "react";
import {BsSlide} from "../../../../bases/shared";
import {useSelector} from "react-redux";


const ModalPeoplePageSlide = () => {
    const images = useSelector(state => state.peopleDetail.images);
    const customer = useSelector(state => state.peopleDetail.customer);

    let newImagesArr = images.split(",");
    let date = customer.createddate;
    let newDate = new Date(date)
    let transformDate = newDate.getFullYear() + '/' + (newDate.getMonth() < 10 ? '0' + (newDate.getMonth() + 1) : (newDate.getMonth() + 1)) + '/' + (newDate.getDate() < 10 ? '0' + newDate.getDate() : newDate.getDate())

    return (
        <React.Fragment>
            {newImagesArr.length === 1 && newImagesArr[0] === "" ? "" : <div className="show_image">
                <BsSlide {...slideSettings}>
                    {newImagesArr.map((item, index) => {
                        return <div className="item" key={index}>
                            <div className="images">
                                <img
                                    src={`https://api.jobbooking.com/Temp/Customer_Careers/${transformDate}/${item}`}
                                    alt=""/>
                                <span className="style style-top-right"/>
                                <span className="style style-bottom-right"/>
                                <span className="style style-bottom-left"/>
                            </div>

                        </div>
                    })}

                </BsSlide>
            </div>}

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
    autoplay: true,
    infinite: false,
    draggable: false,
    swipeToSlide: false,
    touchMove: false,
    swipe: false,
    nextArrowSetting: {
        label: <i className="fas fa-angle-left"/>,
        className: "list__control next__btn"
    },
    prevArrowSetting: {
        label: <i className="fas fa-angle-left"/>,
        className: "list__control prev__btn"
    },
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 479,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};


export default ModalPeoplePageSlide;
