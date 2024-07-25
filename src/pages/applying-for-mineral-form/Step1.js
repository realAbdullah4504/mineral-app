import React, { useState } from "react";
import { Form, InputNumber, Button } from "antd";

const Step1 = ({ obj1, setDisabled }) => {
  const [form] = Form.useForm();
  const [applyAs, setApplyAs] = useState("Individual");
  setDisabled(false);

  const handleApplyAsChange = (value) => {
    setApplyAs(value);
  };

  const renderFormItems = () => {
    if (!applyAs) return null;

    const fields = applyAs === "option1" ? obj1.individual : obj1.company;

    return fields.map((field) => {
      if (field.type === "input") {
        return (
          <div>
            <div key={field.name} className="relative mt-2 w-full">
              <input
                type="text"
                id={field.name}
                className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label
                for="name"
                className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600"
              >
                {" "}
                {field.label}
              </label>
            </div>
          </div>
        );
      }

      if (field.type === "number") {
        return (
          <div key={field.name} className="relative mt-2 w-full">
            <input
              type="number"
              id={field.name}
              className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
              placeholder=" "
              required={field.required === "true"}
            />
            <label
              htmlFor={field.name}
              className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
            >
              {field.label}
            </label>
          </div>
        );
      }

      if (field.type === "select") {
        return (
          <div key={field.name} className="relative mt-2 w-full">
            <label
              htmlFor={field.name}
              className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
            >
              {field.label}
            </label>
            <select
              id={field.name}
              className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
              required={field.required === "true"}
            >
              <option value="" disabled selected style={{ opacity: 0.5 }}>
                Select {field.label.toLowerCase()}
              </option>
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        );
      }
      if (field.type === "textarea") {
        return (
          <div key={field.name} className="relative mt-2 w-full">
            <textarea
              id={field.name}
              className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
              placeholder=" "
              required={field.required === "true"}
            />
            <label
              htmlFor={field.name}
              className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
            >
              {field.label}
            </label>
          </div>
        );
      }

      return null;
    });
  };

  return (
    <form className="space-y-4">
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
    </form>
  );
};

export default Step1;
