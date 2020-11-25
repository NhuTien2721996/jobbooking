import React from "react";
import {filterData} from "../../../constants/ConfigConstants";
const SectionBannerItem = ({data}) => {
    return (
        <React.Fragment>
            {filterData(data,5).map((item,index)=>{
                return <div className="item-text " data-aos="fade-right" key={index}>
                    <h1 className="title">
                        {item.name}
                    </h1>

                    <p className="desc" dangerouslySetInnerHTML={{__html: item.content}} />
                    <div className="button" data-aos="fade-right" data-aos-delay="500">
                        <span className="text">JOINOW</span>
                        <div className="arrow">
                            <img src="/images/icon_arrow.png" alt=""/>
                        </div>
                    </div>
                </div>

            })}

        </React.Fragment>
    );
}

export default SectionBannerItem;
