import React from "react";
import {useSelector} from "react-redux";



const Paginator = ({page,onHandleChangePage}) => {
    const pageCount = useSelector(state => state.searchPeople.people.pagecount);
    let html = [];
    for (let i = 1; i <= pageCount; i++) {
        html.push(i)
    }
    const onHandlePage=(page)=>{
        onHandleChangePage(page)
    }
    return (
        <React.Fragment>
            <div className="paginator" data-aos="fade-up">
                {html.length > 1 ?
                    <ul className="list">
                        {page > 1 ? <li className="list-item btn__control"
                                        onClick={() => onHandlePage(page - 1)}>
                                Prev
                            </li>
                            :
                            <li className="list-item btn__control" style={{cursor: "no-drop"}}>
                                Prev
                            </li>
                        }

                        {html.map((item, index) => {
                            return <li className={`list-item ${page === item ? "active" : ""}`}
                                       onClick={() => onHandlePage(item)}
                                       key={index}>
                                {item}
                            </li>
                        })}
                        {page < html.length ?
                            <li className="list-item btn__control"
                                onClick={() => onHandlePage(page + 1)}>
                                Next
                            </li>
                            :
                            <li className="list-item btn__control" style={{cursor: "no-drop"}}>
                                Next
                            </li>
                        }
                    </ul> : ""}
            </div>

        </React.Fragment>
    );
}


export default Paginator;
