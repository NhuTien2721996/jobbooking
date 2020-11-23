import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {getAllDataFooterRequest} from "../../states/duck/layout/footerReducer/actions";
import {transformDateFooter} from "../homePage";

const Footer = () => {
    const dispatch = useDispatch();
    const footer = useSelector(state => state.dataFooter.dataFooter);
    let newFooter = Object.values(footer);
    let footerTitle = [];
    let isSocial = [];
    for (let i = 0; i <= newFooter.length - 1; i++) {
        if (newFooter[i].isfooter === true) {
            footerTitle.push(newFooter[i])
        }
        if (newFooter[i].length > 0) {
            isSocial.push(newFooter[i])
        }
    }
    let socialMedia = isSocial[0];
    let socialService = isSocial.slice(1, (isSocial.length));
    let socialServiceDetail = socialService[0];
    useEffect(() => {
        dispatch(getAllDataFooterRequest())
    }, []);
    return (
        <div id="footer">
            <div className="footer-top" data-aos="fade-down">
                <div className="bs-container">
                    <div className="bs-row row-tn-5 row-xs-5 row-sm-10 row-md-15">
                        {footerTitle.map((item, index) => {
                            return <div className="bs-col tn-100-5 xs-50-5 sm-50-10 md-25-15 lg-25-15" key={index}>
                                {item.filename ? <div className="footer-1">
                                    <div className="logo">
                                        <img
                                            src={`https://api.jobbooking.com/Temp/MenuFooter/${transformDateFooter(newFooter,true)[index]}/${item.filename}`}
                                            alt=""/>
                                    </div>
                                    <p className="content" dangerouslySetInnerHTML={{__html: item.content}}>
                                    </p>
                                    <div className="social-media">
                                        <ul className="list">
                                            {socialMedia.map((icon, index) => {
                                                return <li className="list-item" key={index}>
                                                    {item.id === icon.idmaster ?
                                                        <Link to={icon.link} className="link"
                                                              title={icon.name}><i className={icon.awesomefont}></i></Link> : ""}
                                                </li>
                                            })}

                                        </ul>
                                    </div>
                                </div> : ""}
                                {item.name ? <div className="service">
                                    <span className="title">{item.name}</span>
                                    <ul className="list">
                                        {socialServiceDetail.map((icon, index) => {
                                            return <li className="list-item" key={index}>
                                                {item.id === icon.idmaster ?
                                                    <Link to={icon.link} className="link">{icon.name}</Link> : ""
                                                }
                                            </li>
                                        })}

                                    </ul>
                                </div> : ""}
                            </div>

                        })}
                    </div>
                </div>
            </div>
            <div className="footer-copy" data-aos="fade-up" data-aos-delay="500">
                Bản quyền © 2019 bởi Công ty CP Bytesoft Việt Nam
            </div>
        </div>
    )
}
export default Footer;
