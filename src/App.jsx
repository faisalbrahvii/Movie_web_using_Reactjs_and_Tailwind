import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import ModalPage from "./Components/model/ModelPage";
import Details from "./pages/Details";
import Footer from "./Components/Footer";
import Movies from "./Components/Movies"
import AddToCard from "./Components/AddToCard";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <Hero /> */}
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/modalpage" element={<ModalPage />} /> 
            <Route path="/details/:id" element={<Details />} />

          </Routes>
        </main>
        {/* <Movies /> */}
        <Footer/>
        
      </div>
    </Router>
  );
}

export default App;
