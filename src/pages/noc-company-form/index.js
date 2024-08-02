import React, { useEffect } from "react";
import { useState } from "react";
import { testApplicationDetailAPI } from "services/api/common";
import { REQUEST_TYPES, ENDPOINTS } from "utils/constant/url";
import { message, ConfigProvider, Upload } from "antd";
import { saveSampleDetailAPI } from "services/api/common";
import { Loader } from "components";
import { saveSampleListingAPI } from "services/api/common";
import { getCookiesByName, setCookiesByName } from "utils/helpers";
import { Button } from "antd";

function NocAddListCompany() {
  const [messageApi, contextHolder] = message.useMessage();
  const [citylisting, setCitylisting] = useState([]);
  const [listing, setListing] = useState([]);
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState({
    companyRegistrationCertificates: false,
    CompanyTaxRegistrationCertificate: false,
    logoPath: false,
  });
  const baseUrl = "https://nurseries-bucket.s3.eu-central-1.amazonaws.com/";
  const warning = (message = "This is a warning message") => {
    messageApi.open({
      type: "warning",
      content: message,
    });
  };
  const isEdit = localStorage.getItem("SponsorEditMode");
  const obj = {
    approved: [
      {
        label: "Company Name",
        name: "companyName",
        required: "false",
        type: "input",
      },
      {
        label: "Registration Type",
        name: "registrationType",
        required: "false",
        type: "select",
        options: [
          { name: "Company", value: "Company" },
          { name: "Individual", value: "Individual" },
        ],
      },
      {
        label: "Registration City",
        name: "cityId",
        required: "false",
        type: "select",
        options: citylisting.map((item) => {
          return { name: item.cityName, id: item.id };
        }),
      },
      {
        label: "Registration Year",
        name: "registrationYear",
        required: "false",
        type: "calendar",
      },
      {
        label: "Business Domain",
        name: "businessDomain",
        required: "false",
        type: "select",
        options: [
          { name: "Mining", value: "Mining" },
          { name: "Services", value: "Services" },
        ],
      },
      { label: "NTN/FTN Number", name: "ntnNumber", required: "false", type: "input" },
      { label: "Company Logo", name: "logoPath", required: "false", type: "file" },
      {
        label: "Company's Registration Certificate",
        name: "companyRegistrationCertificates",
        required: "false",
        type: "file",
      },
      {
        label: "Taxpayer Registration Certificate",
        name: "CompanyTaxRegistrationCertificate",
        required: "false",
        type: "file",
      },
    ],
    "Contact Details": [
      { label: "Address", name: "registrationAddress", required: "false", type: "input" },
      { label: "Phone Number", name: "phoneNumber", required: "false", type: "number" },
      { label: "Mobile Number", name: "mobileNumber", required: "false", type: "number" },
      { label: "Email", name: "email", required: "false", type: "input" },
      { label: "Fax No.", name: "faxNumber", required: "false", type: "input" },
      { label: "Contact Person Name", name: "contactPersonName", required: "false", type: "input" },
    ],
  };
  const changeHandler = (e) => {
    const { name, value } = e?.target || {};
    if (e.target.name == "PurposeofVisit") {
      setState((prev) => ({ ...prev, purposeofVisit: value }));
    }
    if (e.target.name == "equipment-required") {
      setState((prev) => ({ ...prev, equipment: ["notempty"] }));
    }
    setState((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());

    const {
      registrationType,
      companyName,
      cityId,
      registrationYear,
      businessDomain,
      registrationAddress,
      phoneNumber,
      mobileNumber,
      RegistrationType,
      email,
      faxNumber,
      contactPersonName,
      ntnNumber,
    } = formValues;

    const formDatas = new FormData();

    const year = registrationYear.split("-")[0];
    const obj = {
      registrationType,
      companyName,
      cityId,
      registrationYear: year,
      businessDomain,
      registrationAddress,
      phoneNumber,
      mobileNumber,
      RegistrationType,
      email,
      faxNumber,
      contactPersonName,
      ntnNumber,
    };
    if (isEdit && state.companyPrevReg !== state.companyRegistrationCertificates) {
      obj.companyRegistrationCertificates = state.companyPrevReg;
    }
    if (isEdit && state.companyTaxPrevReg !== state.CompanyTaxRegistrationCertificate) {
      obj.CompanyTaxRegistrationCertificate = state.companyTaxPrevReg;
    }
    if (isEdit && state.logoPrev !== state.logoPath) {
      obj.logoPath = state.logoPrev;
    }
    formDatas.append("obj", JSON.stringify(obj));
    formDatas.append("companyRegistrationCertificates", state.companyRegistrationCertificates || "");
    formDatas.append("CompanyTaxRegistrationCertificate", state.CompanyTaxRegistrationCertificate || "");
    formDatas.append("logoPath", state.logoPath || "");

    try {
      setLoading(true);
      const { data, isError, message } = await saveSampleDetailAPI(
        REQUEST_TYPES.POST,
        `${ENDPOINTS.SAVE_NOC_SPONSOR_FORM}`,
        formDatas
      );

      if (isError) {
        setLoading(false);
        warning(message);
      } else if (data) {
        setLoading(false);
        setCitylisting([]);
        event.target.reset();
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };
  useEffect(() => {
    const recordId = getCookiesByName("companyEditRecordId");
    async function fetchData() {
      setLoading(true);
      try {
        const { data, isError, message } = await saveSampleListingAPI(REQUEST_TYPES.GET, ENDPOINTS.NOC_SPONSOR_Listing);
        if (isError) {
          setLoading(false);
          warning(message);
        }
        if (!isError && data) {
          const matchingRecord = data.find((record) => record.id == recordId);
          console.log(matchingRecord, "matchingRecord");
          setState(matchingRecord || {});
          setState((prev) => ({
            ...prev,
            companyPrevReg: state.companyRegistrationCertificates,
            companyTaxPrevReg: state.CompanyTaxRegistrationCertificate,
            logoPrev: state.logoPath,
          }));
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    }

    fetchData();
  }, []);

  const renderFormItems = (key, obj) => {
    console.log(obj, "object");
    return obj.map((field) => {
      const commonProps = {
        name: field.name,
        id: field.name,
        className:
          "border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0",
      };

      const name = commonProps?.name || "";
      console.log(name, "namecommon");
      console.log(state, "statecoming");
      let value = state[name] || "";

      console.log(value, "valuecoming");
      console.log(state[name], "statename");
      const renderInput = (type = "text") => {
        console.log(value, "valuesdate");
        if (type == "date") {
          value = `${value}-01-01`;
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
          field.name == "companyRegistrationCertificates"
            ? "companyRegistrationCertificates"
            : field.name == "CompanyTaxRegistrationCertificate"
            ? "CompanyTaxRegistrationCertificate"
            : field.name == "logoPath"
            ? "logoPath"
            : ""
        ];

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
              <select {...commonProps} value={state[field.name]} onChange={(e) => changeHandler(e)}>
                <option value="" disabled style={{ opacity: 0.5 }}>
                  Select {field.label.toLowerCase()}
                </option>
                {field.options.map((option) => (
                  <option key={option.id} value={option.id}>
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
  const handleChange = (fieldName, info) => {
    const newFileList = info.fileList;
    if (newFileList.length > 0) {
      const file = newFileList[0].originFileObj;
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        setToggle((prev) => ({ ...prev, [fieldName]: true }));
        if (fieldName === "logoPath") {
          setState((prev) => ({ ...prev, logoPath: file || "" }));
        }
        if (fieldName === "companyRegistrationCertificates") {
          setState((prev) => ({ ...prev, companyRegistrationCertificates: file || "" }));
        }
        if (fieldName === "CompanyTaxRegistrationCertificate") {
          setState((prev) => ({ ...prev, CompanyTaxRegistrationCertificate: file || "" }));
        }
      });
      reader.readAsDataURL(file);
    } else {
      if (fieldName === "logoPath") {
        setState((prev) => ({ ...prev, logoPath: "" }));
      }
      if (fieldName === "companyRegistrationCertificates") {
        setState((prev) => ({ ...prev, companyRegistrationCertificates: "" }));
      }
      if (fieldName === "CompanyTaxRegistrationCertificate") {
        setState((prev) => ({ ...prev, CompanyTaxRegistrationCertificate: "" }));
      }
    }
  };
  console.log(state, "staterecord");

  return (
    <div className="noc-company-form" style={{ width: "80%", margin: "auto" }}>
      <div className="noc-company-status mt-10 mb-10">
        <div className="text-sm text-gray-500">Company Status</div>
        <div className="font-bold text-lg">Company Approved</div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.entries(obj).map(([key, value]) => (
          <div key={key} className="mt-8">
            {key === "Contact Details" ? (
              <div>
                <h1 className="text-4xl font-bold text-green-700 mb-4">{key}</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{renderFormItems(key, value)}</div>
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-8">{renderFormItems(key, value)}</div>
            )}
          </div>
        ))}
        <div className="w-full flex justify-center">
          {loading ? (
            <Loader></Loader>
          ) : (
            <button
              type="submit"
              className="bg-[#009969] hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default NocAddListCompany;
