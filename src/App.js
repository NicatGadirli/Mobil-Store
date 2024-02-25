import React from "react";
import { Route, Routes } from "react-router-dom";

//Components
import Header from "./components/Header";
import Header2 from "./components/Header2";

// Pages
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Favorites from "./pages/Favorites";
import ContactUs from "./pages/ContactUs";
import Pay from "./pages/Pay";
import Cart from "./pages/Cart";
import Account from "./pages/Account";


const App = ({ showHeader }) => {
  return (
    <>
      {showHeader && <Header />}
      {showHeader && <Header2 />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
};

export default App;
