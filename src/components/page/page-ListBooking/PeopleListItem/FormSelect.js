import React from "react";
import Select from "react-select";
import {useSelector} from "react-redux";


const FormSelect = ({
                        onHandleChangeKeyword, onHandleChangeCodeCity, onHandleChangeDistrict, onHandleChangeCodeWard,
                        onHandleChangeRatingFrom, onHandleChangeRatingTo, toggleSearch
                    }) => {
    const dataSelects = useSelector(state => state.searchPeople.selects);
    const dataNations = useSelector(state => state.searchPeople.listNation);
    const dataCity = useSelector(state => state.searchPeople.listCity);
    const dataDistrict = useSelector(state => state.searchPeople.listDistrict);
    const dataWard = useSelector(state => state.searchPeople.listWard);
    const rating = [
        {value: '1', label: '1 sao'},
        {value: '2', label: '2 sao'},
        {value: '3', label: '3 sao'},
        {value: '4', label: '4 sao'},
        {value: '5', label: '5 sao'},
    ]

    const onChangeKeyword = (keyword) => {
        onHandleChangeKeyword(keyword)
    }
    const onChangeCodeCity = (value) => {
        onHandleChangeCodeCity(value);
    }
    const onChangeDistrict = (value) => {
        onHandleChangeDistrict(value)
    }
    const onChangeCodeWard = (value) => {
        onHandleChangeCodeWard(value)
    }
    const onChangeRatingFrom = (value) => {
        onHandleChangeRatingFrom(value);
    }
    const onChangeRatingTo = (value) => {
        onHandleChangeRatingTo(value)
    }


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
            top: "65%",
            transform: "translateY(-50%)",
            fontSize: "14px"
        }),
        menu: (provided) => ({
            ...provided,
            zIndex: "10",
        })
    }
    const customStylesNation = {
        container: (provided) => ({
            ...provided,
            marginBottom: "10px",
            pointerEvents: "none"
        }),
        control: (provided) => ({
            ...provided,
            minHeight: "unset",
            height: "35px",
            border: "1px solid #b0d1e4",
            position: "relative",
            paddingRight: "32px"
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
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "14px"
        }),
        menu: (provided) => ({
            ...provided,
            zIndex: "10",
        })
    }
    return (
        <React.Fragment>
            <div className="bs-col tn-100-5 xs-50-5 sm-33-10 md-33-15 lg-20-10">
                <input type="text" className="form-input"
                       placeholder="Kỹ năng"/>

            </div>
            <div className="bs-col tn-100-5 xs-50-5 sm-33-10 md-33-15 lg-20-10">
                <Select options={dataSelects}
                        placeholder={'Chọn lĩnh vực'}
                        styles={customStyles}
                        onChange={(val) => onChangeKeyword(val.value)}
                />
            </div>
            <div className="bs-col tn-100-5 xs-50-5 sm-33-10 md-33-15 lg-20-10">

                <Select
                    placeholder={'Chọn nghề nghiệp'}
                    styles={customStyles}
                />
            </div>
            {toggleSearch ?
                <React.Fragment>
                    <div
                        className="bs-col tn-100-5 xs-50-5 sm-33-10 md-33-15 lg-20-10">
                        <Select options={dataNations}
                                styles={customStylesNation}
                                value={dataNations.filter(item => item.label === "Việt Nam")}
                                disabled
                        />
                    </div>
                    <div
                        className="bs-col tn-100-5 xs-50-5 sm-33-10 md-33-15 lg-20-10">
                        <Select options={dataCity}
                                placeholder={'Chọn tỉnh thành'}
                                styles={customStyles}
                                onChange={(val) => onChangeCodeCity(val.value)}
                        />
                    </div>
                    <div
                        className="bs-col tn-100-5 xs-50-5 sm-33-10 md-33-15 lg-20-10">
                        <Select options={dataDistrict}
                                placeholder={'Chọn quận huyện'}
                                styles={customStyles}
                                onChange={(val) => onChangeDistrict(val.value)}
                        />
                    </div>
                    <div
                        className="bs-col tn-100-5 xs-50-5 sm-33-10 md-33-15 lg-20-10">
                        <Select options={dataWard}
                                placeholder={'Chọn phường xã'}
                                styles={customStyles}
                                onChange={(val) => onChangeCodeWard(val.value)}
                        />
                    </div>
                    <div
                        className="bs-col tn-100-5 xs-50-5 sm-33-10 md-33-15 lg-20-10">
                        <Select options={rating}
                                placeholder={'Từ'}
                                styles={customStyles}
                                onChange={(val) => onChangeRatingFrom(val.value)}
                        />
                    </div>
                    <div
                        className="bs-col tn-100-5 xs-50-5 sm-33-10 md-33-15 lg-20-10">
                        <Select options={rating}
                                placeholder={'Đến'}
                                styles={customStyles}
                                onChange={(val) => onChangeRatingTo(val.value)}
                        />
                    </div>
                </React.Fragment> :
                ""
            }
        </React.Fragment>


    );
}


export default FormSelect;
