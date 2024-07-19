import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import styles from "./RegisterOrganization.module.css";
// import { Breadcrumb } from "react-bootstrap";

import { Form, Select, message } from "antd";
import BreadCrumbs from "components/Breadcrumbs";
import { Container } from "components/UI";
// import Header from "../../Header";
// import Footer from "../../Footer";
// import { authService } from "../../../services/authService";
// import axiosInstance from "../../../axios/axiosInstance";
const { Option } = Select;

const RegisterOrganization = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [errorMsg, setErrorMsg] = useState("");
  const [returnLink, setReturnLink] = useState("");
  const [renderStop, setRenderStop] = useState("");
  const [fileList, setFileList] = useState([]);
  const [fileList1, setFileList1] = useState([]);
  const [orgType, setOrgType] = useState([]);
  const [form] = Form.useForm();

  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "#", label: "Who is Who" },
  ];

  const organizationtext = [
    {
      status: "GovernmentOrganizations",
      display_status: "Government Organizations",
    },
    {
      status: "DrillingAndServices",
      display_status: "Drilling & Services",
    },
    {
      status: "MineralLabs",
      display_status: "Mineral Labs",
    },
    {
      status: "DownstreamIndustries",
      display_status: "Downstream Industries",
    },
    {
      status: "SoftwareAndSolutions",
      display_status: "Software & Solutions",
    },
    {
      status: "LegalAndTaxServices",
      display_status: "Legal & Tax Services",
    },
    {
      status: "Academia",
      display_status: "Academia",
    },
    {
      status: "OtherServices",
      display_status: "Other Services",
    },
    {
      status: "Associations",
      display_status: "Associations",
    },
  ];

  const getOrgTypeShow = (item) => {
    console.log("getStatus", item);
    const rarray = organizationtext.filter((value) => value.status === item);

    if (rarray.length > 0) {
      return rarray[0].display_status;
    } else {
      return "-";
    }
  };

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const paramValue = urlParams.get("orgtype");
    console.log(paramValue);
    if (renderStop !== "Set") {
      if (paramValue === "go") {
        //console.log('yes, paramValue is 1 is it?',paramValue);
        /*form.setFieldsValue({
            'OrganizationType':'GovernmentOrganizations',
          });*/

        setRenderStop("Set");
        setOrgType({
          OrganizationType: "GovernmentOrganizations",
        });

        setReturnLink("/government-organizations");
      }
      if (paramValue === "das") {
        //console.log('yes, paramValue is 1 is it?',paramValue);
        /*form.setFieldsValue({
            'OrganizationType':'DrillingAndServices',
          });*/

        setRenderStop("Set");
        setOrgType({
          OrganizationType: "DrillingAndServices",
        });
        setReturnLink("/drilling-services");
      }
      if (paramValue === "dsi") {
        //console.log('yes, paramValue is 1 is it?',paramValue);
        /*form.setFieldsValue({
            'OrganizationType':'DownstreamIndustries',
          });*/

        setRenderStop("Set");
        setOrgType({
          OrganizationType: "DownstreamIndustries",
        });
        setReturnLink("/downstream-industries");
      }
      if (paramValue === "ml") {
        //console.log('yes, paramValue is 1 is it?',paramValue);
        /*form.setFieldsValue({
            'OrganizationType':'MineralLabs',
          });*/

        setRenderStop("Set");
        setOrgType({
          OrganizationType: "MineralLabs",
        });
        setReturnLink("/mineral-labs");
      }
      if (paramValue === "sas") {
        //console.log('yes, paramValue is 1 is it?',paramValue);
        /*form.setFieldsValue({
            'OrganizationType':'SoftwareAndSolutions',
          });*/

        setRenderStop("Set");
        setOrgType({
          OrganizationType: "SoftwareAndSolutions",
        });
        setReturnLink("/software-solutions");
      }
      if (paramValue === "lats") {
        //console.log('yes, paramValue is 1 is it?',paramValue);
        /*form.setFieldsValue({
            'OrganizationType':'LegalAndTaxServices',
          });*/

        setRenderStop("Set");
        setOrgType({
          OrganizationType: "LegalAndTaxServices",
        });
        setReturnLink("/legal-tax-services");
      }
      if (paramValue === "ac") {
        //console.log('yes, paramValue is 1 is it?',paramValue);
        /*form.setFieldsValue({
            'OrganizationType':'Academia',
          });*/

        setRenderStop("Set");
        setOrgType({
          OrganizationType: "Academia",
        });
        setReturnLink("/academia");
      }
      if (paramValue === "asso") {
        //console.log('yes, paramValue is 1 is it?',paramValue);
        /*form.setFieldsValue({
            'OrganizationType':'Associations',
          });*/

        setRenderStop("Set");
        setOrgType({
          OrganizationType: "Associations",
        });
        setReturnLink("/Associations");
      }
      if (paramValue === "os") {
        //console.log('yes, paramValue is 1 is it?',paramValue);
        /*form.setFieldsValue({
            'OrganizationType':'OtherServices',
          });*/

        setRenderStop("Set");
        setOrgType({
          OrganizationType: "OtherServices",
        });
        setReturnLink("/other-services");
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

  //   const onFinish = (values) => {
  //     console.log("Sucessful", values);
  //     /*if(values.SocialLinks.length > 0){
  //           console.log('Yes its exsits',values.SocialLinks);
  //         }*/

  //     handleSubmission(values);
  //   };

  //   const handleSubmission = (values) => {
  //     const fullurl =
  //       process.env.REACT_APP_BASE_URL + "/api/PublicWhoIsWho/CreateUpdate";
  //     //const config = authService.getConfig();
  //     const config = {
  //       headers: {
  //         Authorization: authService.getConfig().headers.Authorization,
  //         "Content-Type": "multipart/form-data",
  //         charset: "utf-8",
  //         Accept: "application/json, text/plain, */*",
  //       },
  //     };

  //     var bodyFormData = new FormData();

  //     if (values.logo) {
  //       if (values.logo.fileList.length > 0) {
  //         if (values.logo.fileList[0].originFileObj) {
  //           console.log("if-logo", values.logo.fileList[0].originFileObj);
  //           bodyFormData.append(
  //             "LogoImages",
  //             values.logo.fileList[0].originFileObj
  //           );
  //         } else {
  //           console.log("else-logo", values.logo.fileList[0]);
  //           bodyFormData.append("LogoImages", values.logo.fileList[0]);
  //         }
  //       }
  //     }

  //     /*let newarray = [];
  //       newarray = values.ListSocialLinks;
  //       if(newarray){
  //         newarray.push(
  //           {
  //             'SocialLinks': values.SocialLinks,
  //             'URL' : values.URL,
  //           }
  //         );
  //       }
  //       else{
  //         newarray = [{
  //           'SocialLinks': values.SocialLinks,
  //           'URL' : values.URL,
  //         }];
  //       }console.log(newarray);
  //       */

  //     const companyobj = {
  //       OrganizationType: orgType["OrganizationType"],
  //       OrganizationName: values.OrganizationName,
  //       Email: values.Email,
  //       MobileNumber: values.MobileNumber,
  //       Address: values.Address,
  //       LandlineNumber: values.LandlineNumber,
  //       WebsiteURL: values.WebsiteURL,
  //       OtherLink: values.OtherLink,
  //     };

  //     console.log(companyobj);

  //     const myJSON = JSON.stringify(companyobj);
  //     console.log(myJSON);

  //     bodyFormData.append("obj", myJSON);
  //     /*axios
  //       .post(fullurl, myJSON,
  //       config)*/
  //     console.log(bodyFormData);
  //     axiosInstance
  //       .post(fullurl, bodyFormData, config)
  //       .then((res) => {
  //         //alert('postdata function called');
  //         if (!res.data.succeeded) {
  //           console.log("false");
  //           console.log(res);
  //           setErrorMsg("Transcation succeeded: false");
  //           return;
  //         }

  //         if (res.data.succeeded) {
  //           setErrorMsg(res.data.message);
  //           success();
  //         }
  //         console.log(res.data);
  //         console.log("postdata function called");
  //         console.log(res);
  //       })
  //       .catch((error) => {
  //         setErrorMsg(
  //           "Error Status: " +
  //             error.response.status +
  //             " Message : " +
  //             error.response.statusText
  //         );
  //         console.log(error);
  //       });
  //   };

  const onFinishFailed = (values) => {
    console.log("Failed", values);
  };

  const props = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };

  const props1 = {
    onRemove: (file) => {
      const index = fileList1.indexOf(file);
      const newFileList = fileList1.slice();
      newFileList.splice(index, 1);
      setFileList1(newFileList);
    },
    beforeUpload: (file) => {
      setFileList1([...fileList1, file]);

      return false;
    },
    fileList1,
  };

  return (
    <>
      <Container classes="mt-8 w-[90%]">
        <BreadCrumbs breadcrumbs={breadcrumbs} />

        {/* <h2>
          Who is Who: <p>{getOrgTypeShow(orgType["OrganizationType"])}</p>
        </h2> */}
        <div className="flex flex-wrap mt-[20px]">
          <div className="w-full flex">
            <h1 className="font-ibm-plex-sans font-semibold text-[48px] p-[0px]">
              Who is Who:{" "}
            </h1>
            <h1 className="font-ibm-plex-sans font-semibold text-[48px] text-[#009969] p-[0px]">
              {" "}
              {getOrgTypeShow(orgType["OrganizationType"])}
            </h1>
          </div>

          <div
            className="font-helvetica font-normal text-[22px] leading-[24px] mt-4"
            style={{ whiteSpace: "pre-line" }}
          >
            Government Organizations <strong>Apply for Registration</strong>
          </div>
        </div>

        <div className="flex justify-center flex-col space-y-6 py-12 px-16">
          <div className="space-y-2 text-start">
            <h2 className="text-3xl font-bold text-[#009969] ">
              Organizational Details
            </h2>
          </div>
          <form className="space-y-4">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
              <div>
                <div class="relative mt-2 w-full">
                  <input
                    type="text"
                    id="name"
                    class="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    for="name"
                    class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600"
                  >
                    {" "}
                    Organization Name
                  </label>
                </div>
              </div>
              <div>
                <div class="relative mt-2 w-full">
                  <input
                    type="text"
                    id="email"
                    class="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    for="email"
                    class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600"
                  >
                    {" "}
                    Email
                  </label>
                </div>
              </div>
              <div>
                <div class="relative mt-2 w-full">
                  <input
                    type="text"
                    id="address"
                    class="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    for="address"
                    class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600"
                  >
                    {" "}
                    Address
                  </label>
                </div>
              </div>
              <div>
                <div class="relative mt-2 w-full">
                  <input
                    type="text"
                    id="number"
                    class="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    for="number"
                    class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600"
                  >
                    {" "}
                    Mobile Number
                  </label>
                </div>
              </div>
              <div>
                <div class="relative mt-2 w-full">
                  <input
                    type="text"
                    id="landline"
                    class="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    for="landline"
                    class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600"
                  >
                    {" "}
                    Landline Number
                  </label>
                </div>
              </div>
              <div>
                <div class="relative mt-2 w-full">
                  <input
                    type="text"
                    id="url"
                    class="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    for="url"
                    class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600"
                  >
                    {" "}
                    Website/URL
                  </label>
                </div>
              </div>
              <div>
                <div class="relative mt-2 w-full">
                  <input
                    type="text"
                    id="socialLink"
                    class="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    for="socialLink"
                    class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600"
                  >
                    {" "}
                    Social Media Link
                  </label>
                </div>
              </div>
              <div>
                <div class="relative mt-2 w-full">
                  <input
                    type="text"
                    id="logo"
                    class="border-1 peer block w-full appearance-none rounded-lg border border-green-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-green-600 focus:outline-none focus:ring-0"
                    placeholder=" "
                  />
                  <label
                    for="logo"
                    class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 focus:border-green-600"
                  >
                    {" "}
                    Logo/Cover
                  </label>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center">
              <button class="bg-[#009969] hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default RegisterOrganization;
