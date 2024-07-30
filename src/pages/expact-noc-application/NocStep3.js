import React, { Component } from "react";
import { useState, useEffect } from "react";
import ProgressPercentage from "components/UI/ProgressPercentage";
import { Loader } from "components";
import { message, ConfigProvider } from "antd";
import { REQUEST_TYPES, ENDPOINTS } from "utils/constant/url";
import { saveSampleDetailAPI } from "services/api/common";
import { getCookiesByName } from "utils/helpers";

const NocStep3 = ({ setStep, setEquipment }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState("");
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
    formValues.id = state.id;
    const {
      MapMiningTitle,
      PurposeofVisit,
      NatureOfJob,
      ProjectDistrict,
      ProjectDetails,
      ProjectName,
      TentativeExpectedVisitStartDate,
      TentativeExpectedVisitEndDate,
    } = formValues;

    const formDatas = new FormData();
    const obj = {
      PurposeofVisit,
      NatureOfJob,
      ProjectDistrict,
      ProjectDetails,
      ProjectName,
      TentativeExpectedVisitStartDate,
      TentativeExpectedVisitEndDate,
    };
    obj.id = state.id;
    formDatas.append("obj", JSON.stringify(obj));
    formDatas.append("MapMiningTitle", MapMiningTitle);
    setLoading(true);
    try {
      const { data, isError, message } = await saveSampleDetailAPI(
        REQUEST_TYPES.POST,
        ENDPOINTS.SAVE_EXPACT_APPLICATION_PURPOSEVIST_DETAILS,
        formDatas
      );
      if (isError) {
        setLoading(false);
        warning(message);
      }
      if (!isError && data) {
        if (formValues["equipment-required"] === "yes") {
          setEquipment("yes");
          setStep("Step4");
        } else {
          setEquipment("No");
          setStep("Step5");
        }
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePrevious = () => {
    setStep("Step2");
  };
  const changeHandler = (e) => {
    const { name, value } = e?.target || {};
    setState({ ...state, [name]: value });
  };
  const obj = [
    {
      label: "Purpose Of Visit",
      name: "PurposeofVisit",
      required: "true",
      type: "select",
      options: [
        "Work Drilling",
        "Site Visit",
        "Survey",
        "Business",
        "Stay and vigilance of work",
        "Installation of Project",
        "Project based- Seismic Activity",
        "Any other specify",
      ],
    },
    { label: "Nature Of Job", name: "NatureOfJob", required: "true", type: "input" },
    { label: "Name Of Project", name: "ProjectName", required: "true", type: "input" },
    { label: "Project Location/District", name: "ProjectDistrict", required: "true", type: "input" },
    { label: "Project Details", name: "ProjectDetails", required: "true", type: "input" },
    {
      label: "Equipment Required",
      name: "equipment-required",
      required: "true",
      type: "select",
      options: ["No", "yes"],
    },
    {
      label: "Tentative Date expected to Visit Field",
      name: "TentativeExpectedVisitStartDate",
      required: "true",
      type: "calendar",
    },
    {
      label: "Tentative Date expected to end Field",
      name: "TentativeExpectedVisitEndDate",
      required: "true",
      type: "calendar",
    },
    {
      label: "Map of Mining Title(Coordinate)",
      name: "MapMiningTitle",
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

      const renderInput = (type = "text") => (
        <input
          type={type}
          onChange={(e) => changeHandler(e)}
          value={state[commonProps?.name]}
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
              <select {...commonProps} defaultValue={state?.nocApplicationEquipments?.length ? "Yes" : "NO"}>
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
    const formValues = getCookiesByName("expactapplicationformkeys", true);
    setState(formValues);
  }, []);
  console.log(state, "state");
  return (
    <div className="noc-form">
      <div className="mineral-testing-table-header">
        <div className="text-green-600">Purpose Of Visit</div>
        <ProgressPercentage percent={37} step={3} total={8}></ProgressPercentage>
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

export default NocStep3;
