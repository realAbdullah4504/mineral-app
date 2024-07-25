import React from "react";
import MoreInfo from "assets/images/geomapinfo.png";

function GeologicalData({ content, title, GelogicalMapbg }) {
  return (
    <div className="geological-map-intro">
      <div className="geological-map-bg-img">
        <div className="geological-map-bg" style={{ backgroundImage: `url(${GelogicalMapbg})` }}>
          {title}
        </div>
      </div>
      {content}
      <div className="geological-moreinfo">
        {" "}
        <button style={{ backgroundImage: `url(${MoreInfo})` }}>
          <div
            style={{
              padding: "40px",
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {" "}
            <div>Find out more</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

export default GeologicalData;
