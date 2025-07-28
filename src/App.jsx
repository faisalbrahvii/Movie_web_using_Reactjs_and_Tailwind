import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./Components/HeroCompoundes/Hero";
import ModalPage from "./Components/model/ModelPage";
import Details from "./pages/Details";
import Footer from "./Components/Footer";
import Movies from "./Components/Movies";
import Trends from "./Components/Trends";
import Live from "./Components/Live";
import AddToCard from "./Components/AddToCard";
import News from "./Components/News";
import MobileScreenNav from "./Components/MobileScreen/MobileScreenNav";
import Navbar from "./Components/MobileScreen/Navbar";
import MobileScreen from "./Components/HeroCompoundes/MobileScreen";

function App() {
  return (
    <Router>
      <div>
        {/* <Navbar/> */}
        <MobileScreenNav />
        <main>
          <Routes>
            {/* ✅ Homepage route */}
            <Route
              path="/"
              element={
                <>
                  {/* <Hero /> */}
                  <MobileScreen/>
                  <Trends />
                  <Movies />
                  <Live />
                  <AddToCard />
                  <News />
                </>
              }
            />
            {/* ✅ Other Routes */}
            <Route path="/modalpage" element={<ModalPage />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
