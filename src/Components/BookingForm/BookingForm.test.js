import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { updateTimes, initializeTimes, fetchAPI } from "../../App";
test("Renders the BookingForm heading", () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
});

const initialState = {
    selected: null,
    slots: fetchAPI(new Date()),
};
// test the initializeTimes function
test("default initial values", () => {
    expect(initializeTimes()).toMatchObject(initialState);
});

// tests the updateTimes function
test("returns initial state on update time call without action", () => {
    expect(updateTimes(initialState, {})).toMatchObject(initialState);
});

// test the updateTimes function
test("returns new state on update time call with select_slot action", () => {
    expect(updateTimes(initialState, { type: "select_slot", value: "20:00" })).toMatchObject({ selected: "20:00", slots: fetchAPI(new Date()) });
});
