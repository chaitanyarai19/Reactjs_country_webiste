import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Country from "./pages/Country";
import AppLayout from "./Components/Layout/AppLayout"; 
import ErrorPage from "./pages/ErrorPage";

const App = () => {
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="country" element={<Country />} />
                </Route>
                 <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
            
        </>
    )
}

export default App;
