import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import ModalPage from "./Components/model/ModelPage";
import Details from "./pages/Details";
import Footer from "./Components/Footer";
import Movies from "./Components/Movies"
import Trends from "./Components/Trends";
import Live from "./Components/Live";
import AddToCard from "./Components/AddToCard"
import News from "./Components/News";
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
        <Trends/>
        <Movies />
        <Live />
        <AddToCard />
        <News />
        <Footer/>
        
      </div>
    </Router>
  );
}

export default App;
