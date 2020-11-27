import React from "react";

import HeaderListBooking from "./HeaderListBooking";
import ListVip from "./ListVip";
import FindPeople from "./FindPeople";


const BookingList = () => {
    return (
          <div className="page-children">
              <HeaderListBooking/>
              <ListVip/>
              <FindPeople/>
          </div>

    );
}

export default BookingList;
