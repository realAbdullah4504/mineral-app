import React, { useState, useEffect } from "react";
import { Form, Input, Button, Upload, Select, Empty, InputNumber } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Listing from "./Listing";

const Steps = ({ obj, showListing = false, setDisabled = "", step = 1 }) => {
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [listingData, setListingData] = useState([]);
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    if (step === 2 && !listingData.length) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [step, listingData, setDisabled]);

  useEffect(() => {
    if (selectedRecord) {
      setFormValues(selectedRecord);
    }
  }, [selectedRecord]);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormValues({ ...formValues, [name]: type === "file" ? e.target.files[0] : value });
  };

  const handleSelectChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const handleAddForm = () => {
    setListingData([...listingData, formValues]);
    setFormValues({});
  };

  const renderFormItems = () => {
    return obj.map((field) => {
      if (field.type === "input") {
        return (
          <div key={field.name} className="relative mt-2 w-full">
            <input
              type="text"
              name={field.name}
              value={formValues[field.name] || ""}
              onChange={handleInputChange}
              id={field.name}
              className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
              placeholder=" "
              required={field.required || false}
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

      if (field.type === "number") {
        return (
          <div key={field.name} className="relative mt-2 w-full">
            <input
              type="number"
              name={field.name}
              value={formValues[field.name] || ""}
              onChange={handleInputChange}
              id={field.name}
              className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
              placeholder=" "
              required={field.required || false}
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

      if (field.type === "file") {
        return (
          <div key={field.name} className="relative mt-2 w-full">
            <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
              {field.label}
            </label>
            <Upload
              onChange={({ file }) => handleInputChange({ target: { name: field.name, files: [file] } })}
              id={field.name}
              name={field.name}
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture"
              maxCount={1}
              required={field.required || false}
            >
              <Button icon={<UploadOutlined />} className="mt-2 w-full bg-green-500 text-white">
                Upload Image
              </Button>
            </Upload>
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
              name={field.name}
              onChange={(e) => handleSelectChange(field.name, e.target.value)}
              id={field.name}
              value={formValues[field.name] || ""}
              className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
              required={field.required === "true"}
            >
              <option value="" disabled style={{ opacity: 0.5 }}>
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
              name={field.name}
              value={formValues[field.name] || ""}
              onChange={handleInputChange}
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
    <div>
      {showListing ? (
        <div>
          {listingData.length ? (
            <Listing dataSource={listingData} setSelectedRecord={setSelectedRecord}></Listing>
          ) : (
            <Empty />
          )}
          <div className="mineral-testing-table-header">
            <div>Sample Details</div>
            <Button type="primary" className="next-button" style={{ padding: "20PX" }} onClick={handleAddForm}>
              Add Sample
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
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </Button>
          </div>
        </div>
      ) : (
        ""
      )}
      <form className="space-y-4">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10">{renderFormItems()}</div>
      </form>
    </div>
  );
};

export default Steps;
