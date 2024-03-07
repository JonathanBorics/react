import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/navbar";
import AboutUs from "./components/About/aboutus";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Restaurant from "./components/Restaurants/Restaurant";
import APi from "./components/Api/APi";
import Post from "./components/Post/Post";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/api" element={<APi />} />
          <Route path="/post" element={<Post />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
