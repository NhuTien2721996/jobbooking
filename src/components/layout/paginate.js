import React from "react";


const Paginator = () => {
    return (
        <div className="paginator" data-aos="fade-up">
            <ul className="list">
                <li className="list-item btn__control">
                    Prev
                </li>
                <li className="list-item">
                   1
                </li>
                <li className="list-item">
                   2
                </li>
                <li className="list-item">
                   3
                </li>
                <li className="list-item">
                    4
                </li>
                <li className="list-item">
                    5
                </li>
                <li className="list-item">
                    6
                </li>
                <li className="list-item">
                  ...
                </li>
                <li className="list-item">
                  22
                </li>
                <li className="list-item btn__control">
                    Next
                </li>
            </ul>
        </div>
    );
}


export default Paginator;
