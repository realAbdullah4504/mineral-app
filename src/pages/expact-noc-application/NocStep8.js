import React, { Component } from "react";
import { useState, useEffect } from "react";
import ProgressPercentage from "components/UI/ProgressPercentage";
import { Loader } from "components";
import { message, ConfigProvider } from "antd";
import { REQUEST_TYPES, ENDPOINTS } from "utils/constant/url";
import { saveSampleDetailAPI, saveSampleListingAPI } from "services/api/common";
import { getCookiesByName } from "utils/helpers";

const NocStep8 = ({ setStep, alreadyVisited }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState("");
  const [countryListing, setCountryListing] = useState([]);
  const [days, setDays] = useState({ startDate: "", endDate: "" });

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
      DateOfVisaApplication,
      VisaReferenceNumber,
      VisaCategory,
      VisaSubcategory,
      ApplicationType,
      VisaGrantDate,
      VisaStartDate,
      VisaEndDate,
      VisaDurationInDays,
      TravelCountryName,
      VisaStayFacility,
      VisaGrantCertificate,
    } = formValues;

    const formDatas = new FormData();
    const obj = {
      DateOfVisaApplication,
      VisaReferenceNumber,
      VisaCategory,
      VisaSubcategory,
      ApplicationType,
      VisaGrantDate,
      VisaStartDate,
      VisaEndDate,
      VisaDurationInDays,
      TravelCountryName,
      VisaStayFacility,
    };
    obj.Id = state.id;
    obj.VisaDurationInDays = state.VisaDurationInDays;
    formDatas.append("obj", JSON.stringify(obj));
    formDatas.append("visaGrantCertificate", VisaGrantCertificate);

    setLoading(true);
    try {
      const { data, isError, message } = await saveSampleDetailAPI(
        REQUEST_TYPES.POST,
        ENDPOINTS.SAVE_EXPACT_APPLICATION_VISAGRANT_DETAILS,
        formDatas
      );

      if (isError) {
        setLoading(false);
        warning(message);
      }
      if (!isError && data) {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const changeHandler = (e, fieldName) => {
    const { name, value } = e?.target || {};
    setState((prevState) => ({ ...prevState, [name]: value }));
    if (fieldName === "VisaStartDate") {
      setDays((prev) => ({ ...prev, startDate: e.target.value }));
    }
    if (fieldName === "VisaEndDate") {
      setDays((prev) => ({ ...prev, endDate: e.target.value }));
    }
  };

  const handlePrevious = () => {
    if (alreadyVisited === "yes") {
      setStep("Step7");
    } else {
      setStep("Step6");
    }
  };

  const obj = [
    { label: "Date of Visa Application", name: "DateOfVisaApplication", required: "true", type: "calendar" },
    { label: "Visa Reference Number", name: "VisaReferenceNumber", required: "true", type: "number" },
    {
      label: "Visa category",
      name: "VisaCategory",
      required: "true",
      type: "select",
      options: ["Business", "Work", "Tourist"],
    },
    {
      label: "Visa Subcategory",
      name: "VisaSubcategory",
      required: "true",
      type: "select",
      options: ["Individual", "Company"],
    },
    { label: "Application Type", name: "ApplicationType", required: "true", type: "input" },
    { label: "Visa Grant Date", name: "VisaGrantDate", required: "true", type: "calendar" },
    { label: "Visa Start Date", name: "VisaStartDate", required: "true", type: "calendar" },
    { label: "Visa End Date", name: "VisaEndDate", required: "true", type: "calendar" },
    { label: "Visa Duration(Days)", name: "VisaDurationInDays", disabled: true, required: "true", type: "number" },
    {
      label: "Travel Document Country",
      name: "TravelCountryName",
      required: "true",
      type: "select",
      options: countryListing.map((item) => item.countryName),
    },
    { label: "Stay Facility", name: "VisaStayFacility", required: "true", type: "input" },
    {
      label: "Visa Grant Certificate",
      name: "VisaGrantCertificate",
      required: "true",
      type: "file",
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

      const renderInput = (type = "text", disabled) => {
        const today = new Date().toISOString().split("T")[0];
        return (
          <input
            type={type}
            onChange={(e) => changeHandler(e, field.name)}
            value={state[commonProps?.name]}
            {...commonProps}
            placeholder=" "
            max={disabled ? today : undefined}
          />
        );
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
          {field.type === "calendar" &&
            renderInput("date", field.name == "VisaGrantDate" || field.name == "DateOfVisaApplication" ? true : false)}
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
    const formValues = getCookiesByName("expactapplicationformkeys", true);
    setState(formValues);
    (async function () {
      try {
        const { data, isError, message } = await saveSampleListingAPI(
          REQUEST_TYPES.GET,
          `${ENDPOINTS.GET_NATIONALITY_LISTING}`
        );

        if (isError) {
          warning(message);
        } else if (data) {
          setCountryListing(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  useEffect(() => {
    const calculateDateDifference = (startDate, endDate) => {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const differenceInMilliseconds = end - start;
      const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
      return differenceInDays;
    };
    const { startDate, endDate } = days;
    if (startDate && endDate) {
      const diffDays = calculateDateDifference(startDate, endDate);
      console.log(startDate, endDate, "both");
      setState((prevState) => ({
        ...prevState,
        VisaDurationInDays: diffDays,
      }));
    }
  }, [days.startDate, days.endDate]);
  return (
    <div className="noc-form">
      <div className="mineral-testing-table-header">
        <div className="text-green-600">Visa Grant Details</div>
        <ProgressPercentage percent={100} step={8} total={8}></ProgressPercentage>
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
          {loading ? (
            <Loader></Loader>
          ) : (
            <button type="submit" className="next-button">
              <div> Submit</div>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default NocStep8;
