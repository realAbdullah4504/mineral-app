import React, { useState } from "react";
import MoreInfo from "assets/images/geomapinfo.png";
const NocForm = () => {
  const [applyAs, setApplyAs] = useState("Normal");

  const handleApplyAsChange = (value) => {
    setApplyAs(value);
  };
  const obj1 = {
    Normal: [
      { label: "Name", name: "name", required: "false", type: "input" },
      { label: "CNIC", name: "cnic", required: "false", type: "number" },
      { label: "Address", name: "address", required: "false", type: "input" },
      { label: "Mobile Number", name: "mobile-number", required: "false", type: "number" },
      { label: "Email", name: "email", required: "false", type: "input" },
    ],
    Urgent: [
      { label: "Company Name", name: "company-name", required: "false", type: "input" },
      { label: "NTN/FTN Number", name: "NTN/FTN-number", required: "false", type: "input" },
      { label: "Address", name: "address", required: "false", type: "input" },

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

  const renderFormItems = () => {
    const fields = applyAs === "Normal" ? obj1.Normal : obj1.Urgent;
    return fields.map((field) => {
      const commonProps = {
        name: field.name,
        id: field.name,

        className:
          "border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0",
        // required: true,
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
    const formValuess = Object.fromEntries(formData.entries());
  };
  return (
    <form className="space-y-4" onClick={handleSubmit}>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
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
            <option value="option1">Individual</option>
            <option value="option2">Company</option>
          </select>
        </div>

        {renderFormItems()}
      </div>
      <div className="geological-moreinfo hover:text-black " style={{ paddingBottom: "0px" }}>
        <div style={{ display: "flex" }}>
          {" "}
          <button style={{ backgroundImage: `url(${MoreInfo})` }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "20px",
                padding: "40px",
                alignItems: "center",
              }}
            >
              {" "}
              <div>Cancel</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 30 "
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </button>
          <button style={{ backgroundImage: `url(${MoreInfo})`, width: "120%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "20px",
                padding: "40px",
                alignItems: "center",
              }}
            >
              {" "}
              <div>Start Application</div>
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
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </form>
  );
};

export default NocForm;
