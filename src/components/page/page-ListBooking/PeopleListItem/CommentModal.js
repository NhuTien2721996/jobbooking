import React from "react";
import {showRating} from "../FindPeople";
import {useSelector} from "react-redux";
import {getDateModal} from "../../../../constants/ConfigConstants";


const ModalPeoplePageComments = () => {
    const comments = useSelector(state => state.peopleDetail.comments);
    return (
        <div className="content">
            {comments.map((item, index) => {
                return <div className="item" key={index}>
                    <div className="avatar">
                        <img
                            src={`https://api.jobbooking.com/Upload/Customer/${getDateModal(comments)[index]}/${item.filename1}`}
                            alt=""/>
                    </div>
                    <div className="item_text">
                        <p className="star">
                                                    <span className="show_star">
                                                        {showRating(item.rating).map((item, index) => {
                                                            return <i className={item} key={index}/>
                                                        })}
                                                    </span>
                        </p>
                        <p className="comment">
                            {item.comment}
                        </p>
                        <p className="name">{item.commentbyname}</p>
                    </div>
                </div>

            })}
        </div>

    );
}


export default ModalPeoplePageComments;
