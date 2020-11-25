import React from "react";
import {useSelector} from "react-redux";
import ModalPeoplePageSlide from "./SlideModal";
import ModalPeoplePageComments from "./CommentModal";


const ModalPeoplePage = ({toggleModal,onHandle}) => {
    const customer = useSelector(state => state.peopleDetail.customer);
    let showModal = toggleModal ? "show-modal" : "";
    const onHandleChange=(status)=>{
       onHandle(status);
    }
    return (
        <div className={`bs-modal modal-top ${showModal}`}>
            <div className="modal-frame">
                <div className="modal__backdrop" />
                <div className={`content-modal ${showModal}`}>
                    <span title="close" className="close__modal" onClick={() => onHandleChange(false)}>X</span>
                    <div className="body-modal">
                        <div className="head">
                            <p className="title">{customer.fullname}</p>
                        </div>
                        <div className="content">
                            <ModalPeoplePageSlide customer={customer}
                            />
                            <div className="show_info">
                                <div className="bs-row row-md-10">
                                    <div className="bs-col tn-100-5 xs-100-5 sm-50-5 md-50-10 lg-50-10">
                                        <div className="item">
                                            <div className="head">
                                                <p className="title">thông tin cơ bản</p>
                                            </div>
                                            <div className="content">
                                                <div className="bs-row row-md-5">
                                                    <div className="bs-col tn-50-5 xs-25-5 sm-50-5 md-25-5 lg-25-5">
                                                        <p className="text">Chiều cao</p>
                                                    </div>
                                                    <div className="bs-col tn-50-5 xs-25-5 sm-50-5 md-25-5 lg-25-5">
                                                        <p className="text">175</p>
                                                    </div>
                                                    <div className="bs-col tn-50-5 xs-25-5 sm-50-5 md-25-5 lg-25-5">
                                                        <p className="text">Hôn hân</p>
                                                    </div>
                                                    <div className="bs-col tn-50-5 xs-25-5 sm-50-5 md-25-5 lg-25-5">
                                                        <p className="text">Độc thân</p>
                                                    </div>
                                                    <div className="bs-col tn-50-5 xs-25-5 sm-50-5 md-25-5 lg-25-5">
                                                        <p className="text">Số đo 3 vòng</p>
                                                    </div>
                                                    <div
                                                        className="bs-col tn-50-5 xs-25-5 xs-25-5 sm-50-5 md-25-5 lg-25-5">
                                                        <p className="text">90-60-90</p>
                                                    </div>
                                                    <div className="bs-col tn-50-5 xs-25-5 sm-50-5 md-25-5 lg-25-5">
                                                        <p className="text">Thông tin</p>
                                                    </div>
                                                    <div className="bs-col tn-50-5 xs-25-5 sm-50-5 md-25-5 lg-25-5">
                                                        <p className="text">{customer.statusname}</p>
                                                    </div>
                                                    <div className="bs-col tn-50-5 xs-25-5 sm-50-5 md-25-5 lg-25-5">
                                                        <p className="text">Học vấn</p>
                                                    </div>
                                                    <div className="bs-col tn-50-5 xs-25-5 sm-50-5 md-25-5 lg-25-5">
                                                        <p className="text">Trung học</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bs-col tn-100-5 xs-100-5 sm-50-5 md-50-10 lg-50-10">
                                        <div className="item">
                                            <div className="head">
                                                <p className="title">thống kê</p>
                                                <p className="star">
                                                    <span className="show_star">
                                                      <i className="fas fa-star"/>
                                                      <i className="fas fa-star"/>
                                                      <i className="fas fa-star"/>
                                                      <i className="fas fa-star"/>
                                                      <i className="fas fa-star"/>
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="content">
                                                <div className="bs-row row-md-5">
                                                    <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                        <p className="text">Số việc đã nhận</p>
                                                    </div>
                                                    <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                        <p className="text">{customer.numofjob1!==null? customer.numofjob1:"0"}</p>
                                                    </div>
                                                    <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                        <p className="text">Điểm uy tín</p>
                                                    </div>
                                                    <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                        <p className="text">980/1000</p>
                                                    </div>
                                                    <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                        <p className="text">Danh hiệu</p>
                                                    </div>
                                                    <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                        <p className="text">Kim cương</p>
                                                    </div>
                                                    <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                        <p className="text">Đánh giá ngoại hình</p>
                                                    </div>
                                                    <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                        <p className="text">8/10</p>
                                                    </div>
                                                    <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                        <p className="text">Phá hợp đồng</p>
                                                    </div>
                                                    <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                        <p className="text">{customer.numofjob3!==null? customer.numofjob3:"0"}</p>
                                                    </div>
                                                    <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                        <p className="text">Tiếp nhận công việc</p>
                                                    </div>
                                                    <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                        <p className="text">7/10</p>
                                                    </div>
                                                    <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                        <p className="text">Trạng thái</p>
                                                    </div>
                                                    <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                        <p className="text">Đang online</p>
                                                    </div>
                                                    <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                        <p className="text">Giao tiếp</p>
                                                    </div>
                                                    <div className="bs-col tn-50-5 xs-50-5 sm-50-5 md-25-5 lg-25-5">
                                                        <p className="text">9/10</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="show_comment">
                                <div className="head">
                                    <p className="title">bình luận đối tác</p>
                                </div>
                                <ModalPeoplePageComments/>
                                <div className="button">
                                    <button className="btn-commom">Xem thêm</button>
                                </div>
                            </div>
                            <div className="show-mess">
                                <div className="wrapper_show_mess">
                                    <div className="show-mess_content">
                                        <div className="item_mess">
                                            <div className="avatar">
                                                <img src="/images/layer-16.png" alt=""/>
                                            </div>
                                            <div className="content_mess">
                                                <p className="name">Trang , <span className="time">2:05pm</span></p>

                                                <p className="contetn_detail">
                                                    Up unpacked friendly ecstatic so possible humoured do. Ample end
                                                    might folly quiet one set spoke her. We no am former valley
                                                    assure.
                                                    Four need spot ye said we find mile.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="item_mess mess_send">
                                            <div className="content_mess">
                                                <p className="name">Tu?n , <span className="time">2:05pm</span></p>

                                                <p className="contetn_detail">
                                                    Up unpacked friendly ecstatic so possible humoured do. Ample end
                                                    might folly quiet one set spoke her. We no am former valley
                                                    assure.
                                                    Four need spot ye said we find mile.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="item_mess">
                                            <div className="avatar">
                                                <img src="/images/layer-16.png" alt=""/>
                                            </div>
                                            <div className="content_mess">
                                                <p className="name">Trang , <span className="time">2:05pm</span></p>
                                                <p className="contetn_detail">
                                                    Up unpacked friendly ecstatic so possible humoured do. Ample end
                                                    might folly quiet one set spoke her. We no am former valley
                                                    assure.
                                                    Four need spot ye said we find mile.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-input">
                                        <input type="text" className="form-control" placeholder="Nhập nội dung..."/>
                                        <button className="btn-commom send-mess">Gửi đi</button>
                                        <button className="btn-commom send-mess respon" style={{display:'none'}}>
                                            <i className="fas fa-paper-plane"/>
                                        </button>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="button">
                            <button className="btn-commom">Mời tham gia công việc</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default ModalPeoplePage;
