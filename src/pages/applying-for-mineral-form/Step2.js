import React, { useState, useEffect } from "react";
import { ENDPOINTS, REQUEST_TYPES } from "utils/constant/url";
import { saveSampleListingAPI, saveSampleDetailAPI } from "services/api/common";
import { Loader } from "components";
import ProgressPercentage from "components/UI/ProgressPercentage";
import { Empty } from "antd";
import Listing from "./Listing";
import { getCookiesByName } from "utils/helpers";
import { message, ConfigProvider } from "antd";
const initialState = {
  TestApplicationId: "",
  SampleType: "",
  TargetedMineral: "",
  SampleLocation: "",
  SampleImagePath: "",
};
const Step2 = ({ setStep }) => {
  const [listingData, setListingData] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState({});
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState(initialState);
  const [messageApi, contextHolder] = message.useMessage();
  const warning = (message = "This is a warning message") => {
    messageApi.open({
      type: "warning",
      content: message,
    });
  };
  const fetchSampleData = async (id = "") => {
    try {
      if (id) {
        setLoading(true);
        const { data, isError, message } = await saveSampleListingAPI(
          REQUEST_TYPES.GET,
          `${ENDPOINTS.GET_SAMPLE_DETAILS}?TestApplicationId=${id}`
        );
        if (isError) {
          setLoading(false);
          warning(message);
        }
        if (!isError && data) {
          setListingData(data);
          setState({ ...state, TestApplicationId: id });
          setLoading(false);
        }
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };
  useEffect(() => {
    const applicationDetail = getCookiesByName("testApplication", true) || {};
    const { id } = applicationDetail || {};
    fetchSampleData(id);
  }, []);

  useEffect(() => {
    if (selectedRecord && Object.keys(selectedRecord).length) {
      const { id, sampleImagePath, sampleLocation, sampleType, targetedMineral, testApplicationId } = selectedRecord;
      setState({
        ...state,
        id,
        SampleImagePath: sampleImagePath,
        SampleLocation: sampleLocation,
        SampleType: sampleType,
        TargetedMineral: targetedMineral,
        TestApplicationId: testApplicationId,
      });
    }
  }, [JSON.stringify(selectedRecord)]);
  const changeHandler = (e) => {
    const { name, value } = e?.target || {};
    if (name !== "SampleImagePath") {
      setState({ ...state, [name]: value });
    } else {
      setState({ ...state, [name]: e.target.files[0] });
    }
  };
  const handleAddForm = async (event) => {
    event.preventDefault();
    const { id, TestApplicationId, SampleType, TargetedMineral, SampleLocation, SampleImagePath } = state;
    const formData = new FormData();
    let obj = { TestApplicationId, SampleType, TargetedMineral, SampleLocation };
    if (id) {
      obj = { id, ...obj, SampleImagePath };
    }
    formData.append("obj", JSON.stringify(obj));
    formData.append("sampleImage", SampleImagePath || "");
    try {
      setLoading(true);
      const { data, isError, message } = await saveSampleDetailAPI(
        REQUEST_TYPES.POST,
        `${ENDPOINTS.SAVE_SAMPLE_DETAILS}`,
        formData
      );

      if (isError) {
        setLoading(false);
        warning(message);
      } else if (data) {
        setLoading(false);
        // handle success
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };
  const handlePrevious = () => {
    setStep("step1");
  };
  const obj = [
    {
      label: "Sample type",
      name: "SampleType",
      required: "true",
      type: "select",
      options: ["Solid", "Liquid"],
    },
    {
      label: "Target Mineral For Testing",
      name: "TargetedMineral",
      required: "true",
      type: "select",
      options: ["All", "Other Types"],
    },
    { label: "Sample Location", name: "SampleLocation", required: "true", type: "input" },
    { label: "Upload Sample Image", name: "SampleImagePath", type: "file" },
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
          value={state[field?.name] || ""}
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
          {field.type === "file" && <input type="file" onChange={(e) => changeHandler(e)} {...commonProps} />}
          {field.type === "select" && (
            <>
              {renderLabel()}
              <select
                {...commonProps}
                onChange={(e) => changeHandler(e)}
                value={state[field?.name] ? state[field?.name] : ""}
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
            </>
          )}
          {field.type === "textarea" && (
            <textarea {...commonProps} value={selectedRecord ? selectedRecord[field.name] : ""} placeholder=" " />
          )}
          {field.type !== "select" && renderLabel()}
        </div>
      );
    });
  };

  const handleNext = () => {
    setStep("step5");
  };
  return (
    <ConfigProvider>
      <div className="noc-form">
        <div className="mineral-testing-table-header">
          <div>Sample Listing</div>
          <ProgressPercentage percent={50} step={2} total={4}></ProgressPercentage>
        </div>
        <form className="space-y-4 " onSubmit={handleAddForm}>
          <div>
            {loading ? (
              <Loader />
            ) : listingData.length ? (
              <Listing dataSource={listingData} setSelectedRecord={setSelectedRecord}></Listing>
            ) : (
              <Empty />
            )}
            <div className="mineral-testing-table-header">
              <div>Sample Details</div>
              <button type="submit" className="next-button" style={{ padding: "20PX" }}>
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
              </button>
            </div>
          </div>
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
            <button type="submit" className="next-button" disabled={!listingData.length} onClick={handleNext}>
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
    </ConfigProvider>
  );
};

export default Step2;
