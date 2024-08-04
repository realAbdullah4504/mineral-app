import React from "react";
import { useState, useEffect, useRef } from "react";
import ProgressPercentage from "components/UI/ProgressPercentage";
import { Loader } from "components";
import { UploadOutlined } from "@ant-design/icons";
import { message, ConfigProvider, Upload, Form } from "antd";
import { REQUEST_TYPES, ENDPOINTS } from "utils/constant/url";
import { saveSampleDetailAPI, saveSampleListingAPI, testApplicationDetailAPI } from "services/api/common";
import { setCookiesByName, getCookiesByName } from "utils/helpers";
import { expactApplicationForm } from "utils/constant/url";
import { Modal, Button } from "antd";

const baseUrl = "https://nurseries-bucket.s3.eu-central-1.amazonaws.com/";
const NocStep1 = ({ setStep }) => {
  const [toggle, setToggle] = useState({
    passportImage: false,
    colorPassportImage: false,
  });
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState("");
  const [nationalityListing, setNationalityListing] = useState([]);
  const isEdit = localStorage.getItem("NOCEditMode");
  const creationId = getCookiesByName("expactapplicationid");
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
    const {
      ExpatTitle,
      Gender,
      FirstName,
      MiddleName,
      LastName,
      DOB,
      FatherName,
      PermanentAddress,
      PassportNo,
      CountryName,
      NationalityName,
    } = formValues;
    const formDatas = new FormData();
    const obj = {
      ExpatTitle,
      Gender,
      FirstName,
      MiddleName,
      LastName,
      DOB,
      FatherName,
      PermanentAddress,
      PassportNo,
      CountryName,
      NationalityName,
    };

    obj.id = state.id || creationId;
    obj.DOB = state.dob;

    if (isEdit) {
      if (state.passportImagePrev !== state.passportImagePath) {
        obj.passportImage = state.passportImagePrev;
      } else {
        obj.passportImage = state.passportImagePath;
      }
      if (state.colorPassportImagePrev !== state.expatriatePersonalDetailImage) {
        obj.colorPassportImage = state.colorPassportImagePrev;
      } else {
        obj.colorPassportImage = state.expatriatePersonalDetailImage;
      }
    }
    if (!isEdit && state.passportImagePrev) {
      obj.passportImage = state.passportImagePrev;
    }

    if (!isEdit && state.colorPassportImagePrev) {
      obj.colorPassportImage = state.colorPassportImagePrev;
    }

    if (state.passportImagePrev !== state.passportImagePath) {
      formDatas.append("passportImage", state.passportImagePath);
    }
    if (state.colorPassportImagePrev !== state.expatriatePersonalDetailImage) {
      formDatas.append("colorPassportImage", state.expatriatePersonalDetailImage);
    }

    formDatas.append("obj", JSON.stringify(obj));
    if (!state.passportImagePath || !state.expatriatePersonalDetailImage) {
      warning("Upload all images");
    } else {
      setLoading(true);
      try {
        const { data, isError, message } = await saveSampleDetailAPI(
          REQUEST_TYPES.POST,
          ENDPOINTS.SAVE_EXPACT_APPLICATION_DETAILS,
          formDatas
        );
        if (isError) {
          setLoading(false);
          warning(message);
        }
        if (!isError && data) {
          setStep("Step2");
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    }
  };

  const obj = [
    { label: "Gender", name: "Gender", required: "true", type: "select", options: ["Male", "Female"] },
    { label: "Expat Title", name: "ExpatTitle", required: "true", type: "input" },
    { label: "First Name", name: "FirstName", required: "true", type: "input" },
    { label: "Middle Name(Optional)", name: "MiddleName", required: false, type: "input" },
    { label: "Last Name", name: "LastName", required: "true", type: "input" },
    { label: "Date Of Birth", name: "DOB", required: "true", type: "calendar" },
    { label: "Father Name", name: "FatherName", required: "true", type: "input" },
    { label: "Permanent Address", name: "PermanentAddress", required: "true", type: "input" },
    {
      label: "Nationality",
      name: "NationalityName",
      required: "true",
      type: "select",
      options: nationalityListing.map((item) => item.nationalityName),
    },
    {
      label: "Country",
      name: "CountryName",
      required: "true",
      type: "select",
      options: nationalityListing.map((item) => item.countryName),
    },
    { label: "Passport No.", name: "PassportNo", required: "true", type: "input" },
    { label: "Passport Image.", name: "passportImage", required: "true", type: "file" },
    {
      label: "Colored Passport Size Picture",
      name: "colorPassportImage",
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

      const renderInput = (type = "text") => {
        const name = commonProps?.name || "";
        const camelCaseName = name ? toCamelCase(name) : "";
        let value = state[name] || state[camelCaseName] || "";
        if (type == "date") {
          value = state["dob"]?.split("T")[0] || "";
        }
        return (
          <input
            type={type}
            value={value}
            onChange={(e) => changeHandler(e)}
            required={true}
            {...commonProps}
            placeholder=" "
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
      const imgurl = state[field.name == "passportImage" ? "passportImagePath" : "expatriatePersonalDetailImage"];

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
              {/* <input type="file" onChange={changeHandler} {...commonProps} accept="image/*,application/pdf,text/*" /> */}
            </>
          )}
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
  const handleChange = (fieldName, info) => {
    const newFileList = info.fileList;
    if (newFileList.length > 0) {
      const file = newFileList[0].originFileObj;
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        setToggle((prev) => ({ ...prev, [fieldName]: true }));
        if (fieldName === "passportImage") {
          setState((prev) => ({ ...prev, passportImagePath: file || "" }));
        }
        if (fieldName === "colorPassportImage") {
          setState((prev) => ({ ...prev, expatriatePersonalDetailImage: file || "" }));
        }
      });
      reader.readAsDataURL(file);
    } else {
      if (fieldName === "passportImage") {
        setState((prev) => ({ ...prev, passportImagePath: "" }));
      }
      if (fieldName === "colorPassportImage") {
        setState((prev) => ({ ...prev, expatriatePersonalDetailImage: "" }));
      }
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (e.target.name == "DOB") {
      setState((prevState) => ({
        ...prevState,
        dob: value,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
    // if (e.target.files && e.target.files.length > 0) {
    //   const reader = new FileReader();
    //   reader.addEventListener("load", () => {
    //     setSelectedImage(reader.result?.toString() || userAvatar);
    //     setIsBaseUrl(true);
    //     setIsEditButton(true);
    //   });
    //   reader.readAsDataURL(e.target.files[0]);
    // }
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
            passportImagePrev: data.passportImagePath,
            colorPassportImagePrev: data.expatriatePersonalDetailImage,
          }));
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
    (async function () {
      try {
        const { data, isError, message } = await saveSampleListingAPI(
          REQUEST_TYPES.GET,
          `${ENDPOINTS.GET_NATIONALITY_LISTING}`
        );

        if (isError) {
          warning(message);
        } else if (data) {
          setNationalityListing(data);
        }
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <>
      <div className="noc-form">
        <div className="mineral-testing-table-header">
          <div className="text-green-600">Expatriate Personal Details</div>
          <ProgressPercentage percent={12} step={1} total={8}></ProgressPercentage>
        </div>
        {contextHolder}
        <form className="space-y-4 " onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10">{renderFormItems()}</div>
          <div className="button-group-mineral-form" style={{ marginTop: "30px", marginBottom: "30px" }}>
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
    </>
  );
};

export default NocStep1;
