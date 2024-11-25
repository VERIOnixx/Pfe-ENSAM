import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import UserSearch from "./components/UserSearch";
import AddUser from "./components/AddUser";
import AboutUs from "./components/AboutUs";
import Help from "./components/Help";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Define the Home and About Us routes */}
        <Route path="/" element={<UserSearch />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
};

export default App;
