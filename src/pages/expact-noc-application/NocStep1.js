import React from "react";
import ProgressPercentage from "components/UI/ProgressPercentage";

const NocStep1 = ({ setState }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValuess = Object.fromEntries(formData.entries());
    setState("Step2");
  };

  const obj = [
    { label: "Gender", name: "gender", required: "true", type: "select", options: ["Male", "Female"] },
    { label: "Expat Title", name: "expat-title", required: "true", type: "input" },
    { label: "First Name", name: "first-name", required: "true", type: "input" },
    { label: "Middle Name(Optional)", name: "middle-name", required: false, type: "input" },
    { label: "Last Name", name: "last-name", required: "true", type: "input" },
    { label: "Date Of Birth", name: "dob", required: "true", type: "calendar" },
    { label: "Father Name", name: "father-name", required: "true", type: "input" },
    { label: "Permanent Address", name: "permanent-address", required: "true", type: "input" },
    {
      label: "Nationality",
      name: "nationality",
      required: "true",
      type: "select",
      options: ["Pakistani", "Foreigner"],
    },
    { label: "Country", name: "country", required: "true", type: "select", options: ["Pakistan", "Canada"] },
    { label: "Passport No.", name: "passport-no", required: "true", type: "input" },
    { label: "Passport Image.", name: "passport-img", required: "true", type: "file" },
    {
      label: "Colored Passport Size Picture",
      name: "passport-img-colored",
      required: "true",
      type: "file",
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

  return (
    <div className="noc-form">
      <div className="mineral-testing-table-header">
        <div className="text-green-600">Expatriate Personal Details</div>
        <ProgressPercentage percent={12} step={1} total={8}></ProgressPercentage>
      </div>
      <form className="space-y-4 " onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10">{renderFormItems()}</div>
        <div className="button-group-mineral-form" style={{ marginTop: "30px", marginBottom: "30px" }}>
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
                className="size-6"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default NocStep1;
