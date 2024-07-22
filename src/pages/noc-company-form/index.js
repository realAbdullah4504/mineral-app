import React from "react";

function NocAddListCompany() {
  const obj = {
    approved: [
      {
        label: "Company Name",
        name: "company-name",
        required: "false",
        type: "input",
      },
      {
        label: "Registration Type",
        name: "registration-type",
        required: "false",
        type: "select",
        options: ["male", "female"],
      },
      {
        label: "Registration City",
        name: "registration-city",
        required: "false",
        type: "select",
        options: ["Gilgit Baltistan", "Islamabad"],
      },
      {
        label: "Registration Year",
        name: "registration-year",
        required: "false",
        type: "calendar",
      },
      {
        label: "Business Domain",
        name: "business-domain",
        required: "false",
        type: "select",
        options: ["Mining", "Services"],
      },
      { label: "NTN/FTN Number", name: "NTN/FTN-number", required: "false", type: "input" },
      { label: "Company Logo", name: "company-logo", required: "false", type: "file" },
      {
        label: "Company's Registration Certificate",
        name: "company-registartion-certificate",
        required: "false",
        type: "file",
      },
      {
        label: "Taxpayer Registration Certificate",
        name: "taxpayer-registartion-certificate",
        required: "false",
        type: "file",
      },
    ],
    "Contact Details": [
      { label: "Address", name: "address", required: "false", type: "input" },
      { label: "Phone Number", name: "phone-number", required: "false", type: "number" },
      { label: "Mobile Number", name: "mobile-number", required: "false", type: "number" },
      { label: "Email", name: "email", required: "false", type: "input" },
      { label: "Fax No.", name: "fax-no", required: "false", type: "input" },
      { label: "Contact Person Name", name: "person-contact", required: "false", type: "file" },
    ],
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValuess = Object.fromEntries(formData.entries());
  };
  const renderFormItems = (key, obj) => {
    return obj.map((field) => {
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

  return (
    <div className="noc-company-form" style={{ width: "80%", margin: "auto" }}>
      {" "}
      <div className="noc-company-status mt-10 mb-10">
        <div className="text-sm text-gray-500">Company Status</div>
        <div className="font-bold text-lg">Company Approved</div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
          {Object.entries(obj).map(([key, value]) => (
            <div key={key} className="space-y-4">
              {key === "Contact Details" && <h1 className="text-4xl font-bold text-green-700">{key}</h1>}
              {renderFormItems(key, value)}
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center">
          <button type="submit" class="bg-[#009969] hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default NocAddListCompany;
