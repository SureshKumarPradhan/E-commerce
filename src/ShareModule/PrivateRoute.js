import React from "react";
import Nav from "../Component/Nav/Nav";
import Footer from "../Component/Footer/Footer";
const PrivateRoute = ({ children }) => {
  return (
    <>
      <Nav />
      <div style={{ minHeight: "85.3vh" }}>{children}</div>
      <Footer />
    </>
  );
};
export default PrivateRoute;
