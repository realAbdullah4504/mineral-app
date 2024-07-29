import React, { useState, useEffect } from "react";
import { ENDPOINTS, REQUEST_TYPES } from "utils/constant/url";
import { saveSampleDetailAPI } from "services/api/common";
import ProgressPercentage from "components/UI/ProgressPercentage";
import { getCookiesByName, setCookiesByName } from "utils/helpers";
import { Loader } from "components";
import { message, ConfigProvider } from "antd";
const initialState = {
  id: "",
  mineralTestId: "",
  typeOfWorkRequired: "",
  labId: "",
  purposeOfTest: "",
  testPrice: "",
};
const Step3 = ({ setStep }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const applicationDetail = getCookiesByName("MineralTestInfo", true);
    if (Object.keys(applicationDetail).length) {
      let payload = {};
      const { id, typeOfWorkRequired, labId, testPrice, purposeOfTest } = applicationDetail;
      payload = { typeOfWorkRequired, labId, testPrice, purposeOfTest, mineralTestId: id };
      if (id) {
        payload = { id, ...payload };
      }
      setState({ ...state, ...payload });
    }
  }, []);
  const changeHandler = (e) => {
    const { name, value } = e?.target || {};
    setState({ ...state, [name]: value });
  };
  const warning = (message = "This is a warning message") => {
    messageApi.open({
      type: "error",
      content: message,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const { id, mineralTestId, typeOfWorkRequired, labId, testPrice, purposeOfTest } = state;
    let payload = { mineralTestId, typeOfWorkRequired, labId, testPrice, purposeOfTest };
    if (id) {
      payload = { ...payload, id };
    }
    try {
      const { data, isError, message } = await saveSampleDetailAPI(
        REQUEST_TYPES.POST,
        ENDPOINTS.SAVE_TEST_INFO,
        payload
      );
      if (isError) {
        setLoading(false);
        warning(message);
      }
      if (!isError && data) {
        setCookiesByName("MineralTestInfo", data, true);
        setLoading(false);
        setStep("step4");
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };
  const handlePrevious = () => {
    setStep("step2");
  };
  const obj = [
    {
      label: "Type of Test Required",
      name: "typeOfWorkRequired",
      required: "true",
      type: "select",
      options: ["All", "Other Types"],
    },
    {
      label: "Available Mineral labs",
      name: "labId",
      required: "true",
      type: "select",
      options: ["All", "Other Types"],
    },
    {
      label: "Test Price",
      name: "testPrice",
      required: "true",
      type: "select",
      options: ["no of samples(provide list)"],
    },
    {
      label: "Purpose of Test",
      name: "purposeOfTest",
      required: "true",
      type: "select",
      options: ["Research", "Commercial", "Academic"],
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
          onChange={(e) => changeHandler(e)}
          value={state[field?.name]}
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
          {field.type === "file" && <input type="file" {...commonProps} />}
          {field.type === "select" && (
            <>
              {renderLabel()}
              <select onChange={(e) => changeHandler(e)} value={state[field?.name]} {...commonProps}>
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
    <ConfigProvider>
      <div className="noc-form">
        <div className="mineral-testing-table-header">
          <div>Mineral Test Information - Mineral Lab</div>
          <ProgressPercentage percent={75} step={3} total={4}></ProgressPercentage>
        </div>
        {contextHolder}
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
              <Loader />
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
    </ConfigProvider>
  );
};

export default Step3;
