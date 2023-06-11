import React, { useState } from "react";
import BookingForm from "../BookingForm/BookingForm";
function BookingPage({ availableTimes, dispatch, submitForm }) {
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [guests, setGuests] = useState(null);
    const [occasion, setOccasion] = useState(null);

    return (
        <div>
            <BookingForm submitForm={submitForm} time={time} setTime={setTime} setDate={setDate} date={date} guests={guests} setGuests={setGuests} occasion={occasion} setOccasion={setOccasion} availableTimes={availableTimes} dispatch={dispatch} />
        </div>
    );
}

export default BookingPage;
