import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

export const DashboardLayout = ({ children }) => {
  return (
    <div className="max-w-[1440px] mx-auto">
    <Header/>
    <Content>
        {children}
    </Content>
    <Footer/>
    </div>
  )
}
