/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from "react";
import {Route, Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {getAllRoutesMenuRequest} from "../../states/duck/layout/headerReducer/actions";
import {IntlActions} from "react-redux-multilingual";

const Header = ({location}) => {
    const dispatch = useDispatch();
    const routes = useSelector(state => state.menus.routes);
    const lang=useSelector(state=>state.Intl.locale);
    const changeLang=(lang)=>{
        dispatch(IntlActions.setLocale(lang));
    }

    let menus = [];
    for (let i = 0; i <= routes.length - 1; i++) {
        if (routes[i].isfooter === false) {
            menus.push(routes[i])
        }
    }
    menus.sort(function (a, b) {
        return a.orderno - b.orderno
    });
    useEffect(() => {
        dispatch(getAllRoutesMenuRequest())
    }, [dispatch]);
        // $(document).ready(function () {
        //     $(".menu-list__link").click(function () {
        //         $(".menu-list__link").removeClass('active');
        //         $(this).addClass('active');
        //     });
        //     $(".menu-list").find(".menu-list__item:first-child").children().addClass('active');
        // });
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div id="header">
            <div className={`header-nav ${location.pathname !== "/" ? "header-page" : ""}`}>
                <div className="bs-container">
                    <div className="nav-content clearfix">
                        <div className="logo" data-aos="fade-down">
                            <Link to="/">
                                <img src="/images/logo.png" alt=""/>
                            </Link>
                        </div>
                        <div className="nav">
              <span className="show__menu" onClick={() => setToggleMenu(!toggleMenu)}>
                <i className="fas fa-bars"/>
              </span>
                            <div className={`menu ${toggleMenu ? "active" : ""}`}>
                <span className="close__menu">
                  <i
                      className="far fa-window-close"
                      onClick={() => setToggleMenu(false)}
                  />
                </span>
                                <ul className="menu-list clearfix">
                                    {showMenu(menus)}
                                </ul>
                            </div>
                            <div className={`form-login ${location.pathname !== "/" ? "change" : ""}`}>
                                <div className="content" data-aos="fade-up">
                                    <Link to="#" className="link login">Đăng ký</Link>
                                    <Link to="#" className="link logout">Đăng nhập</Link>
                                </div>
                                <div className="content content-login" data-aos="fade-up">
                                    <p className="name">Chung Hán Lương</p>
                                    <div className="avatar">
                                        <img src="/images/layer-16.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="header-social" data-aos="fade-up">
                                <div className="social-item item-language">
                                    <p className="title">
                                        {lang.toUpperCase()}
                                        <i className="fas fa-chevron-down"></i>
                                    </p>
                                    <ul className="social-list">
                                        <li className="social-list__item">
                                            <a className="social-item__link" onClick={()=>changeLang('en')}>
                                                EN
                                            </a>
                                        </li>
                                        <li className="social-list__item">
                                            <a className="social-item__link" onClick={()=>changeLang('vn')}>
                                                VN
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;

const MenuLink = ({
                      label,
                      to,
                      activeOnlyWhenExact,
                      icon,
                      scrollTo,
                      childs
                  }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({match, history}) => {
                var active = match ? "active" : "";
                return (
                    <li className="menu-list__item" data-aos="fade-down">
                        <Link to={to} className={`menu-list__link ${active}`}>
                            {label}
                        </Link>
                        {childs ? (
                            <ul className="dropdown-list">
                                {
                                    childs.map((item, index) => {
                                        return <Route
                                            key={index}
                                            path={to}
                                            exact={activeOnlyWhenExact}
                                            children={({history}) => {
                                                var activeDropdown = `${to}/${item.path}` === history.location.pathname ? "active" : "";
                                                return (
                                                    <li className="dropdown-list__item" key={index}>
                                                        <Link
                                                            to={`${to}/${item.path}`}
                                                            className={`dropdown-list__link ${activeDropdown}`}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                );
                                            }}/>
                                    })
                                }
                            </ul>
                        ) : (
                            ""
                        )}
                    </li>
                );
            }}
        />
    );
};

const showMenu = menus => {
    var result = null;
    if (menus.length > 0) {
        result = menus.map((menu, index) => {
            return (
                <MenuLink
                    key={index}
                    label={menu.name}
                    to={`/${menu.link}`}
                    activeOnlyWhenExact={menu.exact}
                    scrollTo={menu.scrollTo}
                    childs={menu.childs}
                />
            );
        });
    }
    return result;
};
