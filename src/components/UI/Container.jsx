import React from "react";

export const Container = ({ children, classes = "" }) => {
  return <div className={`${classes} max-w-[1440px] m-auto`}>{children}</div>;
};
