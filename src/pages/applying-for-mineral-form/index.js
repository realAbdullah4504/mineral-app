import React, { Component } from "react";
import BreadCrumbs from "components/Breadcrumbs";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import ShipmentForm from "./Step5";
import { useState } from "react";

const MineralForm = () => {
  const [state, setState] = useState("step1");

  const steps = {
    step1: {
      component: <Step1 setStep={setState}></Step1>,
      breadcrumbs: [
        { path: "/", label: "Add Application" },
        { path: "/", label: "Applicant Details" },
      ],
    },
    step2: {
      component: <Step2 setStep={setState}></Step2>,
      breadcrumbs: [
        { path: "/", label: "Applicant Details" },
        { path: "/", label: "Sample Details" },
      ],
    },
    step3: {
      component: <Step3 setStep={setState}></Step3>,
      breadcrumbs: [
        { path: "/", label: "Sample Details" },
        { path: "/", label: "Mineral Test Information - Mineral Lab" },
      ],
    },
    step4: {
      component: <Step4 setStep={setState}></Step4>,
      breadcrumbs: [
        { path: "/", label: "Mineral Test Information - Mineral Lab" },
        { path: "/", label: "Background Information" },
      ],
    },
    step5: {
      component: <ShipmentForm setStep={setState}></ShipmentForm>,
      breadcrumbs: [{ path: "#", label: "Background Information" }],
    },
  };

  return (
    <div className="mineral-form">
      <div className="mineral-testing-title">Mineral Testing Labs</div>
      <BreadCrumbs breadcrumbs={steps[state]["breadcrumbs"]} />
      <div className="mineral-testing-table-header"></div>
      <div> {steps[state]["component"]}</div>
    </div>
  );
};

export default MineralForm;
