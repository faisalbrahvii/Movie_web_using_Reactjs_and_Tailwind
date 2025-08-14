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
import TvShows from "./Components/TvShows";
import OnlyOnModel from "./Components/model/OnlyOnModel";
import SelectCategories from "./pages/SelectCategories";
import MyList from "./pages/MyList";

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
      {!isSearchPage && (
        <>
          <div className="block md:hidden">
            <MobileScreenNav />
          </div>
          <div className="hidden md:block">
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
                
                <div className="block md:hidden">
                  <MobileScreen />
                </div>

                
                <div className="hidden md:block">
                  <Hero />
                </div>

                <TvShows/>
                <Trends />
                <Movies />
                <Live />
                <AddToCard />
                <News />
              </>
            }
          />
          <Route path="/OnlyOnModel" element={<OnlyOnModel />} />
          <Route path="/modalpage" element={<ModalPage />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/search" element={<Search_movie />} />
          <Route path="/SelectCategories" element={<SelectCategories />} />
          <Route path="/MyList" element={<MyList />} />
        </Routes>
      </main>

      {!isSearchPage && <Footer />}
    </div>
  );
}

export default App;
