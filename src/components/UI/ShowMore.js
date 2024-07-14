import React from "react";

export const ShowMore = ({ idButton, idContent }) => {
  const handleButtonClick = () => {
    const moreContent = document.getElementById(idContent);
    const showMoreBtn = document.getElementById(idButton);

    if (moreContent.style.display === "none" || moreContent.style.display === "") {
      moreContent.style.display = "block";
      showMoreBtn.textContent = "Show Less";
    } else {
      moreContent.style.display = "none";
      showMoreBtn.textContent = "Show More";
    }
  };

  return (
    <button id={idButton} className="show-more-btn" onClick={handleButtonClick}>
      Show More
    </button>
  );
};
