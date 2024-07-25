import React, { Component } from "react";
import { Form, Select, Input, InputNumber, Button } from "antd";
import MoreInfo from "assets/images/geomapinfo.png";
import BreadCrumbs from "components/Breadcrumbs";
import ProgressPercentage from "components/UI/ProgressPercentage";
import Step1 from "./Step1";
import Steps from "./Steps";
import { useState } from "react";

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
const obj1 = {
  individual: [
    { label: "Name", name: "name", required: "false", type: "input" },
    { label: "CNIC", name: "cnic", required: "false", type: "number" },
    { label: "Address", name: "address", required: "false", type: "input" },
    { label: "Mobile Number", name: "mobile-number", required: "false", type: "number" },
    { label: "Email", name: "email", required: "false", type: "input" },
  ],
  company: [
    { label: "Company Name", name: "company-name", required: "false", type: "input" },
    { label: "NTN/FTN Number", name: "NTN/FTN-number", required: "false", type: "input" },
    { label: "Address", name: "address", required: "true", type: "false" },
    { label: "Contact Number", name: "contact-number", required: "false", type: "input" },
    { label: "Email", name: "email", required: "false", type: "input" },
    {
      label: "Business Domain",
      name: "business-domain",
      required: "false",
      type: "select",
      options: ["Mining", "Services"],
    },
  ],
};
const obj2 = [
  {
    label: "Sample type",
    name: "sample-type",
    required: "false",
    type: "select",
    options: ["Solid", "Liquid"],
  },
  {
    label: "Target Mineral For Testing",
    name: "target-mineral",
    required: "false",
    type: "select",
    options: ["All", "Other Types"],
  },
  { label: "Sample Location", name: "sample-location", required: "false", type: "input" },
  { label: "Upload Sample Image", name: "sample-image", required: "false", type: "file" },
];

const obj3 = [
  {
    label: "Type of Test Required",
    name: "test-type",
    required: "true",
    type: "select",
    options: ["All", "Other Types"],
  },
  {
    label: "Available Mineral labs",
    name: "mineral-labs",
    required: "true",
    type: "select",
    options: ["All", "Other Types"],
  },
  {
    label: "Test Price",
    name: "test-price",
    required: "true",
    type: "select",
    options: ["no of samples(provide list)"],
  },
  {
    label: "Purpose of Test",
    name: "sample-image",
    required: "true",
    type: "select",
    options: ["Research", "Commercial", "Academic"],
  },
];
const obj4 = [
  {
    label: "Geological Information",
    name: "geological-info",
    required: "false",
    type: "input",
  },
  { label: "Type of Work Required", name: "work-type", required: "false", type: "input" },
  { label: "Special requirement regarding report", name: "special-info", required: "false", type: "textarea" },
  {
    label: "Additional Information",
    name: "additional-info",
    required: "false",
    type: "textarea",
  },
];
const obj5 = [
  {
    label: "Mode of Sample Submission",
    name: "submission-mode",
    required: "false",
    type: "select",
    options: ["In-person", "Courier"],
  },
  { label: "Shipment by", name: "shipment-by", required: "false", type: "input" },
  { label: "Upload Receipt", name: "receipt", required: "false", type: "file" },
  {
    label: "Tracking Number",
    name: "track-id",
    required: "false",
    type: "input",
  },
];
const Stepper = () => {
  const [state, setState] = useState("step1");
  const stepPercent = {
    step1: { title: "", num: 1, percent: 19 },
    step2: { title: "", num: 2, percent: 24 },
    step3: { title: "", num: 3, percent: 35 },
    step4: { title: "", num: 4, percent: 44 },
    step5: { title: "", num: 5, percent: 52 },
    step6: { title: "", num: 6, percent: 59 },
    step7: { title: "", num: 7, percent: 76 },
    step8: { title: "", num: 8, percent: 100 },
  };
  const steps = { step1: <div></div> };

  const handleNext = () => {
    if (steps[state].step !== 5) {
      const nextStep = `step${steps[state].step + 1}`;
      setState(nextStep);
    } else {
      setState("step1");
    }
  };
  const handlePrevious = () => {
    if (steps[state].step !== 5) {
      const prevStep = `step${steps[state]["step"] - 1}`;
      setState(prevStep);
    } else {
      setState("step1");
    }
  };

  return (
    <div className="noc-form">
      <div className="mineral-testing-title">Mineral Testing Labs</div>

      <div className="mineral-testing-table-header">
        <div>{steps[state]["title"]}</div>
        <ProgressPercentage percent={steps[state]["percent"]} step={steps[state]["step"]}></ProgressPercentage>
      </div>
      <div> {steps[state]["component"]}</div>
      <div className="button-group-mineral-form" style={{ marginTop: "30px", marginBottom: "30px" }}>
        {steps[state].step === 1 ? (
          ""
        ) : (
          <button type="primary" className="prev-button" onClick={handlePrevious}>
            {steps[state]["step"] !== 5 ? (
              <div>
                {" "}
                Previous
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                </svg>
              </div>
            ) : (
              "Cancel"
            )}
          </button>
        )}
        <button type="primary" className="next-button" onClick={handleNext}>
          {steps[state]["step"] !== 5 ? (
            <div>
              {" "}
              Next
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
          ) : (
            "Save"
          )}
        </button>
      </div>
    </div>
  );
};

export default Stepper;
