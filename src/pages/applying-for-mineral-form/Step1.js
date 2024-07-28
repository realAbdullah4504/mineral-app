import React, { useState, useEffect } from "react";
import { Loader } from "components";
import { ENDPOINTS, REQUEST_TYPES } from "utils/constant/url";
import { testApplicationDetailAPI } from "services/api/common";
import { getCookiesByName, setCookiesByName } from "utils/helpers";
import { message, ConfigProvider  } from "antd";

const Step1 = ({ setStep }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({applyAs: 'Individual'});

  useEffect(()=> {
   const applicationDetail = getCookiesByName('testApplication', true);
   if(Object.keys(applicationDetail).length){
     let payload = {};
     const { id, applyAs, companyNameOrName, cnicOrNTNNumber, businessDomain, address, mobileNumber, email } = applicationDetail;
    if(applicationDetail?.applyAs === "Individual"){
      payload = {applyAs, companyNameOrName, cnicOrNTNNumber, address, mobileNumber, email, id};
    } else{
      payload = {...payload, businessDomain, id};
    }
    setState({...state, ...payload})
   }
  },[]);
  const warning = (message = "This is a warning message") => {
    messageApi.open({
      type: "error",
      content: message,
    });
  };
  const changeHandler = (e) => {
    const {name, value} = e?.target || {};
    setState({...state, [name]: value})
  }
  const obj1 = {
    Individual: {
      Details: [
        // { label: "Title/License No.", name: "license-no", required: "true", type: "text" },
        {
          label: "Name",
          name: "companyNameOrName",
          required: "true",
          type: "input",
        },
        {
          label: "CNIC",
          name: "cnicOrNTNNumber",
          required: "true",
          type: "input",
        },
        { label: "Address", name: "address", required: "true", type: "input" },
        {
          label: "Mobile Number",
          name: "mobileNumber",
          required: "true",
          type: "number",
        },
        { label: "Email", name: "email", required: "true", type: "input" },
      ],
    },
    Company: {
      Details: [
        // { label: "Title/License No.", name: "license-no", required: "true", type: "text" },
        {
          label: "Company Name",
          name: "companyNameOrName",
          required: "true",
          type: "input",
        },
        {
          label: "NTN/FTN Number",
          name: "cnicOrNTNNumber",
          required: "true",
          type: "input",
        },
        { label: "Address", name: "address", required: "true", type: "input" },
        {
          label: "Contact Number",
          name: "mobileNumber",
          required: "true",
          type: "input",
        },
        { label: "Email", name: "email", required: "true", type: "input" },
        {
          label: "Business Domain",
          name: "businessDomain",
          required: "true",
          type: "select",
          options: ["Mining", "Services"],
        },
      ],
    },
  };

  const renderFormItems = (key, obj) => {
    return obj.map((field) => {
      const commonProps = {
        name: field.name,
        id: field.name,
        require: field.required,
        className:
          "border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0",
      };

      const renderInput = (type = "text") => (
        <input type={type} onChange={(e)=> changeHandler(e)} value={state[commonProps?.name]} {...commonProps} placeholder=" " />
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
          {field.type === "text" && renderInput()}
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
          {field.type === "textarea" && (
            <textarea {...commonProps} placeholder=" " />
          )}
          {field.type !== "select" && renderLabel()}
        </div>
      );
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
    const {id, applyAs, companyNameOrName, cnicOrNTNNumber, businessDomain, address, mobileNumber, email} = state;
    let payload = {};
    if(applyAs === "Individual"){
      payload = {applyAs, companyNameOrName, cnicOrNTNNumber, address, mobileNumber, email};
    } else{
      payload = {...payload, businessDomain};
    }
    if(id){
      payload = {...payload, id};
    }
    try {
      const { data, isError, message } = await testApplicationDetailAPI(
        REQUEST_TYPES.POST,
        ENDPOINTS.TEST_APPLICATION_DETAILS,
        payload
      );
      if (isError) {
        setLoading(false);
        warning(message);
      }
      if (!isError && data) {
        setLoading(false);
        setCookiesByName('testApplication', data, true);
        setStep('step2')
      }
    } catch (error) {
      setLoading(false)
      console.log(error.message);
    }
  };

  return (
    <ConfigProvider>
      <div>
        Expatraite Security Clearance{" "}
        <span className="font-bold">Noc Application</span>
      </div>
      {contextHolder}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="text-2xl text-green-700 my-10 font-bold">
          NOC Application Details
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 mb-10">
          <div className="relative mt-2 w-full">
            <label
              htmlFor="ApplyAs"
              className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
            >
              Apply As
            </label>
            <select
              id="ApplyAs"
              className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
              required={true}
              name="applyAs"
              onChange={(e) => changeHandler(e)}
              value={state?.applyAs}
            >
              <option value="" disabled selected style={{ opacity: 0.5 }}>
                Select an option
              </option>
              <option value="Individual">Individual</option>
              <option value="Company">Company</option>
            </select>
          </div>
        </div>
        <div className="">
          {Object.entries(obj1[state?.applyAs]).map(([key, value]) => (
            <div
              key={key}
              className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10"
            >
              {key === "Deposit Details" && (
                <h1 className="col-span-3 text-4xl font-bold text-green-700">
                  {key}
                </h1>
              )}
              {renderFormItems(key, value)}
            </div>
          ))}
        </div>
        <div
          className="button-group-mineral-form"
          style={{ marginTop: "30px", marginBottom: "30px" }}
        >
        {loading? 
            <Loader/> :
          <button type="submit" className="next-button">
            <div>
              Next
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
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </button>
          }
        </div>
      </form>
    </ConfigProvider>
  );
};

export default Step1;
