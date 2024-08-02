import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  Input,
  Modal,
  Select,
  Upload,
  message,
  notification,
} from "antd";
import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import axios from "axios";
import { getCookie } from "services/session/cookies";
import { getUserData } from "utils/helpers";

const CustomUploadIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.4em"
    height="1.4em"
    viewBox="0 0 24 24"
  >
    <path
      fill="#86efac"
      d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16zm-5 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"
    />
  </svg>
);
const RegisterProfessional = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [errorMsg, setErrorMsg] = useState("");
  const [returnLink, setReturnLink] = useState("");
  const [fileList, setFileList] = useState([]);
  const [form] = Form.useForm();
  const [value, setValue] = useState("_____ - _____ - __");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [fileUrl, setFileUrl] = useState("");
  const [buttonText, setButtonText] = useState("Click to Upload Resume");
  const [user, setUser] = useState(null);
  const [uploadError, setUploadError] = useState(false);

  useEffect(() => {
    const data = getUserData();
    if (data) {
      setUser(data);
    }
  }, []);

  const handleChange = (e) => {
    let input = e.target.value.replace(/\D/g, "");
    let formatted = "_____ - _____ - __";
    for (let i = 0; i < input.length; i++) {
      formatted = formatted.replace("_", input[i]);
    }
    setValue(formatted);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Backspace") {
      let input = value.replace(/\D/g, ""); // Remove all non-digit characters
      input = input.slice(0, -1); // Remove the last character
      let formatted = "_____ - _____ - __";
      for (let i = 0; i < input.length; i++) {
        formatted = formatted.replace("_", input[i]);
      }
      setValue(formatted);
      e.preventDefault(); // Prevent the default Backspace behavior
    }
  };

  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "#", label: "Who is Who" },
  ];

  const success = () => {
    messageApi
      .open({
        type: "loading",
        content: "Processing..",
        duration: 1,
      })
      .then(() => {
        message.success({
          type: "success",
          content: "Saved successfully.",
          duration: 2.5,
          style: {
            marginTop: "40vh",
          },
        });
        navigate(returnLink);
      });

    // Show notification
    notification.success({
      message: "Registration Completed",
      description: "Your registration has been successfully completed.",
      placement: "topRight",
      style: {
        backgroundColor: "#f6ffed",
        border: "1px solid #b7eb8f",
      },
      duration: 4.5, // Duration in seconds, change as needed
      onClose: () => console.log("Notification closed"),
    });
  };

  const handleSubmission = async (values) => {
    try {
      const fullurl =
        process.env.REACT_APP_BASE_URL + "/api/PublicWhoIsWho/CreateUpdate";
      const config = {
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
          "Content-Type": "multipart/form-data",
          charset: "utf-8",
          Accept: "application/json, text/plain, */*",
        },
      };

      const bodyFormData = new FormData();
      if (fileList.length > 0) {
        bodyFormData.append(
          "UploadResume",
          fileList[0].originFileObj || fileList[0]
        );
      }
      const companyobj = {
        OrganizationType: "MiningProfessionals",
        OrganizationName: values.OrganizationName,
        Email: user?.Email,
        Name: user?.UserFullName,
        MobileNumber: user?.PhoneNumber,
        CNIC: values.CNIC,
        Qualification: values.Qualification,
        DegreeTitle: values.DegreeTitle,
        University: values.University,
        PassingYear: values.PassingYear,
        IndustriesOrSector: values.IndustriesOrSector,
        ProfessionalRole: values.ProfessionalRole,
        ProfessionSummary: values.ProfessionSummary,
        PECRegistrationNo: values.PECRegistrationNo,
        Designation: values.Designation,
        JoiningYear: values.JoiningYear,
      };

      bodyFormData.append("obj", JSON.stringify(companyobj));

      const { data } = await axios.post(fullurl, bodyFormData, config);
      if (data.succeeded) {
        success();
      } else {
        setErrorMsg("Transaction succeeded: false");
      }
    } catch (error) {
      setErrorMsg(
        `Error Status: ${error.response.status} Message : ${error.response.statusText}`
      );
    }
  };

  const onFinish = (values) => {
    handleSubmission(values);
  };

  const handlePreview = async (file) => {
    const url = window.URL.createObjectURL(file.originFileObj);
    setFileUrl(url);
    setIsModalVisible(true);
  };

  const beforeUpload = (file) => {
    const isPdf = file.type === "application/pdf";
    if (!isPdf) {
      message.error("You can only upload PDF files!");
      setUploadError(true);
    } else {
      setUploadError(false);
    }
    return false;
  };

  const handleFileChange = (info) => {
    const { fileList } = info;
    const filteredFileList = fileList.filter(
      (file) => file.type === "application/pdf"
    );
    setFileList(filteredFileList.slice(-1));
    if (filteredFileList.length === 0) {
      setUploadError(true);
    } else {
      setUploadError(false);
    }
    form.setFieldsValue({ UploadResume: filteredFileList });
    form.validateFields(["UploadResume"]);
  };

  return (
    <>
      <Container classes="mt-8 w-[70%]">
        <BreadCrumbs breadcrumbs={breadcrumbs} />
        <div className="flex flex-wrap mt-[20px]">
          <div
            className="font-helvetica font-normal text-[22px] leading-[24px] mt-4"
            style={{ whiteSpace: "pre-line" }}
          >
            Mining Professional <strong>Apply for Registration</strong>
          </div>
        </div>

        <div className="flex justify-center flex-col space-y-6 py-12">
          <Form form={form} onFinish={onFinish} className="space-y-4">
            <div className="space-y-2 text-start">
              <h2 className="text-[26px] font-medium text-[#009969]">
                Personal Information
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
              <Form.Item
                name="Name"
                // rules={[
                //   {
                //     required: true,
                //     message: "Please input your Contact No.!",
                //   },
                // ]}
              >
                <div className="relative mt-2 w-full">
                  <input
                    type="text"
                    id="Name"
                    disabled
                    value={user?.UserFullName}
                    className={`border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-gray-100 text-gray-500 px-2.5 pb-2.5 pt-4 text-sm focus:border-green-600 focus:outline-none focus:ring-0`}
                    placeholder=" "
                  />
                  <label
                    htmlFor="Name"
                    className={`absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white text-gray-500 px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600`}
                  >
                    Name
                  </label>
                </div>
              </Form.Item>
              <Form.Item
                name="MobileNumber"
                // rules={[
                //   {
                //     required: true,
                //     message: "Please input your Contact No.!",
                //   },
                // ]}
              >
                <div className="relative mt-2 w-full">
                  <input
                    type="text"
                    id="MobileNumber"
                    disabled
                    value={user?.PhoneNumber}
                    className={`border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-gray-100 text-gray-500 px-2.5 pb-2.5 pt-4 text-sm focus:border-green-600 focus:outline-none focus:ring-0`}
                    placeholder=" "
                  />
                  <label
                    htmlFor="MobileNumber"
                    className={`absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white text-gray-500 px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600`}
                  >
                    Contact No
                  </label>
                </div>
              </Form.Item>
              <Form.Item
                name="Email"
                // rules={[
                //   {
                //     required: true,
                //     type: "email",
                //     message: "Please input a valid Email!",
                //   },
                // ]}
              >
                <div className="relative mt-2 w-full">
                  <input
                    type="email"
                    id="Email"
                    disabled
                    value={user?.Email}
                    className={`border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-gray-100 text-gray-500 px-2.5 pb-2.5 pt-4 text-sm focus:border-green-600 focus:outline-none focus:ring-0`}
                    placeholder=" "
                  />
                  <label
                    htmlFor="Email"
                    className={`absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white text-gray-500 px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600`}
                  >
                    Email
                  </label>
                </div>
              </Form.Item>
              <Form.Item
                name="CNIC"
                rules={[
                  {
                    required: true,
                    message: "Please input your Valid CNIC No.!",
                  },
                ]}
              >
                <div class="relative mt-2 w-full">
                  <input
                    type="text"
                    id="CNIC"
                    value={value}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                  />
                  <label
                    for="CNIC"
                    class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600"
                  >
                    Valid CNIC No.
                  </label>
                </div>
              </Form.Item>
            </div>

            <div className="space-y-2 text-start">
              <h2 className="text-[26px] font-medium text-[#009969] ">
                Qualifications
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
              <Form.Item
                name="Qualification"
                rules={[
                  {
                    required: true,
                    message: "Please input your Qualification!",
                  },
                ]}
              >
                <div className="relative mt-2 w-full">
                  <select
                    id="Qualification"
                    className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                    placeholder="Select your qualification"
                  >
                    <option value="" selected disabled hidden>
                      Choose here
                    </option>
                    <option value="Diploma">Diploma</option>
                    <option value="Certification">Certification</option>
                    <option value="Bachelors">Bachelors</option>
                    <option value="Masters">Masters</option>
                    <option value="PhD">PhD</option>
                  </select>
                  <label
                    htmlFor="Qualification"
                    className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
                  >
                    Qualification
                  </label>
                </div>
              </Form.Item>
              <Form.Item
                name="DegreeTitle"
                rules={[
                  {
                    required: true,
                    message:
                      "Please input your Degree/Diploma/Certification Title!",
                  },
                ]}
              >
                <div className="relative mt-2 w-full">
                  <input
                    type="text"
                    id="DegreeTitle"
                    className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="DegreeTitle"
                    className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600"
                  >
                    Degree/Diploma/Certification Title
                  </label>
                </div>
              </Form.Item>
              <Form.Item
                name="University"
                rules={[
                  {
                    required: true,
                    message: "Please input your University/Institute!",
                  },
                ]}
              >
                <div className="relative mt-2 w-full">
                  <input
                    type="text"
                    id="University"
                    className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="University"
                    className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600"
                  >
                    University/Institute
                  </label>
                </div>
              </Form.Item>
              <Form.Item
                name="PassingYear"
                rules={[
                  {
                    required: true,
                    message: "Please input your Graduation/Completion Year!",
                  },
                ]}
              >
                <div className="relative mt-2 w-full">
                  <input
                    type="number"
                    id="PassingYear"
                    className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="PassingYear"
                    className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600"
                  >
                    Graduation/Completion Year
                  </label>
                </div>
              </Form.Item>
            </div>

            <div className="space-y-2 text-start">
              <h2 className="text-[26px] font-medium text-[#009969] ">
                Professional Information
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
              <Form.Item
                name="IndustriesOrSector"
                rules={[
                  {
                    required: true,
                    message: "Please input your Industries/Sector!",
                  },
                ]}
              >
                <div className="relative mt-2 w-full">
                  <input
                    type="text"
                    id="IndustriesOrSector"
                    className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="IndustriesOrSector"
                    className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600"
                  >
                    Industries/Sector
                  </label>
                </div>
              </Form.Item>
              <Form.Item
                name="ProfessionalRole"
                rules={[
                  {
                    required: true,
                    message: "Please input your Professional Role!",
                  },
                ]}
              >
                <div className="relative mt-2 w-full">
                  <input
                    type="text"
                    id="ProfessionalRole"
                    className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="ProfessionalRole"
                    className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600"
                  >
                    Professional Role
                  </label>
                </div>
              </Form.Item>
              <Form.Item
                name="PECRegistrationNo"
                rules={[
                  {
                    required: false,
                    message: "Please input your Professional Registration!",
                  },
                ]}
              >
                <div className="relative mt-2 w-full">
                  <input
                    type="text"
                    id="PECRegistrationNo"
                    className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="PECRegistrationNo"
                    className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600"
                  >
                    Professional Registration
                  </label>
                </div>
              </Form.Item>

              <Form.Item
                name="UploadResume"
                valuePropName="fileList"
                className="w-full"
                getValueFromEvent={(e) =>
                  Array.isArray(e) ? e : e && e.fileList
                }
                rules={[{ required: true, message: "Please upload a file!" }]}
              >
                <div className="relative mt-2 w-full">
                  <Upload
                    beforeUpload={beforeUpload}
                    onPreview={handlePreview}
                    onChange={handleFileChange}
                    listType="picture"
                    className="w-full h-full"
                    maxCount={1} // Allow only one file
                    fileList={fileList}
                    action={null}
                  >
                    <div className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0 cursor-pointer">
                      <div className="flex items-center space-x-2">
                        {/* CustomUploadIcon can be replaced with any icon or element */}
                        {CustomUploadIcon}
                        <span>{buttonText}</span>
                      </div>
                    </div>
                  </Upload>
                </div>
              </Form.Item>
              {contextHolder}

              <Form.Item
                name="ProfessionSummary"
                rules={[
                  {
                    required: false,
                    message: "Please input your Professional Summary!",
                  },
                ]}
                className="lg:col-span-2"
              >
                <div className="relative mt-2 w-full">
                  <textarea
                    type="textarea"
                    id="ProfessionSummary"
                    rows={1}
                    className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="ProfessionSummary"
                    className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600"
                  >
                    Professional Summary
                  </label>
                </div>
              </Form.Item>
            </div>

            <div className="space-y-2 text-start">
              <h2 className="text-[26px] font-medium text-[#009969] ">
                Current Employment
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
              <Form.Item
                name="OrganizationName"
                rules={[
                  {
                    required: true,
                    message: "Please input your Organization!",
                  },
                ]}
              >
                <div className="relative mt-2 w-full">
                  <input
                    type="text"
                    id="OrganizationName"
                    className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="OrganizationName"
                    className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600"
                  >
                    Organization
                  </label>
                </div>
              </Form.Item>
              <Form.Item
                name="Designation"
                rules={[
                  {
                    required: true,
                    message: "Please input your Title/Designation!",
                  },
                ]}
              >
                <div className="relative mt-2 w-full">
                  <input
                    type="text"
                    id="Designation"
                    className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="Designation"
                    className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600"
                  >
                    Title/Designation
                  </label>
                </div>
              </Form.Item>
              <Form.Item
                name="JoiningYear"
                rules={[
                  {
                    required: true,
                    message: "Please input your Joining Year!",
                  },
                ]}
              >
                <div className="relative mt-2 w-full">
                  <input
                    type="number"
                    id="JoiningYear"
                    className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="JoiningYear"
                    className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600"
                  >
                    Joining Year
                  </label>
                </div>
              </Form.Item>
            </div>

            <Form.Item>
              <div className="w-full flex justify-center">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-[#009969] hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Submit
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </Container>

      <Modal
        title="Preview File"
        visible={isModalVisible}
        width={1200}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setIsModalVisible(false)}>
            Close
          </Button>,
        ]}
      >
        <iframe
          src={fileUrl}
          style={{ width: "100%", height: "500px" }}
          frameBorder="0"
        />
      </Modal>
    </>
  );
};

export default RegisterProfessional;
