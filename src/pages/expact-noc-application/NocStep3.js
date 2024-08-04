import React, { Component } from "react";
import { useState, useEffect } from "react";
import ProgressPercentage from "components/UI/ProgressPercentage";
import { Loader } from "components";
import { message, ConfigProvider, Upload } from "antd";
import { REQUEST_TYPES, ENDPOINTS } from "utils/constant/url";
import { saveSampleDetailAPI, saveSampleListingAPI } from "services/api/common";
import { getCookiesByName } from "utils/helpers";
import { expactApplicationForm } from "utils/constant/url";
import { Button } from "antd";

const baseUrl = "https://nurseries-bucket.s3.eu-central-1.amazonaws.com/";
const NocStep3 = ({ setStep, setEquipment }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState("");
  const [toggle, setToggle] = useState({
    MapMiningTitle: false,
  });
  const warning = (message = "This is a warning message") => {
    messageApi.open({
      type: "warning",
      content: message,
    });
  };
  const isEdit = localStorage.getItem("NOCEditMode");
  const creationId = getCookiesByName("expactapplicationid");
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());
    formValues.id = state.id;
    const {
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

    if (isEdit) {
      if (state.miningImage !== state.mapOfMiningTitlePath) {
        obj.MapMiningTitle = state.miningImage;
      } else {
        obj.MapMiningTitle = state.mapOfMiningTitlePath;
      }
    } else {
      if (state.miningImage) {
        obj.MapMiningTitle = state.miningImage;
      }
    }

    obj.id = state.id || creationId;
    formDatas.append("obj", JSON.stringify(obj));
    if (isEdit) {
      if (state.miningImage !== state.mapOfMiningTitlePath) {
        formDatas.append("MapMiningTitle", state.mapOfMiningTitlePath);
      }
    } else {
      if (state.miningImage !== state.mapOfMiningTitlePath) {
        formDatas.append("MapMiningTitle", state.mapOfMiningTitlePath);
      }
    }
    if (!state.mapOfMiningTitlePath) {
      warning("Upload all images");
    } else {
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
          if (formValues["equipment-required"] == "Yes") {
            setEquipment("Yes");
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
    }
  };
  const handleChange = (fieldName, info) => {
    const newFileList = info.fileList;
    if (newFileList.length > 0) {
      const file = newFileList[0].originFileObj;
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        setToggle((prev) => ({ ...prev, [fieldName]: true }));
        setState((prev) => ({ ...prev, mapOfMiningTitlePath: file || "" }));
      });
      reader.readAsDataURL(file);
    } else {
      setState((prev) => ({ ...prev, mapOfMiningTitlePath: "" }));
    }
  };

  const handlePrevious = () => {
    setStep("Step2");
  };
  const changeHandler = (e) => {
    const { name, value } = e?.target || {};
    if (e.target.name == "PurposeofVisit") {
      setState((prev) => ({ ...prev, purposeofVisit: value }));
    }
    if (e.target.name == "equipment-required") {
      if (value == "Yes") {
        setState((prev) => ({ ...prev, equipment: ["notempty"] }));
      } else {
        setState((prev) => ({ ...prev, equipment: [] }));
      }
    }
    setState((prev) => ({ ...prev, [name]: value }));
  };
  const obj = [
    {
      label: "Purpose Of Visit",
      name: "PurposeofVisit",
      required: "true",
      type: "select",
      options: [
        { label: "Work-Drilling", value: "WorkDrilling" },
        { label: "Site-Visit", value: "SiteVisit" },
        { label: "Survey", value: "Survey" },
        { label: "Business", value: "Business" },
        { label: "Stay and vigilance of work", value: "Stayandvigilanceofwork" },
        { label: "nstallation of Project", value: "InstallationofProject" },
        { label: "Project based- Seismic Activity", value: "ProjectbasedSeismicActivity" },
        { label: "Any other specify", value: "AnyOtherSpecify" },
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
      options: [{ label: "Yes", value: "Yes" }, , { label: "No", value: "No" }],
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

      const toCamelCase = (str) => {
        return str.charAt(0).toLowerCase() + str.slice(1).replace(/-./g, (match) => match.charAt(1).toUpperCase());
      };
      const name = commonProps?.name || "";
      const camelCaseName = name ? toCamelCase(name) : "";
      let value = state[name] || state[camelCaseName] || "";

      const renderInput = (type = "text") => {
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
      const imgurl = state[field.name == "MapMiningTitle" ? "mapOfMiningTitlePath" : ""];

      return (
        <div key={field.name} className="relative mt-2 w-full">
          {field.type === "input" && renderInput()}
          {field.type === "calendar" && renderInput("date")}
          {field.type === "number" && renderInput("number")}
          {field.type === "file" && (
            <>
              <Upload
                {...commonProps}
                // action={imgurl}

                onChange={(info) => handleChange(field.name, info)}
                listType="picture"
                maxCount={1}
                fileList={
                  imgurl
                    ? [
                        {
                          uid: "-1",
                          name: "image.png",
                          status: "done",
                          url: toggle[field.name] ? URL.createObjectURL(imgurl) : baseUrl + imgurl,
                        },
                      ]
                    : []
                }
                showUploadList={{ showRemoveIcon: false }}
              >
                {" "}
                <Button>Upload</Button>
              </Upload>
            </>
          )}
          {field.type === "select" && (
            <>
              {renderLabel()}
              <select
                {...commonProps}
                defaultValue={
                  field.name == "PurposeofVisit"
                    ? state["purposeofVisit" || "PurposeofVisit"]
                    : state?.equipment?.length
                    ? "Yes"
                    : "No"
                }
                value={
                  field.name == "PurposeofVisit"
                    ? state["purposeofVisit" || "PurposeofVisit"]
                    : state?.equipment?.length
                    ? "Yes"
                    : "No"
                }
                // disabled={field.name == "equipment-required" ? isEdit : false}
                onChange={(e) => changeHandler(e)}
              >
                <option value="" disabled style={{ opacity: 0.5 }}>
                  Select {field.label.toLowerCase()}
                </option>
                {field.options.map((option) => (
                  <option key={option.label} value={option.value}>
                    {option.label}
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
          setState((prev) => ({
            ...prev,
            miningImage: data.mapOfMiningTitlePath,
            equipment: data.nocApplicationEquipments,
          }));
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <div className="noc-form">
      <div className="mineral-testing-table-header">
        <div className="text-green-600">Purpose Of Visit</div>
        <ProgressPercentage percent={37} step={3} total={8}></ProgressPercentage>
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

export default NocStep3;
