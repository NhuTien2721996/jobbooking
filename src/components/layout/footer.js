import React, {useEffect} from 'react';
import { useDispatch} from "react-redux";
import {getAllDataFooterRequest} from "../../states/duck/layout/footerReducer/actions";
import FooterItem from "./layoutItem/footerItem";

const Footer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllDataFooterRequest())
    }, [dispatch]);
    return (
        <div id="footer">
            <div className="footer-top" data-aos="fade-down">
                <div className="bs-container">
                    <div className="bs-row row-tn-5 row-xs-5 row-sm-10 row-md-15">
                        <FooterItem/>
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
