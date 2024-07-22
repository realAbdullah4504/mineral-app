import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

export const DashboardLayout = ({
  children,
  isHeader = true,
  isFooter = true,
}) => {
  return (
    <div className="layout_main">
      {isHeader && <Header />}
      <Content>{children}</Content>
      {isFooter && <Footer />}
    </div>
  );
};
