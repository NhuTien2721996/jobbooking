import React, {Fragment} from "react";

import HeaderListBooking from "./HeaderListBooking";
import ListVip from "./ListVip";
import FindPeople from "./FindPeople";


const BookingList = () => {
    return (
        <Fragment>
          <div className="page-children">
              <HeaderListBooking/>
              <ListVip/>
              <FindPeople/>
          </div>
        </Fragment>

    );
}

export default BookingList;
