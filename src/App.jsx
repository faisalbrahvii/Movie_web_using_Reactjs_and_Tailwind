import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

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
import Search_movie from "./Components/Search_movie";

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();

  const isSearchPage = location.pathname === "/search";

  return (
    <div>
      {/* ✅ Show Navbars on all pages except search */}
      {!isSearchPage && (
        <>
          <div className="block md:block">
            <MobileScreenNav />
          </div>
          <div className="hidden md:hidden">
            <Navbar />
          </div>
        </>
      )}

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MobileScreen />
                <Trends />
                <Movies />
                <Live />
                <AddToCard />
                <News />
              </>
            }
          />
          <Route path="/modalpage" element={<ModalPage />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/search" element={<Search_movie />} />
        </Routes>
      </main>

      {/* ✅ Optionally hide footer on search too */}
      {!isSearchPage && <Footer />}
    </div>
  );
}


export default App;
