import React from "react";

const CardComponent = ({ content }) => {
  return (
    <div className="flex flex-wrap mt-6 space-x-4">
      {Array.isArray(content) ? (
        content.map((item, index) => (
          <div
            key={index}
            className="relative min-w-24 flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl  p-4"
          >
            <h5
              className="block text-center mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal"
              style={{ color: item.color }}
            >
              {item.text}
            </h5>
          </div>
        ))
      ) : (
        <div className="relative min-w-24 flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-fit p-4">
          <h5
            className="block text-center mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal"
            style={{ color: content.color }}
          >
            {content.text}
          </h5>
        </div>
      )}
    </div>
  );
};

export default CardComponent;

