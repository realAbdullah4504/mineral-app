import React from "react";
import { useNavigate } from "react-router-dom";

const CardComponent = ({ content }) => {
  const navigate = useNavigate();

  const handleNavigate = (url) => {
    navigate(url);
  };

  return (
    <div className="flex flex-wrap mt-6 space-x-4">
      {Array.isArray(content) ? (
        content.map((item, index) => (
          <div
            onClick={() => handleNavigate(item.url)}
            key={index}
            className="relative min-w-24 max-w-80 flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl  p-4"
          >
            <h5
              className="block font-roboto-condensed text-start text-xl antialiased font-semibold leading-snug tracking-normal"
              style={{ color: item.color }}
            >
              {item.text}
            </h5>

            {item?.para && (
              <h5
                className="block font-roboto-condensed text-[20px] text-center mb-2 text-xl antialiased font-normal leading-snug tracking-normal"
                style={{ color: item.color }}
              >
                {item.para}
              </h5>
            )}
          </div>
        ))
      ) : (
        <div className="relative min-w-24 flex flex-col text-gray-700 bg-white shadow-md bg-clip-border max-w-80 rounded-xl p-4" onClick={() => handleNavigate(content.url)}>
          <h5
            className="block font-roboto-condensed text-start text-xl antialiased font-semibold leading-snug tracking-normal"
            style={{ color: content.color }}
          >
            {content.text}
          </h5>
          {content?.para && (
            <h5
              className="block font-roboto-condensed text-start mt-4 text-xl antialiased font-normal leading-snug tracking-normal"
              style={{ color: content.color }}
            >
              {content.para}
            </h5>
          )}
        </div>
      )}
    </div>
  );
};

export default CardComponent;
