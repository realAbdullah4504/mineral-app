import React, { useState } from "react";

export function FlipCards({ title = "Front Content",className = "", flip = false, flipContent = "", changebg = false, link = "" }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouse = () => {
    if (flip) {
      setIsHovered((prevState) => !prevState);
    }
  };
  const handleClick = () => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <div className={`flip-card-content ${className}`} onClick={handleClick} style={{ cursor: link ? "pointer" : "default" }}>
      {isHovered && flip ? (
        <div className="flip-card-back" onMouseLeave={handleMouse}>
          <div>
            <h1>{title}</h1>
            <p>{flipContent}</p>
          </div>
        </div>
      ) : (
        <div className="flip-card-front-business" onMouseEnter={handleMouse}>
          <div>
            {" "}
            <svg
              style={{ transform: "rotate(-49.3deg)", marginLeft: "160px" }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              className="size-17"
              width="70"
              height="70"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h1>{title}</h1>
          </div>
        </div>
      )}
    </div>
  );
}
