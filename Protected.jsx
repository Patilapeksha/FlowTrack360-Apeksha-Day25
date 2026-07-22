import React from "react";
import { Navigate } from "react-router-dom";
import "./Protected.css";

function Protected({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
}

export default Protected;