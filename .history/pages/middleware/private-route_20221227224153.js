import React from "react";
import { useSelector } from "react-redux";

import Router, { useRouter } from "next/router";
import Login from "../login";

function PrivateRoute({ children }) {
  const token = useSelector((state) => state.auth.token);
  if (token) {
    return children;
  } else {
    return <Login />;
  }
}

export default PrivateRoute;
