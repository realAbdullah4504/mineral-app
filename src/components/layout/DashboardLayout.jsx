import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

export const DashboardLayout = ({ children }) => {
  return (
    <div className="layout_main">
    <Header/>
    <div className="max-w-[1440px] mx-auto">
    <Content>
        {children}
    </Content>
    </div>
    <Footer/>
    </div>
  )
}
