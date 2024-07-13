import React from "react";

const LinksCard = ({ content }) => {
  return (
    <>
      {Array.isArray(content) ? (
        content.map((item, index) => (
          <div
            key={index}
            className={`relative flex min-w-${
              item?.minWidth ? item?.minWidth : 24
            } flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl px-4 py-8`}
          >
            <h5
              className="block font-ibm-plex-sans text-left mb-2antialiased font-bold text-[23px] leading-[30px]"
              style={{ color: item.color }}
            >
              {item.text}
            </h5>
            <div className="flex flex-col items-start">
              {item?.links &&
                item.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    className="font-roboto-condensed font-normal text-[19px] leading-[24px] text-[#009969] underline underline-offset-2 mt-1"
                  >
                    {link.text}
                  </a>
                ))}
            </div>
          </div>
        ))
      ) : (
        <div
          className={`relative flex min-w-${
            content?.minWidth ? content?.minWidth : "24"
          } flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-fit px-4 py-8`}
        >
          <h5
            className="block font-ibm-plex-sans text-left mb-2 antialiased font-bold text-[23px] leading-[30px] "
            style={{ color: content.color }}
          >
            {content.text}
          </h5>
          <div className="flex flex-col items-start">
            {content?.links &&
              content.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.url}
                  className="font-roboto-condensed font-normal text-[19px] leading-[24px] text-[#009969] underline underline-offset-2 mt-1"
                >
                  {link.text}
                </a>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default LinksCard;
