import React, {Fragment} from "react";
import Paginator from "../../layout/paginate";
import JobSearch from "./JobSeacrch";
import HeaderListBooking from "../page-ListBooking/HeaderListBooking";


const Job = () => {
    return (
        <Fragment>
            <div className="page-children">
                <HeaderListBooking/>
                <JobSearch/>
                <Paginator/>
            </div>
        </Fragment>

    );
}

export default Job;
