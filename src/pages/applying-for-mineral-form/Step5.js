import React, { useState } from "react";
import { ENDPOINTS, REQUEST_TYPES } from "utils/constant/url";
import { commonAPIs } from "services/api/common";
import { Loader } from "components";
import { message, ConfigProvider } from "antd";

const ShipmentForm = ({ setStep }) => {
  const [state, setState] = useState({
    SampleSubmissionMode: "",
    ShipmentBy: "",
    shipmentReceiptImage: "",
    TrackingNumber: "",
  });
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const warning = (message = "This is a warning message") => {
    messageApi.open({
      type: "warning",
      content: message,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { SampleSubmissionMode, ShipmentBy, shipmentReceiptImage, TrackingNumber } = state;
    const formData = new FormData();
    const Id = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("id") : "";
    let obj = { Id, SampleSubmissionMode, ShipmentBy, TrackingNumber };
    formData.append("obj", JSON.stringify(obj));
    formData.append("shipmentReceiptImage", shipmentReceiptImage || "");
    try {
      setLoading(true);
      const { data, isError, message } = await commonAPIs(
        REQUEST_TYPES.POST,
        `${ENDPOINTS.SAVE_SHIPMENT_INFO}`,
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

  const obj = [
    {
      label: "Mode of Sample Submission",
      name: "SampleSubmissionMode",
      required: "false",
      type: "select",
      options: [
        { name: "Select one", value: "" },
        { name: "In-person", value: "InPerson" },
        { name: "Courier", value: "Courier" },
      ],
    },
    { label: "Shipment by", name: "ShipmentBy", required: "false", type: "input" },
    { label: "Upload Receipt", name: "shipmentReceiptImage", required: "false", type: "file" },
    {
      label: "Tracking Number",
      name: "TrackingNumber",
      required: "false",
      type: "input",
    },
  ];
  const changeHandler = (e) => {
    const { name, value } = e?.target || {};
    if (name !== "shipmentReceiptImage") {
      setState({ ...state, [name]: value });
    } else {
      setState({ ...state, ["shipmentReceiptImage"]: e.target.files[0] });
    }
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

      const renderInput = (type = "text") => (
        <input
          type={type}
          onChange={(e) => changeHandler(e)}
          value={state[field.name]}
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
      console.group(state, "state");
      return (
        <div key={field.name} className="relative mt-2 w-full">
          {field.type === "input" && renderInput()}
          {field.type === "calendar" && renderInput("date")}
          {field.type === "number" && renderInput("number")}
          {field.type === "file" && <input type="file" onChange={(e) => changeHandler(e)} {...commonProps} />}
          {field.type === "select" && (
            <>
              {renderLabel()}
              <select onChange={(e) => changeHandler(e)} value={state[field?.name]} {...commonProps}>
                <option disabled style={{ opacity: 0.5 }}>
                  Select {field.label.toLowerCase()}
                </option>
                {field.options.map((option) => (
                  <option key={option?.value} value={option?.value}>
                    {option?.name}
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
      <div className="mineral-form">
        <div className="mineral-testing-title">Shipment Details</div>
        <form className="space-y-4 " onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10">{renderFormItems()}</div>
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
    </ConfigProvider>
  );
};

export default ShipmentForm;
