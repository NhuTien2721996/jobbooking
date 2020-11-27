import React, {useEffect, useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {getPageNumber} from "../../../../states/duck/pages/findPeople/action";

const Paginator = () => {
    const pageCount = useSelector(state => state.searchPeople.people.pagecount);
    const dispatch=useDispatch();
    let html = [];
    for (let i = 1; i <= pageCount; i++) {
        html.push(i)
    }
    const [page,setPage]=useState(1);
    useEffect(()=>{
        dispatch(getPageNumber(page))
    },[dispatch, page]);
    return (
        <React.Fragment>
            <div className="paginator" data-aos="fade-up">
                {html.length > 1 ?
                    <ul className="list">
                        {page > 1 ? <li className="list-item btn__control"
                                        onClick={() => setPage(page - 1)}>
                                Prev
                            </li>
                            :
                            <li className="list-item btn__control" style={{cursor: "no-drop"}}>
                                Prev
                            </li>
                        }

                        {html.map((item, index) => {
                            return <li className={`list-item ${page === item ? "active" : ""}`}
                                       onClick={() => setPage(item)}
                                       key={index}>
                                    {item}
                            </li>
                        })}
                        {page < html.length ?
                            <li className="list-item btn__control"
                                onClick={() => setPage(page + 1)}>
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
