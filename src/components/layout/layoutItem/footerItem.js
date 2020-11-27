import React from 'react';
import {transformDateFooter} from "../../../constants/ConfigConstants";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";


const FooterItem = () => {
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
    return (
        <React.Fragment>
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
                                                  title={icon.name}><i className={icon.awesomefont}/></Link> : ""}
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

        </React.Fragment>
    )
}
export default FooterItem;
