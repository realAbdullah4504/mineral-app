import React from "react";
import { Breadcrumb } from "antd";

const IntroContainer = ({
  breadCRumbItems = [],
  height = "65%",
  title = "",
  content = "",
  backgroundImage = "",
  width = "70%",

  introHeight = "auto",
}) => {
  return (
    <div
      className={`intro-container ${title === "CPEC" ? "pt-20" : ""}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="intro-section" style={{ height: introHeight }}>
        <div
          className="intro-main-section max-w-[1170px] "
          style={{ height: height, width: "100%" }}
        >
          <Breadcrumb
            className="bread-crumbs"
            separator=">"
            items={breadCRumbItems}
          />
          <div>
            <h1>{title}</h1>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IntroContainer;
