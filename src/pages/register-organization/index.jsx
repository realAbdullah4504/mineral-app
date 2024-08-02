import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Form,
  Select,
  message,
  Space,
  Button,
  Input,
  Upload,
  Modal,
} from "antd";
import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import { Checkbox, Col, Row } from "antd";
import { registerOrganizationOption } from "utils/constant/common";
import { getCookie } from "services/session/cookies";

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

const RegisterOrganization = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [errorMsg, setErrorMsg] = useState("");
  const [returnLink, setReturnLink] = useState("");
  const [renderStop, setRenderStop] = useState("");
  const [fileList, setFileList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [fileUrl, setFileUrl] = useState("");
  const [orgType, setOrgType] = useState([]);
  const [buttonText, setButtonText] = useState("Click to Upload Logo");
  const [form] = Form.useForm();
  const [checkedValues, setCheckedValues] = useState([]);

  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "#", label: "Who is Who" },
  ];

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const paramValue = urlParams.get("orgtype");
    console.log(paramValue);
    if (renderStop !== "Set") {
      const orgTypes = {
        // gd: "GovernmentDepartments",
        gggs: "GeotechnicalGeophysicalGeologicalServices",
        dc: "DrillingCompanies",
        mc: "MiningCompanies",
        mbi: "MineralBasedIndustries",
        ms: "MachinerySuppliers",
        mtl: "MineralTestingLabs",
        es: "ExplosiveSuppliers",
        sse: "SoftwareandSolutionsEntities",
        ls: "LegalServices",
        aa: "AuditAccounts",
        lsurv: "LandSurveying",
        ard: "AcademiaAndRD",
        ts: "TrainingSchools",
        os: "OtherServices",
      };

      const links = {
        // gd: "/government-departments",
        gggs: "/geotechnical-geophysical-services",
        dc: "/drilling-companies",
        mc: "/mining-companies",
        mbi: "/mineral-based-industries",
        ms: "/machinery-suppliers",
        mtl: "/mineral-labs",
        es: "/explosive-suppliers",
        sse: "/software-solution-entities",
        ls: "/legal-services",
        aa: "/audit-accounts",
        lsurv: "/land-surveying",
        ard: "/academia",
        ts: "/training-schools",
        os: "/other-services",
      };

      if (orgTypes[paramValue]) {
        setRenderStop("Set");
        setOrgType({ OrganizationType: orgTypes[paramValue] });
        setReturnLink(links[paramValue]);

        // Set checked values
        setCheckedValues([orgTypes[paramValue]]);
      }
    }
  }, [renderStop]);

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
  };

  const handleSubmission = async (values) => {
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
    if (values.LogoImages && values.LogoImages?.length > 0) {
      bodyFormData.append("LogoImages", values.LogoImages[0]);
    }

    const companyobj = {
      OrganizationName: values.name,
      Email: values.email,
      MobileNumber: values.number,
      Address: values.address,
      LandlineNumber: values.landline,
      WebsiteURL: values.url,
      OtherLink: values.socialLink,
    };

    for (const type of checkedValues) {
      const bodyFormData = new FormData();
      companyobj.OrganizationType = type;

      // Append the logo image
      if (values.LogoImages && values.LogoImages?.length > 0) {
        bodyFormData.append("LogoImages", values.LogoImages[0].originFileObj);
      }

      // Append the company object as a JSON string
      bodyFormData.append("obj", JSON.stringify(companyobj));

      try {
        const { data } = await axios.post(fullurl, bodyFormData, config);
        if (!data.succeeded) {
          setErrorMsg("Transaction succeeded: false");
          return;
        }
      } catch (error) {
        setErrorMsg(
          `Error Status: ${error.response.status} Message : ${error.response.statusText}`
        );
        return;
      }
    }

    success();
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
    const isAcceptedFormat = ["image/png", "image/jpeg"].includes(file.type);
    if (!isAcceptedFormat) {
      message.error("You can only upload PNG, JPEG files!");
      return Upload.LIST_IGNORE;
    }
    return false;
  };

  const handleFileChange = (info) => {
    const { fileList } = info;
    const acceptedFormats = ["image/png", "image/jpeg"];
    const filteredFileList = fileList.filter((file) =>
      acceptedFormats.includes(file.type)
    );
    setFileList(filteredFileList.slice(-1));
    form.setFieldsValue({ LogoImages: filteredFileList });
    form.validateFields(["LogoImages"]);
  };

  const onChange = (checkedValues) => {
    setCheckedValues(checkedValues);
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
            <strong>Apply for Registration</strong>
          </div>
        </div>

        <div className="mt-8">
          <span className=" text-[20px] text-gray-700">
            {" "}
            Select Categories{" "}
          </span>
          <Checkbox.Group
            style={{
              width: "100%",
            }}
            onChange={onChange}
            value={checkedValues}
          >
            <Row>
              {registerOrganizationOption.map((option) => (
                <Col span={8} key={option.value}>
                  <Checkbox value={option.value}>{option.label}</Checkbox>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>
        </div>

        <div className="flex justify-center flex-col space-y-6 py-12">
          <div className="space-y-2 text-start">
            <h2 className="text-[26px] font-medium text-[#009969]">
              Organizational Details
            </h2>
          </div>
          <Form form={form} onFinish={onFinish} className="space-y-4">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
              <Form.Item
                name="name"
                className=""
                rules={[
                  {
                    required: true,
                    message: "Please input your Organization Name!",
                  },
                ]}
              >
                <div className="relative mt-2 w-full">
                  <input
                    type="text"
                    id="name"
                    className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="name"
                    className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600"
                  >
                    Organization Name
                  </label>
                </div>
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please input a valid Email!",
                  },
                ]}
              >
                <div className="relative mt-2 w-full">
                  <input
                    type="email"
                    id="email"
                    className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600"
                  >
                    Email
                  </label>
                </div>
              </Form.Item>
              <Form.Item
                name="address"
                rules={[
                  { required: true, message: "Please input your Address!" },
                ]}
              >
                <div className="relative mt-2 w-full">
                  <input
                    type="text"
                    id="address"
                    className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="address"
                    className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600"
                  >
                    Address
                  </label>
                </div>
              </Form.Item>
              <Form.Item
                name="number"
                rules={[
                  {
                    required: true,
                    message: "Please input your Mobile Number!",
                  },
                ]}
              >
                <div className="relative mt-2 w-full">
                  <input
                    type="text"
                    id="number"
                    className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="number"
                    className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600"
                  >
                    Mobile Number
                  </label>
                </div>
              </Form.Item>
              <Form.Item
                name="landline"
                rules={[
                  {
                    required: true,
                    message: "Please input your Landline Number!",
                  },
                ]}
              >
                <div className="relative mt-2 w-full">
                  <input
                    type="text"
                    id="landline"
                    className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="landline"
                    className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600"
                  >
                    Landline Number
                  </label>
                </div>
              </Form.Item>
              <Form.Item
                name="url"
                rules={[
                  { required: true, message: "Please input your Website URL!" },
                ]}
              >
                <div className="relative mt-2 w-full">
                  <input
                    type="text"
                    id="url"
                    className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="url"
                    className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600"
                  >
                    Website/URL
                  </label>
                </div>
              </Form.Item>
              <Form.Item
                name="socialLink"
                rules={[
                  {
                    required: true,
                    message: "Please input your Social Media Link!",
                  },
                ]}
              >
                <div className="relative mt-2 w-full">
                  <input
                    type="text"
                    id="socialLink"
                    className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    htmlFor="socialLink"
                    className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600"
                  >
                    Social Media Link
                  </label>
                </div>
              </Form.Item>
              <Form.Item
                name="LogoImages"
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
          <h4 className="mt-10 text-center text-lg text-red-500">{errorMsg}</h4>
          {contextHolder}
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

export default RegisterOrganization;
