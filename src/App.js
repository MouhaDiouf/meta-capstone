import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import BookingPage from "./Components/BookingPage/BookingPage";
import Footer from "./Components/Footer/Footer";
import { useEffect, useReducer } from "react";
import ConfirmedBooking from "./Components/ConfirmedBooking/ConfirmedBooking";
// these next three are coming from the api, to be replaced!
const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = (s * a) % m) / m;
    };
};

export const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(i + ":00");
        }
        if (random() < 0.5) {
            result.push(i + ":30");
        }
    }
    return result;
};
const submitAPI = function (formData) {
    return true;
};
// end of api functions

export function updateTimes(state, action) {
    if (action.type == "select_date") {
        return { ...state, slots: fetchAPI(action.value) };
    }
    if (action.type == "select_slot") {
        return { ...state, selected: action.value };
    }

    return state;
}

export function initializeTimes() {
    return {
        selected: null,
        slots: fetchAPI(new Date()),
    };
}
function App() {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const navigate = useNavigate();

    function submitForm(formData) {
        if (submitAPI(formData)) {
            navigate("/booking-confirmed");
        }
    }
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking-confirmed" element={<ConfirmedBooking />}></Route>
                <Route path="/reservations" element={<BookingPage submitForm={submitForm} availableTimes={availableTimes} dispatch={dispatch} />}></Route>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
