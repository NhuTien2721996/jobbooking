import React,{useState,useEffect} from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useSelector, useDispatch} from "react-redux";
import {getAllJobRequest} from "../../../states/duck/pages/findJob/action";
import {getDateJob} from "../../../constants/ConfigConstants";



const JobSearch = () => {
    const [startDate, setStartDate] = useState(new Date());
    const city = [
        {value: 'hà nội', label: 'Hà Nội'},
    ]
    const customStyles = {
        container: (provided) => ({
            ...provided,
            marginBottom: "10px"
        }),
        control: (provided) => ({
            ...provided,
            minHeight: "unset",
            height: "35px",
            border: "1px solid #b0d1e4",
            position: "relative",
            paddingRight: "32px"
        }),
        placeholder: (provided) => ({
            ...provided,
            top: "45%",
            transform: "translateY(-100%)",
            fontSize: "12px",
            position: "absolute",
            whiteSpace: "nowrap"
        }),
        indicatorSeparator: (provided) => ({
            ...provided,
            display: "none"
        }),
        indicatorsContainer: (provided) => ({
            ...provided,
            position: "absolute",
            top: "0",
            right: "0"
        }),
        singleValue: (provided) => ({
            ...provided,
            top: "45%",
            transform: "translateY(-100%)",
            fontSize: "12px"
        }),
    }
    const ExampleCustomInput = ({value, onClick}) => (
        <div className="form-datePicker" onClick={onClick}>
            <input type="text" className="datetime-picker" value={value}/>
            <div className="icon">
                <img src="/images/date-time.png" alt=""/>
            </div>
        </div>
    );
    const dispatch=useDispatch();
const jobData=useSelector(state=>state.searchJob)
    useEffect(()=>{
        let job={
            DistrictID: null,
            FieldCareerID: null,
            FieldID: null,
            NationID: 1,
            PackageJob: null,
            ProvinceID: null,
            TimeFrom: null,
            TimeTo: null,
            WardID: null,
            jobName: null,
            maxbuget: null,
            minbuget: null,
            pageIndex: 1,
            pageSize: 12,
        }
        dispatch(getAllJobRequest(job))
    },[]);


    return (
        <section className="section section-find">
            <div className="bs-container">
                <div className="bs-row">
                    <div className="bs-col">
                        <div className="module-find">
                            <div className="module-header">
                                <h2 className="title">Tìm việc</h2>
                            </div>
                            <div className="module-content">
                                <div className="content-form">
                                    <div className="content-form__title">
                                        <p className="title">TÌM KIẾM CÔNG VIỆC/ SỰ KIỆN PHÙ HỢP VỚI BẠN</p>
                                    </div>
                                    <div className="content-form__content">
                                        <div className="form-select">
                                            <div className="bs-row row-tn-5 row-xs-5 row-sm-10 row-md-10">
                                                <div className="bs-col tn-100-5 xs-100-5 sm-50-10 md-33-15 lg-25-10">
                                                    <div className="bs-row row-tn-5 row-xs-5 row-sm-10 row-md-10">
                                                        <div
                                                            className="bs-col tn-50-5 xs-50-5 sm-33-10 md-33-15 lg-50-10">
                                                            <input type="text" className="form-input"
                                                                   placeholder="Tên nghề nghiệp"/>

                                                        </div>
                                                        <div
                                                            className="bs-col tn-50-5 xs-50-5 sm-33-10 md-33-15 lg-50-10">
                                                            <Select options={city}
                                                                    placeholder={'Tỉnh'}
                                                                    styles={customStyles}
                                                            />
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="bs-col tn-100-5 xs-100-5 sm-50-10 md-33-15 lg-25-10">
                                                    <div className="bs-row row-tn-5 row-xs-5 row-sm-10 row-md-10">
                                                        <div
                                                            className="bs-col tn-50-5 xs-50-5 sm-33-10 md-33-15 lg-50-10">
                                                            <Select options={city}
                                                                    placeholder={'Quận/Huyện'}
                                                                    styles={customStyles}
                                                            />
                                                        </div>
                                                        <div
                                                            className="bs-col tn-50-5 xs-50-5 sm-33-10 md-33-15 lg-50-10">
                                                            <Select options={city}
                                                                    placeholder={'Xã/Thị trấn'}
                                                                    styles={customStyles}
                                                            />
                                                        </div>

                                                    </div>

                                                </div>
                                                <div className="bs-col tn-100-5 xs-100-5 sm-50-10 md-33-15 lg-25-10">
                                                    <div className="bs-row row-tn-5 row-xs-5 row-sm-10 row-md-10">
                                                        <div
                                                            className="bs-col tn-50-5 xs-50-5 sm-33-10 md-33-15 lg-50-10">
                                                            <Select options={city}
                                                                    placeholder={'Lĩnh vực'}
                                                                    styles={customStyles}
                                                            />
                                                        </div>
                                                        <div
                                                            className="bs-col tn-50-5 xs-50-5 sm-33-10 md-33-15 lg-50-10">
                                                            <Select options={city}
                                                                    placeholder={'Loại nghề nghiệp'}
                                                                    styles={customStyles}
                                                            />
                                                        </div>

                                                    </div>

                                                </div>
                                                <div className="bs-col lg-25-15">
                                                    <div className="bs-row row-tn-5 row-xs-5 row-sm-10 row-md-10">
                                                        <div
                                                            className="bs-col tn-50-5 xs-50-5 sm-50-10 md-50-15 lg-50-10">
                                                            <Select options={city}
                                                                    placeholder={'Giá theo giờ nhỏ nhất'}
                                                                    styles={customStyles}
                                                            />
                                                        </div>
                                                        <div
                                                            className="bs-col tn-50-5 xs-50-5 sm-50-10 md-50-15 lg-50-10">
                                                            <Select options={city}
                                                                    placeholder={'Giá theo giờ nhỏ nhất'}
                                                                    styles={customStyles}
                                                            />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-time">
                                            <div className="bs-row row-tn-5 row-xs-5 row-sm-10 row-md-10">
                                                <div className="bs-col tn-100-5 xs-100-5 sm-50-10 md-50-15 lg-33-10">
                                                    <div className="bs-row row-tn-5 row-xs-5 row-sm-10 row-md-10">
                                                        <div
                                                            className="bs-col tn-50-5 xs-50-5 sm-33-10 md-33-15 lg-50-10">
                                                            <div className="time">
                                                                <input type="text" className="form-input"
                                                                       value="00h:00m:00s"/>
                                                                <span className="title">Thời gian từ</span>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="bs-col tn-50-5 xs-50-5 sm-33-10 md-33-15 lg-50-10">
                                                            <DatePicker selected={startDate}
                                                                        onChange={date => setStartDate(date)}
                                                                        className="datetime_picker"
                                                                        customInput={<ExampleCustomInput/>}
                                                            />
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="bs-col tn-100-5 xs-100-5  sm-50-10 md-50-15 lg-33-10">
                                                    <div className="bs-row row-tn-5 row-xs-5 row-sm-10 row-md-10">
                                                        <div
                                                            className="bs-col tn-50-5 xs-50-5 sm-33-10 md-33-15 lg-50-10">
                                                            <div className="time time-end">
                                                                <input type="text" className="form-input"
                                                                       value="00h:00m:00s"/>
                                                                <span className="title">Tới</span>
                                                            </div>

                                                        </div>
                                                        <div
                                                            className="bs-col tn-50-5 xs-50-5 sm-33-10 md-33-15 lg-50-10">
                                                            <DatePicker selected={startDate}
                                                                        onChange={date => setStartDate(date)}
                                                                        className="datetime_picker"
                                                                        customInput={<ExampleCustomInput/>}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bs-col lg-33-10">
                                                    <div className="bs-row row-tn-5 row-xs-5 row-sm-10 row-md-10">
                                                        <div
                                                            className="bs-col tn-50-5 xs-50-5 sm-33-10 md-33-15 lg-50-10">
                                                            <Select options={city}
                                                                    placeholder={'Rating'}
                                                                    styles={customStyles}
                                                            />
                                                        </div>
                                                        <div
                                                            className="bs-col tn-50-5 xs-50-5 sm-33-10 md-33-15 lg-50-10">
                                                            <button className="btn-search">Tìm kiếm</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-list">
                                    <div className="bs-row row-tn-5 row-xs-5 row-sm-10 row-md-15">
                                        {jobData.map((item,index)=>{
                                         return  <div className="bs-col lg-33-15" key={index}>
                                                <div className="item">
                                                    <div className="avatar">
                                                        <img src={`https://api.jobbooking.com/Temp/Fields/${getDateJob(jobData)[index]}/${item.field_career_image}`} alt=""/>
                                                    </div>
                                                    <div className="info">
                                                        <p className="name">{item.name}</p>
                                                        <p className="order">
                                                            <span className="title">Order <strong>{item.orders}</strong></span>
                                                            <span className="title">View <strong>{item.views}</strong></span>
                                                        </p>
                                                        <p className="field job">
                                                            <span className="name">{item.fieldname}</span>
                                                        </p>
                                                        <p className="address">
                                                            <i className="fas fa-map-marker-alt"></i>
                                                            {item.fulladdress2}
                                                        </p>
                                                        <p className="address time">
                                                            <i className="far fa-clock"></i>
                                                            {item.createddatestring}
                                                        </p>

                                                        <p className="price">
                                                            <i className="fas fa-dollar-sign"></i>{item.rangebudgetvnd}
                                                        </p>
                                                    </div>
                                                    <button className="btn-contact">Nhận việc
                                                        <span className="item"><img src="/images/arrow-right.png" alt=""/></span>
                                                    </button>
                                                </div>
                                            </div>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}


export default JobSearch;
