import React, { useEffect, useState } from "react";
import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
import whiteArrow from "assets/images/whiteArrow.svg";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button, Form, message, notification, Upload } from "antd";
import { getCookie } from "services/session/cookies";
import axios from "axios";
import { getUserData } from "utils/helpers";

const breadcrumbs = [
  { path: "/", label: "Home" },
  { path: "csr", label: "CSR" },
  { path: "/csr-community", label: "Voice of Community" },
  { path: "csr-community-form", label: "Your Voice" },
];

const ViewCsrCommunity = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Extract id from URL
  const [messageApi, contextHolder] = message.useMessage();
  const [user, setUser] = useState(null);
  const [viewData, setViewData] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [returnLink, setReturnLink] = useState("");
  const [form] = Form.useForm();

  useEffect(() => {
    const data = getUserData();
    if (data) {
      setUser(data);
    }
  }, []);

  useEffect(() => {
    const fetchDataById = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}api/PublicVoiceCommunity/GetById`,
          {
            headers: {
              Authorization: `Bearer ${getCookie("token")}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            params: { id: parseInt(id, 10) }, // Use the extracted id here
          }
        );
        const fetchedData = response.data.data;
        setViewData(fetchedData);
      } catch (error) {
        notification.error({
          message: "Error",
          description: "Failed to fetch data.",
        });
      }
    };
    fetchDataById();
  }, []);

  useEffect(() => {
    if (viewData) {
      form.setFieldsValue({
        Name: viewData.personName,
        MobileNumber: viewData.mobileNumber,
        Email: viewData.email,
        commentType: viewData.commentType,
        comment: viewData.comment,
      });
    }
  }, [viewData]);

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
        process.env.REACT_APP_BASE_URL + "api/PublicVoiceCommunity/AddUpdate";
      const config = {
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
          "Content-Type": "application/json",
          charset: "utf-8",
          Accept: "application/json, text/plain, */*",
        },
      };

      const vocieObj = {
        comment: values.comment,
        commentType: values.commentType,
      };

      const myJSON = JSON.stringify(vocieObj);

      const { data } = await axios.post(fullurl, myJSON, config);
      if (data.succeeded) {
        success();
      } else {
        setErrorMsg("Transaction succeeded: false");
      }
    } catch (error) {
      setErrorMsg(` Message : ${error.response.message}`);
    }
  };

  const onFinish = (values) => {
    handleSubmission(values);
  };

  const handleChange = (e) => {
    debugger;
    form.setFieldsValue({ [e.target.name]: e.target.value });
  };

  console.log("form", form.getFieldsValue());

  return (
    <Container classes="w-[90%]">
      <div className="flex flex-col">
        <div className="flex mb-[62px] mt-[41px]">
          <BreadCrumbs breadcrumbs={breadcrumbs} />
        </div>
        <div className="flex font-semibold text-[64px] mb-[60px]">
          Voice Of <span className="pl-4 text-[#009969]">Community</span>
        </div>
        <Form form={form} onFinish={onFinish} className="space-y-4">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-10 gap-y-2">
            <Form.Item
              name="Name"
              rules={[{ required: true, message: "Please input your Name!" }]}
            >
              <div className="relative mt-2 w-full">
                <input
                  type="text"
                  name="Name"
                  disabled
                  value={user ? user.UserFullName : form.getFieldValue("Name")}
                  onChange={handleChange}
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
              rules={[
                {
                  required: true,
                  type: "number",
                  message: "Please input a number!",
                },
              ]}
            >
              <div className="relative mt-2 w-full">
                <input
                  type="number"
                  name="MobileNumber"
                  disabled
                  value={
                    user
                      ? parseInt(user?.PhoneNumber)
                      : form.getFieldValue("MobileNumber")
                  }
                  onChange={handleChange}
                  className={`border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-gray-100 text-gray-500 px-2.5 pb-2.5 pt-4 text-sm focus:border-green-600 focus:outline-none focus:ring-0`}
                  placeholder=" "
                />
                <label
                  htmlFor="MobileNumber"
                  className={`absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white text-gray-500 px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600`}
                >
                  Mobile Number
                </label>
              </div>
            </Form.Item>

            <Form.Item
              name="Email"
              rules={[{ required: true, message: "Please input email!" }]}
            >
              <div className="relative mt-2 w-full">
                <input
                  type="email"
                  name="Email"
                  disabled
                  value={user ? user.Email : form.getFieldValue("Email")}
                  onChange={handleChange}
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
              name="commentType"
              rules={[
                {
                  required: true,
                  message: "Please input your Comment Type!",
                },
              ]}
            >
              <div className="relative mt-2 w-full">
                <select
                  name="commentType"
                  disabled
                  value={form.getFieldValue("commentType") || ""}
                  onChange={handleChange}
                  className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                  placeholder="Select your comment type"
                >
                  <option value="" disabled hidden>
                    Choose here
                  </option>
                  <option value="Suggestions">Suggestions</option>
                  <option value="Complaints">Complaints</option>
                  <option value="Others">Others</option>
                </select>
                <label
                  htmlFor="commentType"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
                >
                  Comment Type
                </label>
              </div>
            </Form.Item>

            <Form.Item
              name="comment"
              className="lg:col-span-2"
              rules={[
                {
                  required: true,
                  message: "Please input your Comment!",
                },
              ]}
            >
              <div className="relative mt-2 w-full">
                <textarea
                  name="comment"
                  disabled
                  value={form.getFieldValue("comment") || ""}
                  onChange={handleChange}
                  rows={1}
                  className="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                  placeholder=" "
                />
                <label
                  htmlFor="comment"
                  className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
                >
                  Comment
                </label>
              </div>
            </Form.Item>
          </div>
          <Form.Item>
            <div className="w-full flex justify-center mb-10">
              <Button
                type="primary"
                htmlType="submit"
                disabled
                className="bg-[#009969] hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Submit
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </Container>
  );
};

export default ViewCsrCommunity;
