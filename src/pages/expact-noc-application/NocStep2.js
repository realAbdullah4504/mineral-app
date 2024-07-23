import React, { Component } from "react";
import ProgressPercentage from "components/UI/ProgressPercentage";

const NocStep2 = ({ setState }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValuess = Object.fromEntries(formData.entries());
    setState("Step3");
  };
  const handlePrevious = () => {
    setState("Step1");
  };
  const obj = [
    {
      label: "Profession",
      name: "profession",
      required: "true",
      type: "select",
      options: ["Geologist", "Mining Engineer", "Miner", "Operator"],
    },
    {
      label: "Qualification",
      name: "qualification",
      required: "true",
      type: "select",
      options: ["PHD", "Masters", "Graduation", "Diploma", "Certification"],
    },
    {
      label: "Expertise/Job Description",
      name: "expertise",
      required: "true",
      type: "input",
    },
  ];
  const renderFormItems = () => {
    return obj.map((field) => {
      const commonProps = {
        name: field.name,
        id: field.name,

        className:
          "border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0",
        required: field.required,
      };

      const renderInput = (type = "text") => (
        <input type={type} {...commonProps} placeholder=" " />
      );

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
          {field.type === "input" && renderInput()}
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
          {field.type === "textarea" && (
            <textarea {...commonProps} placeholder=" " />
          )}
          {field.type !== "select" && renderLabel()}
        </div>
      );
    });
  };

  return (
    <div className="mineral-form">
      <div className="mineral-testing-table-header">
        <div className="text-green-600">Professional Details</div>
        <ProgressPercentage
          percent={24}
          step={2}
          total={8}
        ></ProgressPercentage>
      </div>
      <form className="space-y-4 " onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
          {renderFormItems()}
        </div>
        <div
          className="button-group-mineral-form"
          style={{ marginTop: "30px", marginBottom: "30px" }}
        >
          <button
            type="primary"
            className="next-button"
            onClick={handlePrevious}
          >
            <div>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 16 16"
              >
                <path
                  fill="white"
                  fill-rule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                />
              </svg>
              previous
            </div>
          </button>
          <button type="submit" className="next-button">
            <div>
              {" "}
              Next
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default NocStep2;
