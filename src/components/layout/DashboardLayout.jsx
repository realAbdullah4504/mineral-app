import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

export const DashboardLayout = ({ children }) => {
  return (
    <div className="">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};
