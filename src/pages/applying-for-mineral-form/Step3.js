import React, { useState, useEffect } from "react";
import { ENDPOINTS, REQUEST_TYPES, mineralTestIdDetails } from "utils/constant/url";
import { saveSampleDetailAPI, testApplicationDetailAPI, commonAPIs } from "services/api/common";
import ProgressPercentage from "components/UI/ProgressPercentage";
import { getCookiesByName, setCookiesByName } from "utils/helpers";
import { Loader } from "components";
import { message, ConfigProvider } from "antd";
const initialState = {
  id: "",
  mineralTestId: "",
  labId: "",
  purposeOfTest: "",
  testPrice: "",
};
const Step3 = ({ setStep }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [state, setState] = useState(initialState);
  const [mineralTest, setMineralTest] = useState([]);
  const [labId, setLabId] = useState("");
  const [labIdDetails, setLabIdDetails] = useState([]);
  const [testId, setTestId] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (!labId) {
      setState({ ...state, testPrice: "" });
    } else {
      const lab = labIdDetails.find((item) => item.labId == labId);
      setState({ ...state, testPrice: lab?.testPrice || "" });
    }
  }, [labId]);
  useEffect(() => {
    const applicationDetail = getCookiesByName("testApplication", true);
    const TestApplicationId = getCookiesByName("mineralEditid", true) || applicationDetail?.id  || "";
    (async function () {
      try {
        const { data, isError, message } = await testApplicationDetailAPI(
          REQUEST_TYPES.GET,
          ENDPOINTS.GET_MINERAL_TEST
        );
        const { data:applicationDetail, isError1, message1 } = await commonAPIs(
          REQUEST_TYPES.GET,
          `${ENDPOINTS.GET_TEST_APPLICATION_BY_ID}?TestApplicationId=${TestApplicationId}`,
        );
        if (isError || isError1) {
          warning(message);
        }
        if (!isError && data) {
          setMineralTest(data);
        }
        if(!isError1 && applicationDetail){
          if (Object.keys(applicationDetail).length) {
            let payload = {};
            const { id, labId, testPrice, purposeOfTest, mineralTestId } = applicationDetail;
            payload = { labId, testPrice, purposeOfTest, mineralTestId };
            if (id) {
              payload = { id, ...payload };
            }
            setState({ ...state, ...payload });
            setTestId(mineralTestId);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  useEffect(() => {
    (async function () {
      try {
        const { data, isError, message } = await testApplicationDetailAPI(
          REQUEST_TYPES.GET,
          mineralTestIdDetails(testId)
        );
        if (isError) {
          warning(message);
        }
        if (!isError && data) {
          setLabIdDetails(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [testId]);

  const changeHandler = (e, fieldName) => {
    const { name, value } = e?.target || {};
    setState({ ...state, [name]: value });
    if (fieldName === "mineralTestId") {
      setTestId(value);
    }
    if (fieldName === "labId") {
      setLabId(value);
    }
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

    const { id, mineralTestId, labId, testPrice, purposeOfTest } = state;
    let payload = { mineralTestId, labId, testPrice, purposeOfTest };
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
        setCookiesByName("testApplication", data, true);
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
  useEffect(() => {
    if (!labIdDetails.length) {
      setLabId("");
    }
    if (labIdDetails.length === 1) {
      setLabId(labIdDetails[0].labId);
    }
    if (labIdDetails.length > 1) {
      setLabId(labIdDetails[0].labId);
    }
  }, [labIdDetails]);
  const obj = [
    {
      label: "Type of Test Required",
      name: "mineralTestId",
      required: "true",
      type: "select",
      options: mineralTest.map((item) => {
        return { name: item.name, value: item.id };
      }),
    },
    {
      label: "Available Mineral labs",
      name: "labId",
      required: "true",
      type: "select",
      options: labIdDetails.map((item) => {
        return { name: item.labName, value: item.labId };
      }),
    },
    {
      label: "Test Price",
      name: "testPrice",
      required: "true",
      type: "input",
      disabled: true,
    },
    {
      label: "Purpose of Test",
      name: "purposeOfTest",
      required: "true",
      type: "select",
      options: [
        { name: "Research", value: "Research" },
        { name: "Commercial", value: "Commercial" },
        { name: "Academic", value: "Academic" },
      ],
    },
  ];
  const renderFormItems = () => {
    return obj.map((field) => {
      const commonProps = {
        name: field.name,
        id: field.name,
        disabled: field.disabled || false,
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
              <select onChange={(e) => changeHandler(e, field.name)} value={state[field?.name]} {...commonProps}>
                <option value="" disabled style={{ opacity: 0.5 }}>
                  Select {field.label.toLowerCase()}
                </option>
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
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
