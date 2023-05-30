import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import ContactLinkImage from "./components/ContactLinkImage";
import Main from "./components/Main";
import FindUs from "./components/FindUs";
import Footer from "./components/Footer";
import Form from "./components/Form";
import MentionsLegales from "./components/MentionsLegales";
import BackHomeImage from "./components/BackHomeImage";

function Home() {
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
                  {" "}
                  <BackHomeImage />
                </div>
                <ContactLinkImage />
                <Main />
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
export default Home;
