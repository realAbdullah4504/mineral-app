import React, { Component } from "react";
import ProgressPercentage from "components/UI/ProgressPercentage";
import { useState } from "react";
import { Form, Input, Button, Upload, Select, Empty, InputNumber } from "antd";
import Listing from "pages/applying-for-mineral-form/Listing";
import ListingNoc from "./ListingForms";
const NocStep4 = ({ setState }) => {
  const [listing, setListing] = useState([]);
  const [record, setRecord] = useState({});
  const handleNext = () => {
    setState("Step5");
  };
  const handlePrevious = () => {
    setState("Step3");
  };
  const obj = [
    {
      label: "Equipment Type",
      name: "equipment-type",
      required: "true",
      type: "select",
      options: ["PLS PROVIDE LIST"],
    },
    {
      label: "Equipment Name",
      name: "equipment-name",
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
        <input
          type={type}
          value={record ? record[field.name] : ""}
          {...commonProps}
          placeholder=" "
        />
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
          {field.type === "file" && (
            <input
              type="file"
              value={record ? record[field.name] : ""}
              {...commonProps}
            />
          )}
          {field.type === "select" && (
            <>
              {renderLabel()}
              <select {...commonProps} value={record ? record[field.name] : ""}>
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
            <textarea
              {...commonProps}
              value={record ? record[field.name] : ""}
              placeholder=" "
            />
          )}
          {field.type !== "select" && renderLabel()}
        </div>
      );
    });
  };

  const handleAddForm = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValuess = Object.fromEntries(formData.entries());
    setListing([...listing, formValuess]);
    setRecord([]);
  };
  const handleEditClick = (record) => {
    setRecord(record);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Equipment Name",
      dataIndex: "equipment-name",
      key: "equipment-name",
    },
    {
      title: "Equipment Type",
      dataIndex: "equipment-type",
      key: "equipment-type",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div
          onClick={() => handleEditClick(record)}
          style={{ cursor: "pointer", color: "#1677ff" }}
        >
          Edit
        </div>
      ),
    },
  ];
  console.log(record, "record");
  return (
    <div className="mineral-form">
      <div className="mineral-testing-table-header">
        <div className="text-green-600">Equipment Listing</div>
        <ProgressPercentage
          percent={50}
          step={4}
          total={8}
        ></ProgressPercentage>
      </div>

      <form className="space-y-4 " onSubmit={handleAddForm}>
        {listing.length ? (
          <ListingNoc
            dataSource={listing}
            setSelectedRecord={setRecord}
            columns={columns}
          ></ListingNoc>
        ) : (
          <Empty />
        )}
        <div className="mineral-testing-table-header">
          <div className="text-green-600">Equipment Details</div>
          <button type="submit" className="next-button">
            Add Form
            <svg
              style={{ opacity: "0.5", paddingBottom: "5px" }}
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
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
          {renderFormItems()}
        </div>
      </form>
      <div
        className="button-group-mineral-form"
        style={{ marginTop: "30px", marginBottom: "30px" }}
      >
        <button type="primary" className="next-button" onClick={handlePrevious}>
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
        <button type="submit" className="next-button" onClick={handleNext}>
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
    </div>
  );
};

export default NocStep4;
