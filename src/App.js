import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import BookingPage from "./Components/BookingPage/BookingPage";
import Footer from "./Components/Footer/Footer";
function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage />}></Route>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
