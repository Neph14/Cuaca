import { Fragment, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Register from "./component/Login/Register";
import Login from "./component/Login/Login";
import Home from "../src/pages/Home";
import NotFound from "./pages/NotFound";
import API from "./component/Weather/components/CounterList/API";
import Region from "./component/Weather/components/Region-Weather/index";
import Navhome from "./component/Weather/components/Nav/Navhome";

function App() {
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const number = localStorage.getItem("number");
  const password = localStorage.getItem("password");

  const login = localStorage.getItem("isLogin");
  console.log(name, email, number, password);
  if (login === undefined) {
    localStorage.setItem("isLogin", "0");
  }
  return (
    <Fragment>
      {/* {name === null &&
        email === null &&
        number === null &&
        password === null && <Register />}
      {login === "1" &&
        name !== null &&
        email !== null &&
        number !== null &&
        password !== null && <Login />}
      {login === "2" &&
        name !== null &&
        email !== null &&
        number !== null &&
        password !== null && <Home />} */}
      {/* <Login /> */}
      <Navhome />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/weather" element={<Region />} />
          <Route path="/region" element={<API />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
