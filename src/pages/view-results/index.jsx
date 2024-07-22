import React from "react";
import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";

const ViewResults = () => {
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "#", label: "Services and Support" },
    { path: "/mineral-testing-labs", label: "Minerals Testing Labs" },
    { path: "/test-information", label: "Test Information" },
  ];
  return (
    <div className="flex flex-col">
      <Container classes="mt-8 w-[90%] min-h-screen">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
        <div className="row text-[64px] font-semibold font-ibm-plex-sans mb-[12px]">
          Results
        </div>
        <div className="flex text-[18px]">
          Your data has been analyzed and the result is as follows:
        </div>
      </Container>
    </div>
  );
};
export default ViewResults;
