import React, { useState, useEffect } from "react";
import { Loader } from "components";
import { message, ConfigProvider, Button, Upload } from "antd";
import { REQUEST_TYPES, ENDPOINTS } from "utils/constant/url";
import { saveSampleDetailAPI, saveSampleListingAPI, testApplicationDetailAPI } from "services/api/common";
import { setCookiesByName, getCookiesByName } from "utils/helpers";
import { expactApplicationForm } from "utils/constant/url";
const NocForm = ({ setStep }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [toggle, setToggle] = useState({
    TitleGrantLetter: false,
    SubLeaseLetter: false,
    depositSlip: false,
  });
  const baseUrl = "https://nurseries-bucket.s3.eu-central-1.amazonaws.com/";
  const [applyAs, setApplyAs] = useState("Normal");
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(false);
  const [bankListing, setBankListing] = useState([]);
  const warning = (message = "This is a warning message") => {
    messageApi.open({
      type: "warning",
      content: message,
    });
  };

  const handleApplyAsChange = (value) => {
    setState((prevState) => ({
      ...prevState,
      nocType: value,
    }));
    setApplyAs(value);
  };

  const obj1 = {
    Normal: {
      Details: [
        { label: "Title/License No.", name: "LicenseNumber", required: "true", type: "text" },
        { label: "Title Issue Date", name: "TitleIssueDate", required: "true", type: "calendar" },
        { label: "Title Expiry Date", name: "TitleExpireDate", required: "true", type: "calendar" },
        { label: "Title Grant Letter", name: "TitleGrantLetter", required: "true", type: "file" }, //found
        {
          label: "Sub-Lease Issue Date (If Applicable) (Optional)",
          name: "SubLeaseIssueDate",
          required: "false",
          type: "calendar",
        },
        {
          label: "Sub-Lease Expiry Date (If Applicable) (Optional)",
          name: "SubLeaseExpireDate",
          required: "false",
          type: "calendar",
        },
        {
          label: "Mining Sub-Lease Letter (If Applicable) (Optional)", //found
          name: "SubLeaseLetter",
          required: "false",
          type: "file",
        },
      ],
    },
    Urgent: {
      Details: [
        { label: "Title/License No.", name: "LicenseNumber", required: "true", type: "text" },
        { label: "Title Issue Date", name: "TitleIssueDate", required: "true", type: "calendar" },
        { label: "Title Expiry Date", name: "TitleExpireDate", required: "true", type: "calendar" },
        { label: "Title Grant Letter", name: "TitleGrantLetter", required: "true", type: "file" }, //found
        {
          label: "Sub-Lease Issue Date (If Applicable) (Optional)",
          name: "SubLeaseIssueDate",
          required: "false",
          type: "calendar",
        },
        {
          label: "Sub-Lease Expiry Date (If Applicable) (Optional)",
          name: "SubLeaseExpireDate",
          required: "false",
          type: "calendar",
        },
        {
          label: "Mining Sub-Lease Letter (If Applicable) (Optional)", //found
          name: "SubLeaseLetter",
          required: "false",
          type: "file",
        },
      ],
      "Deposit Details": [
        { label: "Deposit Slip", name: "depositSlip", required: "true", type: "file" },
        {
          label: "Deposit Bank",
          name: "BankId",
          required: "true",
          type: "select",
          options: bankListing.map((item) => {
            return { name: item.name, value: item.id };
          }),
        },
        {
          label: "Branch Name",
          name: "BranchName",
          required: "true",
          type: "text",
        },
        { label: "Deposit Date", name: "DepositDate", required: "true", type: "calendar" },
        { label: "Deposit Amount in Number", name: "DepositAmountInNumber", required: "true", type: "number" },
        { label: "Deposit Amount in Words", name: "DepositAmountInWords", required: "true", type: "text" },
      ],
    },
  };

  const renderFormItems = (key, obj) => {
    return obj.map((field) => {
      const commonProps = {
        name: field.name,
        id: field.name,
        className:
          "border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0",
      };
      const toCamelCase = (str) => {
        return str.charAt(0).toLowerCase() + str.slice(1).replace(/-./g, (match) => match.charAt(1).toUpperCase());
      };

      const renderInput = (type = "text") => {
        const name = commonProps?.name || "";
        const camelCaseName = name ? toCamelCase(name) : "";
        let value = state[name] || state[camelCaseName] || "";
        if (type == "date") {
          value = state["dob"]?.split("T")[0] || state["DOB"]?.split("T")[0] || "";
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

      const imgurl =
        state[
          field.name == "TitleGrantLetter"
            ? "titleGrantLetterPath"
            : field.name == "SubLeaseLetter"
            ? "subLeaseLetterPath"
            : field.name == "depositSlip"
            ? "depositSlipPath"
            : ""
        ];

      return (
        <div key={field.name} className="relative mt-2 w-full">
          {field.type === "text" && renderInput()}
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
  const isEdit = localStorage.getItem("NOCEditMode");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());

    const {
      LicenseNumber,
      NOCType,
      TitleIssueDate,
      TitleExpireDate,
      SubLeaseIssueDate,
      SubLeaseExpireDate,
      BankId,
      BranchName,
      DepositDate,
      DepositAmountInNumber,
      DepositAmountInWords,
    } = formValues;

    const formDatas = new FormData();
    const obj = {};
    const possibleKeys = {
      NOCType,
      LicenseNumber,
      TitleIssueDate,
      TitleExpireDate,
      SubLeaseIssueDate,
      SubLeaseExpireDate,
      BankId,
      BranchName,
      DepositDate,
      DepositAmountInNumber,
      DepositAmountInWords,
    };

    Object.keys(possibleKeys).forEach((key) => {
      if (possibleKeys[key] !== undefined && possibleKeys[key] !== null) {
        obj[key] = possibleKeys[key];
      }
    });

    if (isEdit && state.subleaseImg !== state.subLeaseLetterPath) {
      obj.SubLeaseLetter = state.SubLeaseLetter;
    }
    if (isEdit && state.grantImg !== state.titleGrantLetterPath) {
      obj.TitleGrantLetter = state.TitleGrantLetter;
    }
    if (isEdit && state.depositImg !== state.depositSlipPath) {
      obj.depositSlip = state.depositSlip;
    }
    formDatas.append("obj", JSON.stringify(obj));
    if (state.titleGrantLetterPath) formDatas.append("TitleGrantLetter", state.titleGrantLetterPath);
    if (state.subLeaseLetterPath) formDatas.append("SubLeaseLetter", state.subLeaseLetterPath);
    if (state.depositSlipPath) formDatas.append("depositSlip", state.depositSlipPath);

    try {
      const { data, isError, message } = await saveSampleDetailAPI(
        REQUEST_TYPES.POST,
        ENDPOINTS.SAVE_EXPACT_CREATE_FORM_APPLICATION,
        formDatas
      );
      if (isError) {
        setLoading(false);
        warning(message);
      }
      if (!isError && data) {
        setLoading(false);
        // setCookiesByName("expactapplicationid", data?.id, true);
        setStep("Step1");
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;

    // if (e.target.files && e.target.files.length > 0) {
    //   const reader = new FileReader();
    //   reader.addEventListener("load", () => {
    //     setSelectedImage(reader.result?.toString() || userAvatar);
    //     setIsBaseUrl(true);
    //     setIsEditButton(true);
    //   });
    //   reader.readAsDataURL(e.target.files[0]);
    // }

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleChange = (fieldName, info) => {
    const newFileList = info.fileList;
    if (newFileList.length > 0) {
      const file = newFileList[0].originFileObj;
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        setToggle((prev) => ({ ...prev, [fieldName]: true }));
        if (fieldName === "TitleGrantLetter") {
          setState((prev) => ({ ...prev, titleGrantLetterPath: file || "" }));
        }
        if (fieldName === "SubLeaseLetter") {
          setState((prev) => ({ ...prev, subLeaseLetterPath: file || "" }));
        }
        if (fieldName === "depositSlip") {
          setState((prev) => ({ ...prev, depositSlipPath: file || "" }));
        }
      });
      reader.readAsDataURL(file);
    } else {
      if (fieldName === "TitleGrantLetter") {
        setState((prev) => ({ ...prev, titleGrantLetterPath: "" }));
      }
      if (fieldName === "SubLeaseLetter") {
        setState((prev) => ({ ...prev, subLeaseLetterPath: "" }));
      }
      if (fieldName === "depositSlip") {
        setState((prev) => ({ ...prev, depositSlipPath: "" }));
      }
    }
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
            subleaseImg: data.subLeaseLetterPath,
            grantImg: data.titleGrantLetterPath,
            depositImg: data.depositSlip,
          }));
        }
      } catch (error) {
        console.log(error.message);
      }
    })();

    (async function () {
      try {
        setLoading(true);
        const { data, isError, message } = await saveSampleListingAPI(
          REQUEST_TYPES.GET,
          `${ENDPOINTS.GET_BANK_LISTING}`
        );

        if (isError) {
          setLoading(false);
          warning(message);
        } else if (data) {
          setLoading(false);
          setBankListing(data);
        }
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    })();
  }, []);
  console.log(state, "state");
  return (
    <div>
      <div>
        Expatraite Security Clearance <span className="font-bold">Noc Application</span>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="text-2xl text-green-700 my-10 font-bold">NOC Application Details</div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 mb-10">
          <div className="relative mt-2 w-full">
            <label
              htmlFor="ApplyAs"
              className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
            >
              NOC Type
            </label>
            <select
              id="ApplyAs"
              className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
              required={true}
              name="NOCType"
              value={state["nocType"]}
              onChange={(e) => handleApplyAsChange(e.target.value)}
            >
              <option value="" disabled selected style={{ opacity: 0.5 }}>
                Select an option
              </option>
              <option value="Normal">Normal</option>
              <option value="Urgent">Urgent</option>
            </select>
          </div>
        </div>
        <div className="">
          {Object.entries(obj1[applyAs]).map(([key, value]) => (
            <div key={key} className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
              {key === "Deposit Details" && <h1 className="col-span-3 text-4xl font-bold text-green-700">{key}</h1>}
              {renderFormItems(key, value)}
            </div>
          ))}
        </div>
        <div>
          {applyAs === "Normal" ? (
            <div>
              <h1 className="font-bold">Note</h1>
              <p>Normal Application takes 1-2 months to complete and is usually valid for a year.</p>
              <p>There is no fee required for normal application.</p>
            </div>
          ) : (
            <div>
              <h1 className="font-bold">Note</h1>
              <p>Urgent application takes up to 7 days to complete and is valid for only 3 months.</p>
              <p>
                There is a fee of <span className="font-bold">100$</span> that needs to be submitted to the BOI account{" "}
                <span className="font-bold">#3035205436</span>.
              </p>
              <p>The deposit slip has to be attached along with the application.</p>
            </div>
          )}
        </div>
        <div className="button-group-mineral-form" style={{ marginTop: "30px", marginBottom: "30px" }}>
          <button type="button" className="next-button">
            <div>
              Cancel
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
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </button>
          <button type="submit" className="next-button">
            <div>
              Start Application
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
        </div>
      </form>
    </div>
  );
};

export default NocForm;
