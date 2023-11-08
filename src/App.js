import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import FindUs from "./components/FindUs";
import Footer from "./components/Footer";
import Form from "./components/Form";
import MentionsLegales from "./components/MentionsLegales";
import BackHomeImage from "./components/BackHomeImage";
import ClickAndCollect from "./components/ClickAndCollect";

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    return savedCart || [];
  });

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div className="hide-on-sm">
                  <BackHomeImage />
                </div>
                <Main />
                <ClickAndCollect
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />{" "}
                <FindUs />
                <Form />
              </div>
            }
          />
          <Route path="/mentionslegales" element={<MentionsLegales />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
