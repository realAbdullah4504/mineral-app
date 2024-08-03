import React, { useState, useEffect } from "react";
import { Loader } from "components";
import { message, ConfigProvider } from "antd";
import { REQUEST_TYPES, ENDPOINTS } from "utils/constant/url";
import ProgressPercentage from "components/UI/ProgressPercentage";
import { getCookie } from "services/session/cookies";
import { commonAPIs } from "services/api/common";
import { getCookiesByName } from "utils/helpers";
import { expactApplicationForm } from "utils/constant/url";
import { saveSampleListingAPI } from "services/api/common";
import { data } from "autoprefixer";
const NocStep6 = ({ setStep, setAlreadyVisited }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(false);
  const isEdit = localStorage.getItem("NOCEditMode");
  const nocApplicationId = getCookie("expactapplicationid") || "";
  const creationId = getCookiesByName("expactapplicationid");
  useEffect(() => {
    (async function () {
      try {
        const { data, isError, message } = await saveSampleListingAPI(
          REQUEST_TYPES.GET,
          expactApplicationForm(nocApplicationId)
        );

        if (isError) {
          warning(message);
        } else if (data) {
          setState(data);
          setState((prev) => ({
            ...prev,
            travelHistory: data.nocApplicationTravelHistory,
          }));
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  const warning = (message = "This is a warning message") => {
    messageApi.open({
      type: "warning",
      content: message,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());
    setLoading(true);

    try {
      const {
        ForeignerPlacesOFvisitDetail,
        ForeignerWorkPlacesWithAddress,
        ForeignerPlacesWhereStay,
        ForeignerVisitDurationStartDate,
        ForeignerVisitDurationEndDate,
      } = formValues;

      const payload = {
        ForeignerPlacesOFvisitDetail,
        ForeignerWorkPlacesWithAddress,
        ForeignerPlacesWhereStay,
        ForeignerVisitDurationStartDate,
        ForeignerVisitDurationEndDate,
      };

      payload.id = state.id || creationId;

      const { data, isError, message } = await commonAPIs(
        REQUEST_TYPES.POST,
        `${ENDPOINTS.SAVE_FOREIGNER_ACCOMMODATION_DETAILS}`,
        payload
      );
      if (isError) {
        setLoading(false);
        warning(message);
      }
      if (!isError && data) {
        setLoading(false);

        if (state["alreadyVisitPakistanCountry"] == "Yes") {
          setStep("Step7");
          setAlreadyVisited("Yes");
        } else {
          setStep("Step8");
          setAlreadyVisited("No");
        }
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };

  const handlePrevious = () => {
    setStep("Step5");
  };
  const obj = [
    {
      label: "Details of Places to be visited during stay",
      name: "ForeignerPlacesOFvisitDetail",
      required: "true",
      type: "input",
    },
    {
      label: "Places with Address",
      name: "ForeignerWorkPlacesWithAddress",
      required: "true",
      type: "input",
    },
    {
      label: "Places where the foreigner will stay",
      name: "ForeignerPlacesWhereStay",
      required: "true",
      type: "input",
    },
    { label: "Star of Visit", name: "ForeignerVisitDurationStartDate", required: "true", type: "calendar" },
    { label: "End of Visit", name: "ForeignerVisitDurationEndDate", required: "true", type: "calendar" },
    {
      label: "Already Visited to Pakistan",
      name: "alreadyVisitPakistanCountry",
      required: "true",
      type: "select",
      options: ["Yes", "No"],
    },
  ];
  const changeHandler = (e) => {
    const { name, value } = e?.target || {};
    if (name == "alreadyVisitPakistanCountry") {
      if (value == "Yes") {
        setState((prev) => ({ ...prev, travelHistory: ["notEmpty"] }));
      } else {
        setState((prev) => ({ ...prev, travelHistory: [] }));
      }
    }
    setState((prev) => ({ ...prev, [name]: value }));
  };
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
        let value = state[name] || state[camelCaseName] || "";
        if (type == "date") {
          value = value.split("T")[0];
        }

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
              <select
                // disabled={isEdit}
                {...commonProps}
                defaultValue={state?.travelHistory?.length ? "Yes" : "No"}
                value={state.travelHistory?.length ? "Yes" : "No"}
                onChange={(e) => changeHandler(e)}
                {...commonProps}
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
          {field.type === "textarea" && <textarea {...commonProps} placeholder=" " />}
          {field.type !== "select" && renderLabel()}
        </div>
      );
    });
  };
  console.log(state, "state");
  return (
    <div className="noc-form">
      <div className="mineral-testing-table-header">
        <div className="text-green-600">Foreigner Accomodation Details</div>
        <ProgressPercentage percent={75} step={6} total={8}></ProgressPercentage>
      </div>
      <form className="space-y-4 " onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10">{renderFormItems()}</div>
        <div className="button-group-mineral-form" style={{ marginTop: "30px", marginBottom: "30px" }}>
          <button type="primary" className="next-button" onClick={handlePrevious}>
            <div>
              {" "}
              previous
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
          ,
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
  );
};

export default NocStep6;
