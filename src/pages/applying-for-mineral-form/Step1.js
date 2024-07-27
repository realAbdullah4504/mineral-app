import React, { useState } from "react";

const Step1 = ({ setState }) => {
  const [applyAs, setApplyAs] = useState("Individual");

  const handleApplyAsChange = (value) => {
    setApplyAs(value);
  };
  const obj1 = {
    Individual: {
      Details: [
        // { label: "Title/License No.", name: "license-no", required: "true", type: "text" },
        { label: "Name", name: "name", required: "true", type: "input" },
        { label: "CNIC", name: "cnic", required: "true", type: "number" },
        { label: "Address", name: "address", required: "true", type: "input" },
        { label: "Mobile Number", name: "mobile-number", required: "true", type: "number" },
        { label: "Email", name: "email", required: "true", type: "input" },
      ],
    },
    Company: {
      Details: [
        // { label: "Title/License No.", name: "license-no", required: "true", type: "text" },
        { label: "Company Name", name: "company-name", required: "true", type: "input" },
        { label: "NTN/FTN Number", name: "NTN/FTN-number", required: "true", type: "input" },
        { label: "Address", name: "address", required: "true", type: "input" },
        { label: "Contact Number", name: "contact-number", required: "true", type: "input" },
        { label: "Email", name: "email", required: "true", type: "input" },
        {
          label: "Business Domain",
          name: "business-domain",
          required: "true",
          type: "select",
          options: ["Mining", "Services"],
        },
      ],
    },
  };

  const renderFormItems = (key, obj) => {
    return obj.map((field) => {
      const commonProps = {
        name: field.name,
        id: field.name,
        require: field.required,
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
          {field.type === "input" && renderInput()}
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://your-api-endpoint.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        setState("step2");
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
              Apply As
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
              <option value="Individual">Individual</option>
              <option value="Company">Company</option>
            </select>
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
        <div className="button-group-mineral-form" style={{ marginTop: "30px", marginBottom: "30px" }}>
          <button type="submit" className="next-button">
            <div>
              Next
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

export default Step1;
