import React, { useState } from "react";
import "./BookingForm.css";
function BookingForm({ time, setTime, dispatch, date, setDate, occasion, setOccasion, guests, setGuests, availableTimes, submitForm }) {
    function handleSubmit() {
        if (!time || !date || !occasion || !guests) {
            return alert("Please fill the form");
        }
        submitForm({ time, date, occasion, guests });
    }

    function handleDateChange(e) {
        setDate(e.target.value);
        dispatch({ type: "select_date", value: new Date(e.target.value) });
    }

    function handleTimeChange(e) {
        setTime(e.target.value);
        dispatch({ type: "select_slot", value: e.target.value });
    }
    return (
        <section>
            <h1 className="text-center">Book Now</h1>
            <form className="booking-form" onSubmit={() => handleSubmit()}>
                <label htmlFor="res-date" aria-label="Choose date">
                    Choose date
                </label>
                <input type="date" data-testid="date-picker" id="res-date" value={date} onChange={handleDateChange} required />
                <label htmlFor="res-time" aria-label="Choose time">
                    Choose time
                </label>
                <select id="res-time" data-testid="time-picker" value={availableTimes?.selected} onChange={handleTimeChange} required>
                    {availableTimes?.slots.map((time, idx) => (
                        <option value={time} key={idx}>
                            {time}
                        </option>
                    ))}
                </select>
                <label htmlFor="guests" aria-label="Number of guests">
                    Number of guests
                </label>
                <input type="number" data-testid="guests" placeholder="input a number" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} required />
                <label htmlFor="occasion" aria-label="occasion">
                    Occasion
                </label>
                <select id="occasion" value={occasion} data-testid="occasion" onChange={(e) => setOccasion(e.target.value)} required>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="regular dinner">Regular Dinner</option>
                </select>
                <button type="submit" data-testid="submit-btn" className="submit-btn" aria-label="on Click">
                    Make your reservation
                </button>
            </form>
        </section>
    );
}

export default BookingForm;
