import React from "react";
import IntroContainer from "components/IntroContainer";

function BusinessCards({ item, index }) {
  return (
    <div className="business-mining-card-content">
      <h1 className="business-mining-card-title">
        {index + 1}. {item.title}
      </h1>
      <p>{item.description}</p>
    </div>
  );
}
export default BusinessCards;
