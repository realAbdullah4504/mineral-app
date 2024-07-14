import React from "react";

export const Container = ({ children, classes = "" }) => {
  return <div className={`${classes} xl:max-w-[1440px] max-w-[95%] m-auto`}>{children}</div>;
};
