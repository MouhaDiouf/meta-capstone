import React, { useState } from "react";
import BookingForm from "../BookingForm/BookingForm";
function BookingPage({ availableTimes, dispatch, submitForm }) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    return (
        <section className="container">
            <BookingForm submitForm={submitForm} time={time} setTime={setTime} setDate={setDate} date={date} guests={guests} setGuests={setGuests} occasion={occasion} setOccasion={setOccasion} availableTimes={availableTimes} dispatch={dispatch} />
        </section>
    );
}

export default BookingPage;
