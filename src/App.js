import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Explore from "./Explore";
import "./styles/index.scss";
import SwipeCards from "./SwipeCards";
import Profile from "./Profile";

function App() {
  const [recoData, setRecoData] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const URL = "http://localhost:5000/explore";

      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);
      var requestOptions = {
        method: "GET",
        headers: myHeaders,

        mode: "cors",
      };

      fetch(URL, requestOptions)
        .then((res) => res.json())
        .then((res) => setRecoData(res?.data));
    }
  }, [token]);

  const PrivateRoute = ({ children }) => {
    return token ? children : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/explore"
            element={
              <PrivateRoute>
                <Explore recoData={recoData} />
              </PrivateRoute>
            }
          />
          <Route
            path="/cards"
            element={
              <PrivateRoute>
                <SwipeCards recoData={recoData} />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
