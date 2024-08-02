import React, { useState, useEffect } from "react";
import ProgressPercentage from "components/UI/ProgressPercentage";
import { Loader } from "components";
import { message, ConfigProvider } from "antd";
import { REQUEST_TYPES, ENDPOINTS } from "utils/constant/url";
import { Empty } from "antd";
import ListingNoc from "./ListingForms";
import { getCookie } from "services/session/cookies";
import { commonAPIs } from "services/api/common";
const NocStep4 = ({ setStep }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const [listLoading, setListLoading] = useState(false);
  const [listing, setListing] = useState([]);
  const [record, setRecord] = useState({ equipmentType: "", equipmentName: "" });
  const nocApplicationId = getCookie("expactapplicationid") || "";
  const warning = (message = "This is a warning message") => {
    messageApi.open({
      type: "warning",
      content: message,
    });
  };
  const handleNext = () => {
    setStep("Step5");
  };
  const handlePrevious = () => {
    setStep("Step3");
  };
  const fetchData = async () => {
    setListLoading(true);
    try {
      const { data, isError, message } = await commonAPIs(
        REQUEST_TYPES.GET,
        `${ENDPOINTS.GET_NOC_APPLICATION_BY_ID}?NocApplicationId=${nocApplicationId}`
      );
      if (isError) {
        setListLoading(false);
        warning(message);
      }
      if (!isError && data) {
        setListLoading(false);
        setListing(data?.nocApplicationEquipments || []);
      }
    } catch (error) {
      setListLoading(false);
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const obj = [
    {
      label: "Equipment Type",
      name: "equipmentType",
      required: "true",
      type: "select",
      options: [
        { label: "select one", value: "" },
        { label: "Location Equipment", value: "LocationEquipment" },
        { label: "Communication Equipment", value: "CommunicationEquipment" },
        { label: "Geophysical Equipment", value: "GeophysicalEquipment" },
      ],
    },
    {
      label: "Equipment Name",
      name: "equipmentName",
      required: "true",
      type: "input",
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
          value={record ? record[field.name] : ""}
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
      const changeHandler = (e) => {
        const { name, value } = e?.target || {};
        setRecord({
          ...record,
          [name]: value,
        });
      };
      return (
        <div key={field.name} className="relative mt-2 w-full">
          {field.type === "input" && renderInput()}
          {field.type === "calendar" && renderInput("date")}
          {field.type === "number" && renderInput("number")}
          {field.type === "file" && <input type="file" value={record ? record[field.name] : ""} {...commonProps} />}
          {field.type === "select" && (
            <>
              {renderLabel()}
              <select onChange={(e) => changeHandler(e)} {...commonProps} value={record ? record[field.name] : ""}>
                <option value="" disabled style={{ opacity: 0.5 }}>
                  Select {field.label.toLowerCase()}
                </option>
                {field.options.map((option) => (
                  <option key={option?.value} value={option?.value}>
                    {option?.label}
                  </option>
                ))}
              </select>
            </>
          )}
          {field.type === "textarea" && (
            <textarea
              onChange={(e) => changeHandler(e)}
              {...commonProps}
              value={record ? record[field.name] : ""}
              placeholder=" "
            />
          )}
          {field.type !== "select" && renderLabel()}
        </div>
      );
    });
  };

  const handleAddForm = async (event) => {
    event.preventDefault();
    const { equipmentType, equipmentName } = record;
    let nocApplicationEquipment = [];
    const cloneData = [...listing];
    if (record?.id) {
      const index = cloneData.findIndex((x) => x?.id === record?.id);
      if (index !== -1) {
        cloneData[index] = record;
      }
      nocApplicationEquipment = [...cloneData];
    } else {
      const newRecord = {
        nocApplicationId: nocApplicationId,
        equipmentName,
        equipmentType,
      };
      nocApplicationEquipment = [newRecord, ...cloneData];
    }
    const payload = {
      nocApplicationId: nocApplicationId,
      equipmentRequired: true,
      nocApplicationEquipment,
    };
    setLoading(true);
    try {
      const { data, isError, message } = await commonAPIs(REQUEST_TYPES.POST, ENDPOINTS.SAVE_EQUIPMENT_DETAIL, payload);
      if (isError) {
        setLoading(false);
        warning(message);
      }
      if (!isError && data) {
        setLoading(false);
        setRecord({
          equipmentName: "",
          equipmentType: "",
        });
        fetchData();
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };
  const handleEditClick = (record) => {
    setRecord(record);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Equipment Name",
      dataIndex: "equipmentName",
      key: "equipmentName",
    },
    {
      title: "Equipment Type",
      dataIndex: "equipmentType",
      key: "equipmentType",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div onClick={() => handleEditClick(record)} style={{ cursor: "pointer", color: "#1677ff" }}>
          Edit
        </div>
      ),
    },
  ];

  return (
    <ConfigProvider>
      <div className="noc-form">
        <div className="mineral-testing-table-header">
          <div className="text-green-600">Equipment Listing</div>
          <ProgressPercentage percent={50} step={4} total={8}></ProgressPercentage>
        </div>
        {contextHolder}
        <form className="space-y-4 " onSubmit={handleAddForm}>
          {listLoading ? (
            <Loader />
          ) : listing.length ? (
            <ListingNoc dataSource={listing} setSelectedRecord={setRecord} columns={columns}></ListingNoc>
          ) : (
            <Empty />
          )}
          <div className="mineral-testing-table-header">
            <div className="text-green-600">Equipment Details</div>
            {loading ? (
              <Loader />
            ) : (
              <button type="submit" className="next-button">
                {record?.id ? "Update Form" : "Add Form"}
                <svg
                  style={{ opacity: "0.5", paddingBottom: "5px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </button>
            )}
          </div>

          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10">{renderFormItems()}</div>
        </form>
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
          <button type="submit" className="next-button" onClick={handleNext}>
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
      </div>
    </ConfigProvider>
  );
};

export default NocStep4;
