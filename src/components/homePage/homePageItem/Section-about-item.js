import React from "react";
import {transformDate} from "../../../constants/ConfigConstants";

const SectionAboutItem = ({tabData, tabDefault, onHandle}) => {
    const setValue=(value)=>{
        onHandle(value);
    }
    return (
        <React.Fragment>
            {tabData.map((item, index) => {
                return (
                    <li
                        key={index}
                        className={`control-list__item ${
                            tabDefault === item.name ? "active" : ""
                        }`}
                        onClick={() => setValue(item.name)}
                    >
                                                            <span className="img">
                                                                <img
                                                                    src={`https://api.jobbooking.com//Temp/LandingPages/Feature/${transformDate(tabData, 1)[index]}/${item.filename}`}
                                                                    className="icon" alt=""/>
                                                                <img
                                                                    src={`https://api.jobbooking.com//Temp/LandingPages/Feature/${transformDate(tabData, 1)[index]}/${item.filename2}`}
                                                                    className="icon-hover"
                                                                    alt=""/>
                                                            </span>
                        <span className="name">{item.name}</span>
                    </li>
                );
            })}

        </React.Fragment>
    );
}
export default SectionAboutItem;
