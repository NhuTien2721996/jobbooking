import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getAllDataFooterRequest} from "../../states/duck/layout/footerReducer/actions";
import FooterItem from "./layoutItem/footerItem";

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
                        <FooterItem footerTitle={footerTitle}
                                    socialMedia={socialMedia}
                                    socialServiceDetail={socialServiceDetail}
                                    newFooter={newFooter}
                        />
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
