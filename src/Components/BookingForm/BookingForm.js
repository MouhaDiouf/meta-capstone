import React, { useState } from "react";
import "./BookingForm.css";
function BookingForm({ time, setTime, dispatch, date, setDate, occasion, setOccasion, guests, setGuests, availableTimes, submitForm }) {
    function handleSubmit() {
        if (!time || !date) {
            return alert("Please fill the form");
        }
    }
    return (
        <>
            <h1>Book Now</h1>
            <form className="booking-form" onSubmit={() => submitForm({ time, date, occasion, guests })}>
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    value={date}
                    onChange={(e) => {
                        setDate(e.target.value);
                        dispatch({ type: "select_date", value: new Date(e.target.value) });
                    }}
                    required
                />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time " value={availableTimes?.selected} onChange={(e) => dispatch({ type: "select_slot", value: e.target.value })} required>
                    {availableTimes?.slots.map((time) => (
                        <option value={time}>{time}</option>
                    ))}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="input a number" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} required />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Regular Dinner</option>
                </select>
                <input type="submit" value="Make Your reservation" />
            </form>
        </>
    );
}

export default BookingForm;
