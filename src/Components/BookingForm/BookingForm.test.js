import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { updateTimes, initializeTimes, fetchAPI } from "../../App";
import userEvent from "@testing-library/user-event";
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

describe("test function inputs", () => {
    const submitForm = jest.fn();
    beforeEach(() => {
        render(<BookingForm setDate={jest.fn()} dispatch={jest.fn()} setTime={jest.fn()} setGuests={jest.fn()} setOccasion={jest.fn()} submitForm={jest.fn()} />);
    });
    // test the input fields

    test("Test the calendar input deosn't accept invalid data", () => {
        const input = screen.getByTestId("date-picker");
        fireEvent.change(input, { target: { value: "2023-02" } });
        expect(input.value).toEqual("");
    });
    test("Test the calendar input is valid", () => {
        const input = screen.getByTestId("date-picker");
        fireEvent.change(input, { target: { value: "2023-08-12" } });
        expect(input.value).toEqual("2023-08-12");
    });

    test("Test the time input isn't allowing invalid data", () => {
        const timeInput = screen.getByTestId("time-picker");
        fireEvent.change(timeInput, { target: { value: "11203" } });
        expect(timeInput.value).toEqual("");
    });

    test("Test the time input is allowing valid data", () => {
        const timeInput = screen.getByTestId("time-picker");
        fireEvent.change(timeInput, { target: { value: "17:00" } });
        expect(timeInput.value).toEqual("");
    });

    test("Test the guests input isn't allowing invalid data", () => {
        const guestsInput = screen.getByTestId("guests");
        fireEvent.change(guestsInput, { target: { value: "invalid data" } });
        expect(guestsInput.value).toEqual("");
    });

    test("Test the guests input is allowing valid data", () => {
        const guestsInput = screen.getByTestId("guests");
        fireEvent.change(guestsInput, { target: { value: "1" } });
        expect(guestsInput.value).toEqual("1");
    });

    test("Test the occasions input", () => {
        const occasionInput = screen.getByTestId("occasion");
        userEvent.selectOptions(occasionInput, "birthday");
        expect(occasionInput.value).toEqual("birthday");
    });

    // form submission validation
    test("submit button disabled when fields aren't filled", () => {
        const submitBtn = screen.getByTestId("submit-btn");
        submitBtn.click();
        expect(submitForm).not.toBeCalled();
    });
});
