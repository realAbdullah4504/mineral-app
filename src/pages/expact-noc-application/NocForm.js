import React, { useState } from "react";
import { Form, InputNumber, Button } from "antd";
import MoreInfo from "assets/images/geomapinfo.png";

const NocForm = ({ setState }) => {
  const [applyAs, setApplyAs] = useState("Normal");

  const handleApplyAsChange = (value) => {
    setApplyAs(value);
  };

  const obj1 = {
    Normal: {
      Details: [
        // { label: "Title/License No.", name: "license-no", required: "true", type: "text" },
        { label: "Title Issue Date", name: "title-issue-date", required: "true", type: "calendar" },
        { label: "Title Expiry Date", name: "title-expiry-date", required: "true", type: "calendar" },
        { label: "Title Grant Letter", name: "title-grant-letter", required: "true", type: "file" },
        { label: "Sub-Lease Issue Date (If Applicable) (Optional)", name: "sub-lease-date", required: "false", type: "calendar" },
        { label: "Sub-Lease Expiry Date (If Applicable) (Optional)", name: "sub-lease-date-expiry", required: "false", type: "calendar" },
        { label: "Mining Sub-Lease Letter (If Applicable) (Optional)", name: "sub-lease-letter", required: "false", type: "file" },
      ],
    },
    Urgent: {
      Details: [
        // { label: "Title/License No.", name: "license-no", required: "true", type: "text" },
        { label: "Title Issue Date", name: "title-issue-date", required: "true", type: "calendar" },
        { label: "Title Expiry Date", name: "title-expiry-date", required: "true", type: "calendar" },
        { label: "Title Grant Letter", name: "title-grant-letter", required: "true", type: "file" },
        { label: "Sub-Lease Issue Date (If Applicable) (Optional)", name: "sub-lease-date", required: "false", type: "calendar" },
        { label: "Sub-Lease Expiry Date (If Applicable) (Optional)", name: "sub-lease-date-expiry", required: "false", type: "calendar" },
        { label: "Mining Sub-Lease Letter (If Applicable) (Optional)", name: "sub-lease-letter", required: "false", type: "file" },
      ],
      "Deposit Details": [
        { label: "Deposit Slip", name: "deposit-slip", required: "true", type: "file" },
        { label: "Deposit Bank", name: "deposit-bank", required: "true", type: "select", options: ["HBL", "ABL"] },
        { label: "Branch Name", name: "branch-name", required: "true", type: "select", options: ["HBL", "ABL"] },
        { label: "Deposit Date", name: "deposit-date", required: "true", type: "calendar" },
        { label: "Deposit Amount in Number", name: "deposit-amount-numbers", required: "true", type: "number" },
        { label: "Deposit Amount in Words", name: "deposit-amount-words", required: "true", type: "text" },
      ],
    },
  };

  const renderFormItems = (key, obj) => {
    return obj.map((field) => {
      const commonProps = {
        name: field.name,
        id: field.name,
        className:
          "border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0",
      };

      const renderInput = (type = "text") => <input type={type} {...commonProps} placeholder=" " />;

      const renderLabel = () => (
        <label
          htmlFor={field.name}
          className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
        >
          {field.label}
        </label>
      );

      return (
        <div key={field.name} className="relative mt-2 w-full">
          {field.type === "text" && renderInput()}
          {field.type === "calendar" && renderInput("date")}
          {field.type === "number" && renderInput("number")}
          {field.type === "file" && <input type="file" {...commonProps} />}
          {field.type === "select" && (
            <>
              {renderLabel()}
              <select {...commonProps}>
                <option value="" disabled style={{ opacity: 0.5 }}>
                  Select {field.label.toLowerCase()}
                </option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </>
          )}
          {field.type === "textarea" && <textarea {...commonProps} placeholder=" " />}
          {field.type !== "select" && renderLabel()}
        </div>
      );
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());
    setState("Step1");
  };

  return (
    <div>
      <div>
        Expatraite Security Clearance <span className="font-bold">Noc Application</span>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="text-2xl text-green-700 my-10 font-bold">NOC Application Details</div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 mb-10">
          <div className="relative mt-2 w-full">
            <label
              htmlFor="ApplyAs"
              className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
            >
              NOC Type
            </label>
            <select
              id="ApplyAs"
              className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
              required={true}
              onChange={(e) => handleApplyAsChange(e.target.value)}
            >
              <option value="" disabled selected style={{ opacity: 0.5 }}>
                Select an option
              </option>
              <option value="Normal">Normal</option>
              <option value="Urgent">Urgent</option>
            </select>
          </div>
          <div className="relative mt-2 w-full">
            <label
              htmlFor="license-no"
              className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
            >
              Title/License No.
            </label>
            <input
              type="text"
              name="license-no"
              id="license-no"
              className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
              placeholder=" "
              required
            />
          </div>
        </div>
        <div className="">
          {Object.entries(obj1[applyAs]).map(([key, value]) => (
            <div key={key} className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
              {key === "Deposit Details" && <h1 className="col-span-3 text-4xl font-bold text-green-700">{key}</h1>}
              {renderFormItems(key, value)}
            </div>
          ))}
        </div>
        <div>
          {applyAs === "Normal" ? (
            <div>
              <h1 className="font-bold">Note</h1>
              <p>Normal Application takes 1-2 months to complete and is usually valid for a year.</p>
              <p>There is no fee required for normal application.</p>
            </div>
          ) : (
            <div>
              <h1 className="font-bold">Note</h1>
              <p>Urgent application takes up to 7 days to complete and is valid for only 3 months.</p>
              <p>
                There is a fee of <span className="font-bold">100$</span> that needs to be submitted to the BOI account{" "}
                <span className="font-bold">#3035205436</span>.
              </p>
              <p>The deposit slip has to be attached along with the application.</p>
            </div>
          )}
        </div>
        <div className="button-group-mineral-form" style={{ marginTop: "30px", marginBottom: "30px" }}>
          <button type="button" className="next-button">
            <div>
              Cancel
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </button>
          <button type="submit" className="next-button">
            <div>
              Start Application
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default NocForm;
