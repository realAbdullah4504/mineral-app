import React, { Component } from "react";
import { useState, useEffect } from "react";
import ProgressPercentage from "components/UI/ProgressPercentage";
import { Loader } from "components";
import { message, ConfigProvider } from "antd";
import { REQUEST_TYPES, ENDPOINTS } from "utils/constant/url";
import { saveSampleDetailAPI, saveSampleListingAPI } from "services/api/common";
import { getCookiesByName } from "utils/helpers";
import { expactApplicationForm } from "utils/constant/url";

const NocStep2 = ({ setStep }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState("");
  const warning = (message = "This is a warning message") => {
    messageApi.open({
      type: "warning",
      content: message,
    });
  };
  const creationId = getCookiesByName("expactapplicationid");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());
    formValues.id = state.id || creationId;
    setLoading(true);
    try {
      const { data, isError, message } = await saveSampleDetailAPI(
        REQUEST_TYPES.POST,
        ENDPOINTS.SAVE_EXPACT_APPLICATION_PROFESSION_DETAILS,
        formValues
      );
      if (isError) {
        setLoading(false);
        warning(message);
      }
      if (!isError && data) {
        setLoading(false);
        setStep("Step3");
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };
  const changeHandler = (e) => {
    const { name, value } = e?.target || {};
    setState({ ...state, [name]: value });
  };
  const handlePrevious = () => {
    setStep("Step1");
  };
  const obj = [
    {
      label: "Profession",
      name: "Profession",
      required: "true",
      type: "select",
      options: ["Geologist", "MiningEngineer", "Miner", "Operator"],
    },
    {
      label: "Qualification",
      name: "Qualification",
      required: "true",
      type: "select",
      options: ["PHD", "Masters", "Graduation", "Diploma", "Certification"],
    },
    {
      label: "Expertise/Job Description",
      name: "JobDescription",
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
      const toCamelCase = (str) => {
        return str.charAt(0).toLowerCase() + str.slice(1).replace(/-./g, (match) => match.charAt(1).toUpperCase());
      };
      const renderInput = (type = "text") => {
        const name = commonProps?.name || "";
        const camelCaseName = name ? toCamelCase(name) : "";
        const value = state[name] || state[camelCaseName] || "";

        return <input type={type} value={value} onChange={(e) => changeHandler(e)} {...commonProps} placeholder=" " />;
      };

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
  useEffect(() => {
    const id = getCookiesByName("expactapplicationid", true);
    (async function () {
      try {
        const { data, isError, message } = await saveSampleListingAPI(REQUEST_TYPES.GET, expactApplicationForm(id));

        if (isError) {
          warning(message);
        } else if (data) {
          setState(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <div className="noc-form">
      <div className="mineral-testing-table-header">
        <div className="text-green-600">Professional Details</div>
        <ProgressPercentage percent={24} step={2} total={8}></ProgressPercentage>
      </div>
      <form className="space-y-4 " onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10">{renderFormItems()}</div>
        <div className="button-group-mineral-form" style={{ marginTop: "30px", marginBottom: "30px" }}>
          <button type="primary" className="next-button" onClick={handlePrevious}>
            <div>
              {" "}
              <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 16 16">
                <path
                  fill="white"
                  fill-rule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                />
              </svg>
              previous
            </div>
          </button>
          {loading ? (
            <Loader></Loader>
          ) : (
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
          )}
        </div>
      </form>
    </div>
  );
};

export default NocStep2;
