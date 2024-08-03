import React, { useState, useEffect } from "react";
import {REACT_APP_FILE_URL} from 'utils/constant/url'
import { Container } from "components/UI/Container";
import styles from "./NOCApplication.module.css";
import { UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { commonAPIs } from "services/api/common";
import { REQUEST_TYPES, ENDPOINTS } from "utils/constant/url";
import { Table } from "antd";
import dayjs from "dayjs";
import BreadCrumbs from "components/Breadcrumbs";
import * as customParseFormat from "dayjs/plugin/customParseFormat";
import { Form, Input, Select, DatePicker, Col, Upload, Button, message, Row, Flex, ConfigProvider } from "antd";
const { Option } = Select;
const { RangePicker } = DatePicker;

const columns1 = [
  {
    title: "Sr. No ",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Type of Visa Availed",
    dataIndex: "typeOfVisaAvailed",
    key: "typeOfVisaAvailed",
  },
  {
    title: "Past Visit Start Date",
    dataIndex: "pastVisitExpatriateStartDate",
    key: "pastVisitExpatriateStartDate",
    render: (title) => dayjs(title).format("DD/MM/YYYY"),
  },
  {
    title: "Past Visit End Date",
    dataIndex: "pastVisitExpatriateEndDate",
    key: "pastVisitExpatriateEndDate",
    render: (title) => dayjs(title).format("DD/MM/YYYY"),
  },
  {
    title: "Visited Place",
    dataIndex: "pastVisitedPlace",
    key: "pastVisitedPlace",
  },
  {
    title: "Other Details",
    dataIndex: "otherDetails",
    key: "otherDetails",
    render: (title) => (title ? title : "-"),
  },
];

const columns = [
  {
    title: "id",
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
];

function NOCApplicationView() {
  const navigate = useNavigate();
  const [showNOCType, setshowNOCType] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [errorMsg, setErrorMsg] = useState("");
  const [nationalityList, setNationalityList] = useState([]);
  const [loading, setLoading] = useState(false);
  dayjs.extend(customParseFormat);
  const dateFormat = "DD/MM/YYYY";

  /** initalize Bank and Country List var */
  const [bankList, setBankList] = useState([]);
  const [data, setData] = useState([]);
  const [form] = Form.useForm();
  /** Files list arrays */
  const [fileList, setFileList] = useState([]);
  const [fileList1, setFileList1] = useState([]);
  const [fileList2, setFileList2] = useState([]);
  const [fileList3, setFileList3] = useState([]);
  const [fileList4, setFileList4] = useState([]);
  const [fileList5, setFileList5] = useState([]);
  const [fileList6, setFileList6] = useState([]);
  const [fileList7, setFileList7] = useState([]);
  const [fileList8, setFileList8] = useState([]);

  const success = () => {
    messageApi
      .open({
        type: "loading",
        content: "Processing..",
        duration: 2.5,
      })
      .then(() => {
        message.success("Saved successfully.", 2.5);
        navigate("/pagetwo");
      });
  };

  const formatDate = (date) => {
    // Get the individual date components
    var day = date.getDate(); // get the Date part
    var month = date.getMonth() + 1; // Get the Month (Months are zero-based)
    var year = date.getFullYear(); // Get the year
    // Pad single digits with leading zeros to make 2 digits,
    var formattedDay = day < 10 ? "0" + day : day;
    var formattedMonth = month < 10 ? "0" + month : month;

    // Concatenate (join) the formatted date components
    return formattedDay + "/" + formattedMonth + "/" + year;
  };
  const warning = (message = "This is a warning message") => {
    messageApi.open({
      type: "warning",
      content: message,
    });
  };
  const fetchAPIs = async (id = "") => {
    setLoading(true);
    try {
      const {
        data: nationalities,
        isError,
        message,
      } = await commonAPIs(REQUEST_TYPES.GET, ENDPOINTS.GET_ALL_NATIONALITY);
      const { data: banksData, isError1, message1 } = await commonAPIs(REQUEST_TYPES.GET, ENDPOINTS.GET_ALL_BANKS);
      const { data, isError2, message2 } = await commonAPIs(
        REQUEST_TYPES.GET,
        `${ENDPOINTS.GET_NOC_APPLICATION_BY_ID}?NocApplicationId=${id}`
      );
      if (isError || isError1 || isError2) {
        setLoading(false);
        warning(message);
      }
      if (!isError && nationalities) {
        setNationalityList(nationalities);
      }
      if (!isError1 && banksData) {
        setBankList(banksData);
      }
      if (!isError2 && data) {
        setData(data);
        if (data?.subLeaseExpireDate !== null) {
          form.setFieldsValue({
            SubLeaseExpireDate: dayjs(data?.subLeaseExpireDate, "YYYY-MM-DD"),
          });
        }

        if (data?.subLeaseIssueDate !== null) {
          form.setFieldsValue({
            SubLeaseIssueDate: dayjs(data?.subLeaseIssueDate, "YYYY-MM-DD"),
          });
        }

        if (data?.titleExpireDate !== null) {
          form.setFieldsValue({
            TitleExpireDate: dayjs(data?.titleExpireDate, "YYYY-MM-DD"),
          });
        }

        if (data?.titleIssueDate !== null) {
          form.setFieldsValue({
            TitleIssueDate: dayjs(data?.titleIssueDate, "YYYY-MM-DD"),
          });
        }

        if (data?.depositDate !== null) {
          form.setFieldsValue({
            DepositDate: dayjs(data.depositDate, "YYYY-MM-DD"),
          });
        }

        if (data?.dob !== null && data?.dob !== "0001-01-01T00:00:00") {
          form.setFieldsValue({
            dateofBirth: dayjs(new Date(data.dob)),
          });
        }

        if (data?.tentativeExpectedVisitStartDate !== null) {
          form.setFieldsValue({
            tentativeDate: [
              dayjs(data.tentativeExpectedVisitStartDate, "YYYY-MM-DD"),
              dayjs(data.tentativeExpectedVisitEndDate, "YYYY-MM-DD"),
            ],
          });

          if (data?.foreignerVisitDurationStartDate !== null) {
            form.setFieldsValue({
              ForeignerVisitDurationDate: [
                dayjs(data.foreignerVisitDurationStartDate),
                dayjs(data.foreignerVisitDurationEndDate),
              ],
            });
          }
        }

        if (data?.dateOfVisaApplication !== null) {
          form.setFieldsValue({
            DateOfVisaApplication: dayjs(data.dateOfVisaApplication, "YYYY-MM-DD"),
          });
        }

        if (data?.visaStartDate !== null && data?.visaEndDate !== null) {
          form.setFieldsValue({
            VisaStartDate: dayjs(data.visaStartDate),
            VisaEndDate: dayjs(data.visaEndDate),
          });
        }

        if (data?.visaGrantDate !== null) {
          form.setFieldsValue({
            VisaGrantDate: dayjs(data.visaGrantDate, "YYYY-MM-DD"),
          });
        }

        form.setFieldsValue({
          BankId: data.bankId,
          nocType: data.nocType,
          licenseNumber: data.licenseNumber,
          BranchName: data.branchName,
          DepositAmountInNumber: data.depositAmountInNumber,
          DepositAmountInWords: data.depositAmountInWords,
          expatTitle: data.expatTitle,
          gender: data.gender,
          firstName: data.firstName,
          middleName: data.middleName,
          lastName: data.lastName,
          fatherName: data.fatherName,
          permanentAddress: data.permanentAddress,
          passportNo: data.passportNo,
          country: data.countryName,
          nationality: data.nationalityName,
          jobDescription: data.jobDescription,
          profession: data.profession,
          qualification: data.qualification,
          PurposeofVisit: data.purposeofVisit,
          NatureOfJob: data.natureOfJob,
          ProjectDistrict: data.projectDistrict,
          ProjectDetails: data.projectDetails,
          ProjectName: data.projectName,
          licensenumber: data.licenseNumber,
          companyName: data.companyName,
          pakistanAddress: data.sponsorPakistanAddress,
          addressVisitingOrganisations: data.sponsorAddressVisitingOrganisation,
          nameDesignation: data.sponsorPakistaniOfficialDesignationName,
          pakistaniOfficalName: data.sponsorPakistaniOfficialName,
          cincNo: data.sponsorPakistaniOfficialCNIC,
          contactNo: data.sponsorPakistaniOfficialContactNumber,
          pakistaniOfficalAddress: data.sponsorPakistaniOfficialAddress,
          ForeignerPlacesOFvisitDetail: data.foreignerPlacesOFvisitDetail,
          ForeignerWorkPlacesWithAddress: data.foreignerWorkPlacesWithAddress,
          ForeignerPlacesWhereStay: data.foreignerPlacesWhereStay,
          VisaReferenceNumber: data.visaReferenceNumber,
          VisaSubcategory: data.visaSubcategory,
          ApplicationType: data.applicationType,
          VisaStayFacility: data.visaStayFacility,
          VisaCategory: data.visaCategory,
          VisaDurationInDays: data.visaDurationInDays,
          TravelCountryName: data.travelCountryName,
        });

        if (data?.titleGrantLetterPath) {
          let str = data?.titleGrantLetterPath;
          let strresult = str.split("/");

          let file = {
            uid: "-1",
            name: "Title Grant Letter",
            status: "done",
            url: REACT_APP_FILE_URL + data?.titleGrantLetterPath,
          };
          setFileList([...fileList, file]);
        }

        if (data?.subLeaseLetterPath) {
          let str = data?.subLeaseLetterPath;
          let strresult = str.split("/");

          let file = {
            uid: "-1",
            name: "Sub Lease Letter",
            status: "done",
            url: REACT_APP_FILE_URL + data?.subLeaseLetterPath,
          };
          setFileList1([...fileList1, file]);
        }

        if (data?.depositSlip) {
          let str = data?.depositSlip;
          let strresult = str.split("/");

          let file = {
            uid: "-1",
            name: "Deposit Slip",
            status: "done",
            url: REACT_APP_FILE_URL + data?.depositSlip,
          };
          setFileList2([...fileList2, file]);
        }

        if (data?.expatriatePersonalDetailImage) {
          let str = data?.expatriatePersonalDetailImage;
          let strresult = str.split("/");

          let file = {
            uid: "-1",
            name: "Expatriate Personal Picture",
            status: "done",
            url: REACT_APP_FILE_URL + data?.expatriatePersonalDetailImage,
          };
          setFileList3([...fileList3, file]);
        }

        if (data?.passportImagePath) {
          let str = data?.passportImagePath;
          let strresult = str.split("/");

          let file = {
            uid: "-1",
            name: "Passport Image",
            status: "done",
            url: REACT_APP_FILE_URL + data?.passportImagePath,
          };
          setFileList4([...fileList4, file]);
        }

        if (data?.mapOfMiningTitlePath) {
          let str = data?.mapOfMiningTitlePath;
          let strresult = str.split("/");

          let file = {
            uid: "-1",
            name: "Map of Mining Title",
            status: "done",
            url: REACT_APP_FILE_URL + data?.mapOfMiningTitlePath,
          };
          setFileList5([...fileList5, file]);
        }

        if (data?.sponsorPakistaniOfficialCNICFrontImagePath) {
          let str = data?.sponsorPakistaniOfficialCNICFrontImagePath;
          let strresult = str.split("/");

          let file = {
            uid: "-1",
            name: "Sponor CINC Front Image",
            status: "done",
            url: REACT_APP_FILE_URL + data?.sponsorPakistaniOfficialCNICFrontImagePath,
          };
          setFileList6([...fileList6, file]);
        }

        if (data?.sponsorPakistaniOfficialCNICBackImagePath) {
          let str = data?.sponsorPakistaniOfficialCNICBackImagePath;
          let strresult = str.split("/");

          let file = {
            uid: "-1",
            name: "Sponor CINC Back Image",
            status: "done",
            url: REACT_APP_FILE_URL + data?.sponsorPakistaniOfficialCNICBackImagePath,
          };
          setFileList8([...fileList8, file]);
        }

        if (data?.visaGrantCertificate) {
          let str = data?.visaGrantCertificate;
          let strresult = str.split("/");

          let file = {
            uid: "-1",
            name: "Visa Grant Certificate",
            status: "done",
            url: REACT_APP_FILE_URL + data?.visaGrantCertificate,
          };
          setFileList7([...fileList7, file]);
        }

        if (data.nocType === "Online") {
          toggelfields("Urgent");
        } else {
          toggelfields(data.nocType);
        }
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };
  useEffect(() => {
    const applicationId = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("id") : "";
    if (applicationId) {
      fetchAPIs(applicationId);
    }
  }, []);

  const toggelfields = (values) => {
    if (values === "Urgent") {
      setshowNOCType(true);
    } else {
      setshowNOCType(false);
    }
  };

  const onFinish1 = (values) => {
    setErrorMsg("on Finish");
  };
  const Cancel = () => {
    navigate("/expatnocapplication");
  };

  const onFinishFailed1 = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (date, datestring) => {
    console.log(datestring);
    date.value = datestring;
  };

  const props8 = {
    onRemove: (file) => {
      const index = fileList8.indexOf(file);
      const newFileList = fileList8.slice();
      newFileList.splice(index, 1);
      setFileList8(newFileList);
    },
    beforeUpload: (file) => {
      setFileList8([...fileList8, file]);

      return false;
    },
    fileList8,
  };

  const props7 = {
    onRemove: (file) => {
      const index = fileList7.indexOf(file);
      const newFileList = fileList7.slice();
      newFileList.splice(index, 1);
      setFileList7(newFileList);
    },
    beforeUpload: (file) => {
      setFileList7([...fileList7, file]);

      return false;
    },
    fileList7,
  };

  const props6 = {
    onRemove: (file) => {
      const index = fileList6.indexOf(file);
      const newFileList = fileList6.slice();
      newFileList.splice(index, 1);
      setFileList6(newFileList);
    },
    beforeUpload: (file) => {
      setFileList6([...fileList6, file]);

      return false;
    },
    fileList6,
  };

  const props5 = {
    onRemove: (file) => {
      const index = fileList5.indexOf(file);
      const newFileList = fileList5.slice();
      newFileList.splice(index, 1);
      setFileList5(newFileList);
    },
    beforeUpload: (file) => {
      setFileList5([...fileList5, file]);

      return false;
    },
    fileList5,
  };

  const props4 = {
    onRemove: (file) => {
      const index = fileList4.indexOf(file);
      const newFileList = fileList4.slice();
      newFileList.splice(index, 1);
      setFileList4(newFileList);
    },
    beforeUpload: (file) => {
      setFileList4([...fileList4, file]);

      return false;
    },
    fileList4,
  };

  const props3 = {
    onRemove: (file) => {
      const index = fileList3.indexOf(file);
      const newFileList = fileList3.slice();
      newFileList.splice(index, 1);
      setFileList3(newFileList);
    },
    beforeUpload: (file) => {
      setFileList3([...fileList3, file]);

      return false;
    },
    fileList3,
  };

  const props2 = {
    onRemove: (file) => {
      const index = fileList2.indexOf(file);
      const newFileList = fileList2.slice();
      newFileList.splice(index, 1);
      setFileList2(newFileList);
    },
    beforeUpload: (file) => {
      setFileList2([...fileList2, file]);

      return false;
    },
    fileList2,
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
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/service-and-support", label: "Services & Support" },
    { path: "/expatriate-security", label: "Expatriate Security" },
    { path: "#", label: "NOC Application View" },
  ];

  return (
    <Container>
      <div className="wrapper">
        <div className="addwrapper">
          <div className="wrapper__head">
            <div className="breadcrumbbar mt-[50px]">
              <BreadCrumbs breadcrumbs={breadcrumbs} />
              <div className="mineral-testing-title">NOC Application View</div>
            </div>
            <h3 style={{ paddingBottom: "40px", color: "#27ae60" }}>NOC Application Details</h3>
          </div>
          <div className="wrapper__container">
            <div className="wrapper__form" style={{ width: "100%" }}>
              <ConfigProvider
                theme={{
                  token: {
                    /* here is your global tokens */
                    colorPrimary: "#27ae60",
                    //colorPrimaryHover: '#27ae60',
                    //colorSplit: '#B6E4C8',
                    colorLink: "#555555",
                    colorLinkActive: "#27ae60",
                    colorLinkHover: "#27ae60",
                    colorTextDisabled: "555555",
                    colorText: "black",
                    labelFontSize: "15px",
                    fontFamily: "helvetica",
                  },
                  components: {
                    Form: {
                      fontFamily: "helvetica",
                    },
                  },
                }}
              >
                {/** Form start */}
                <Form
                  form={form}
                  initialValues={{ data }}
                  variant="outlined"
                  layout="vertical"
                  style={{
                    width: "100%",
                  }}
                  onFinish={onFinish1}
                  onFinishFailed={onFinishFailed1}
                  autoComplete="off"
                  disabled={true}
                >
                  <Flex wrap gap="center" horizontal justify="space-around" style={{ width: "100%" }}>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="nocType"
                        label="NOC Type"
                        rules={[
                          {
                            //required: true,
                            //message: "Please select Type!",
                          },
                        ]}
                      >
                        <Select className={styles.inputselect} placeholder="NOC Type">
                          <Option value="Normal">Normal</Option>
                          <Option value="Urgent">Urgent</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="licenseNumber"
                        label="Title/License Number"
                        rules={[
                          {
                            //required: true,
                            //message: "Please input Title/License!",
                          },
                        ]}
                      >
                        <Input className={styles.inputclass} />
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 25%"></Col>
                  </Flex>
                  <Flex wrap gap="center" horizontal justify="space-around" style={{ width: "100%" }}>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="TitleIssueDate"
                        label="Title Issue Date"
                        rules={[
                          {
                            //required: true,
                            //message: "Please select Title Issue Date!",
                          },
                        ]}
                      >
                        <DatePicker name="TitleIssueDate" className={styles.inputselect} format={dateFormat} />
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="TitleExpireDate"
                        label="Title Expiry Date"
                        rules={[
                          {
                            //required: true,
                            //message: "Please select Title Expiry Date!",
                          },
                        ]}
                      >
                        <DatePicker
                          name="TitleExpireDate"
                          className={styles.inputselect}
                          onChange={onChange}
                          format={dateFormat}
                        />
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 25%">
                      <Form.Item
                        name="TitleGrantLetter"
                        label="Title Grant Letter"
                        rules={[
                          {
                            //required: true,
                            //message: "Please upload Grant Letter!",
                          },
                        ]}
                      >
                        <Upload {...props} fileList={fileList}>
                          <Button className={styles.fileupload} icon={<UploadOutlined />}>
                            Grant Letter
                          </Button>
                        </Upload>
                      </Form.Item>
                    </Col>
                  </Flex>

                  {data?.subLeaseLetterPath ? (
                    <>
                      <Flex wrap gap="center" horizontal justify="space-around" style={{ width: "100%" }}>
                        <Col className="column" flex="1 0 15%">
                          <Form.Item name="SubLeaseIssueDate" label="SubLease Issue Date">
                            <DatePicker
                              name="SubLeaseIssueDate"
                              className={styles.inputselect}
                              onChange={onChange}
                              format={dateFormat}
                            />
                          </Form.Item>
                        </Col>
                        <Col className="column" flex="1 0 15%">
                          <Form.Item name="SubLeaseExpireDate" label="SubLease Expiry Date">
                            <DatePicker
                              name="SubLeaseExpireDate"
                              className={styles.inputselect}
                              onChange={onChange}
                              format={dateFormat}
                            />
                          </Form.Item>
                        </Col>
                        <Col className="column" flex="1 0 25%">
                          <Form.Item name="SubLeaseLetter" label="Mining Sub-Lease Letter (If Applicable) (Optional)">
                            <Upload {...props1} fileList={fileList1}>
                              <Button className={styles.fileupload} icon={<UploadOutlined />}>
                                Sub Lease Letter
                              </Button>
                            </Upload>
                          </Form.Item>
                        </Col>
                      </Flex>
                    </>
                  ) : (
                    ""
                  )}

                  {showNOCType ? (
                    <>
                      <h3 style={{ marginTop: "10px", paddingBottom: "10px", color: "#27ae60" }}>
                        Deposit Details
                      </h3>
                      <Flex wrap gap="center" horizontal justify="space-around" style={{ width: "100%" }}>
                        <Col className="column" flex="1 0 15%">
                          <Form.Item
                            name="DepositDate"
                            label="Deposit Date"
                            rules={[
                              {
                                //required: true,
                                //message: "Please select Deposit Date!",
                              },
                            ]}
                          >
                            <DatePicker
                              name="DepositDate"
                              className={styles.inputselect}
                              onChange={onChange}
                              format={dateFormat}
                            />
                          </Form.Item>
                        </Col>
                        <Col className="column" flex="1 0 15%">
                          <Form.Item
                            name="BankId"
                            label="Deposit Bank"
                            rules={[
                              {
                                //required: true,
                                //message: "Please select Bank!",
                              },
                            ]}
                          >
                            <Select className={styles.inputselect} placeholder="Banks List">
                              {bankList.map((data) => {
                                return <Option value={data.id}>{data.name}</Option>;
                              })}
                            </Select>
                          </Form.Item>
                        </Col>
                        <Col className="column" flex="1 0 25%">
                          <Form.Item
                            name="BranchName"
                            label="Branch Name"
                            rules={[
                              {
                                //required: true,
                                //message: "Please input Branch Name!",
                              },
                            ]}
                          >
                            <Input className={styles.inputclass} />
                          </Form.Item>
                        </Col>
                      </Flex>

                      <Flex wrap gap="center" horizontal justify="space-around" style={{ width: "100%" }}>
                        <Col className="column" flex="1 0 15%">
                          <Form.Item
                            name="DepositAmountInNumber"
                            label="Deposit Amount in Number"
                            rules={[
                              {
                                //required: true,
                                //message: "Please input Deposit Amount in Number!",
                              },
                            ]}
                          >
                            <Input className={styles.inputclass} />
                          </Form.Item>
                        </Col>
                        <Col className="column" flex="1 0 15%">
                          <Form.Item
                            name="DepositAmountInWords"
                            label=" Deposit Amount in Words"
                            rules={[
                              {
                                //required: true,
                                //message: "Please input Deposit Amount in Words!",
                              },
                            ]}
                          >
                            <Input className={styles.inputclass} />
                          </Form.Item>
                        </Col>
                        <Col className="column" flex="1 0 25%">
                          <Form.Item
                            name="depositSlip"
                            label="Deposit Slip"
                            rules={[
                              {
                                //required: true,
                                //message: "Please upload Slip!",
                              },
                            ]}
                          >
                            <Upload {...props2} fileList={fileList2}>
                              <Button className={styles.fileupload} icon={<UploadOutlined />}>
                                Deposit Slip
                              </Button>
                            </Upload>
                          </Form.Item>
                        </Col>
                      </Flex>
                    </>
                  ) : (
                    <>
                      <div></div>
                    </>
                  )}

                  {/*
                     Second Page Start
                    */}

                  <h3 style={{ marginTop: "10px", paddingBottom: "10px", color: "#27ae60" }}>
                    Expatriate Personal Details
                  </h3>
                  <Flex wrap gap="center" horizontal justify="space-around" style={{ width: "100%" }}>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="gender"
                        label="Gender"
                        rules={[
                          {
                            //required: true,
                            //message: "Please select Gender!",
                          },
                        ]}
                      >
                        <Select className={styles.inputselect} placeholder="Gender">
                          <Option value="Male">Male</Option>
                          <Option value="Female">Female</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="expatTitle"
                        label="Expat Title"
                        rules={[
                          {
                            //required: true,
                            //message: "Please select Title!",
                          },
                        ]}
                      >
                        <Select className={styles.inputselect} placeholder="Title">
                          <Option value="Mr.">Mr.</Option>
                          <Option value="Miss">Ms.</Option>
                          <Option value="Mrs.">Mrs.</Option>
                        </Select>
                      </Form.Item>
                    </Col>

                    <Col className="column" flex="1 0 25%">
                      <Form.Item
                        name="firstName"
                        label="First Name"
                        rules={[
                          {
                            //required: true,
                            //message: "Please input First Name!",
                          },
                        ]}
                      >
                        <Input className={styles.inputclass} />
                      </Form.Item>
                    </Col>
                  </Flex>

                  <Flex wrap gap="center" horizontal justify="space-around" style={{ width: "100%" }}>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="middleName"
                        label="Middle Name (Optional)"
                        rules={[
                          {
                            //required: true,
                            //message: "Please input Middle Name!",
                          },
                        ]}
                      >
                        <Input className={styles.inputclass} />
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="lastName"
                        label="Last Name"
                        rules={[
                          {
                            //required: true,
                            //message: "Please enter Last Name!",
                          },
                        ]}
                      >
                        <Input className={styles.inputclass} />
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 25%">
                      <Form.Item
                        name="dateofBirth"
                        label="Date of Birth"
                        rules={[
                          {
                            //required: true,
                            //message: "Please Select Date of Birth!",
                          },
                        ]}
                      >
                        <DatePicker
                          name="dateofBirth"
                          className={styles.inputselect}
                          onChange={onChange}
                          format={dateFormat}
                        />
                      </Form.Item>
                    </Col>
                  </Flex>
                  <Flex wrap gap="center" horizontal justify="space-around" style={{ width: "100%" }}>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="fatherName"
                        label="Father's Name"
                        rules={[
                          {
                            //required: true,
                            //message: "Please input Father's Name!",
                          },
                        ]}
                      >
                        <Input className={styles.inputclass} />
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="permanentAddress"
                        label="Permanent Address"
                        rules={[
                          {
                            //required: true,
                            //message: "Please input Permanent Address!",
                          },
                        ]}
                      >
                        <Input className={styles.inputclass} />
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 25%">
                      <Form.Item
                        name="nationality"
                        label="Nationality"
                        rules={[
                          {
                            //required: true,
                            //message: "Please input Nationality!",
                          },
                        ]}
                      >
                        <Select className={styles.inputselect} placeholder="Country List">
                          {nationalityList.map((data) => {
                            return <Option value={data.nationalityName}>{data.nationalityName}</Option>;
                          })}
                        </Select>
                      </Form.Item>
                    </Col>
                  </Flex>
                  <Flex wrap gap="center" horizontal justify="space-around" style={{ width: "100%" }}>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="country"
                        label="Country"
                        rules={[
                          {
                            //required: true,
                            message: "Please select Country!",
                          },
                        ]}
                      >
                        <Select showSearch className={styles.inputselect} placeholder="Country List">
                          {nationalityList.map((data) => {
                            return <Option value={data.countryName}>{data.countryName}</Option>;
                          })}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="passportNo"
                        label="Passport No."
                        rules={[
                          {
                            //required: true,
                            //message: "Please input Passport No.!",
                          },
                        ]}
                      >
                        <Input className={styles.inputclass} />
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 25%">
                      <Form.Item
                        name="passportimage"
                        label="Passport Image"
                        rules={[
                          {
                            //required: true,
                            //message: "Please upload Passport image!",
                          },
                        ]}
                      >
                        <Upload {...props4} fileList={fileList4}>
                          <Button className={styles.fileupload} icon={<UploadOutlined />}>
                            Passport
                          </Button>
                        </Upload>
                      </Form.Item>
                    </Col>
                  </Flex>
                  <Flex wrap gap="center" horizontal justify="space-around" style={{ width: "100%" }}>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="picture"
                        label="Colored Passport Size Picture (35mm x 45mm)"
                        rules={[
                          {
                            //required: true,
                            //message: "Please upload Picture!",
                          },
                        ]}
                      >
                        <Upload {...props3} fileList={fileList3}>
                          <Button className={styles.fileupload} icon={<UploadOutlined />}>
                            Picture
                          </Button>
                        </Upload>
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 15%"></Col>
                    <Col className="column" flex="1 0 25%"></Col>
                  </Flex>

                  {/*
                     Second Page End
                    */}
                  {/*
                        Third Page Start
                    */}
                  <h3 style={{ marginTop: "10px", paddingBottom: "10px", color: "#27ae60" }}>
                    Professional Details
                  </h3>
                  <Flex wrap gap="center" horizontal justify="space-around" style={{ width: "100%" }}>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="profession"
                        label="Profession"
                        rules={[
                          {
                            //required: true,
                            //message: "Please input Profession!",
                          },
                        ]}
                      >
                        <Select className={styles.inputselect} placeholder="Geologist">
                          <Option value="Geologist">Geologist</Option>
                          <Option value="MiningEngineer">Mining Engineer</Option>
                          <Option value="Miner">Miner</Option>
                          <Option value="Operator">Operator</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="qualification"
                        label="Qualification"
                        rules={[
                          {
                            //required: true,
                            //message: "Please input Qualification!",
                          },
                        ]}
                      >
                        <Select className={styles.inputselect} placeholder="Qualification">
                          <Option value="PHD">PHD</Option>
                          <Option value="Masters">Masters</Option>
                          <Option value="Graduation">Graduation</Option>
                          <Option value="Diploma">Diploma</Option>
                          <Option value="Certification">Certification</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 25%">
                      <Form.Item
                        name="jobDescription"
                        label="Expertise/Job Description"
                        rules={[
                          {
                            //required: true,
                            //message: "Please input Expertise/Job Description!",
                          },
                        ]}
                      >
                        <Input placeholder="Director" className={styles.inputclass} />
                      </Form.Item>
                    </Col>
                  </Flex>

                  {/*
                        Third Page End
                    */}

                  {/*
                        Fourth Page Start
                    */}

                  <h3 style={{ marginTop: "10px", paddingBottom: "10px", color: "#27ae60" }}>
                    Purpose of Visit
                  </h3>
                  <Flex wrap gap="center" horizontal justify="space-around" style={{ width: "100%" }}>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="PurposeofVisit"
                        label="Purpose of Visit"
                        rules={[
                          {
                            //required: true,
                            //message: "Please select Purpose!",
                          },
                        ]}
                      >
                        <Select className={styles.inputselect} placeholder="Visit">
                          <Option value="WorkDrilling">Work-Drilling</Option>
                          <Option value="SiteVisit">Site Visit</Option>
                          <Option value="Survey">Survey</Option>
                          <Option value="Business">Business</Option>
                          <Option value="Stayandvigilanceofwork">Stay and Vigilance of Work</Option>
                          <Option value="InstallationofProject">Installation of Plant</Option>
                          <Option value="ProjectbasedSeismicActivity">Project based- Seismic Activit</Option>
                          <Option value="AnyOtherSpecify">Any Other Specify</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="NatureOfJob"
                        label="Nature of Job"
                        rules={[
                          {
                            //required: true,
                            //message: "Please input Nature of Job!",
                          },
                        ]}
                      >
                        <Input placeholder="Stay and vigilance of work" className={styles.inputclass} />
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 25%">
                      <Form.Item
                        name="ProjectName"
                        label="Name of Project"
                        rules={[
                          {
                            //required: true,
                            //message: "Please input Name of Project!",
                          },
                        ]}
                      >
                        <Input placeholder="Name of Project" className={styles.inputclass} />
                      </Form.Item>
                    </Col>
                  </Flex>
                  <Flex wrap gap="center" horizontal justify="space-around" style={{ width: "100%" }}>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="ProjectDistrict"
                        label="Project Location/District"
                        rules={[
                          {
                            //required: true,
                            //message: "Please input Project Location!",
                          },
                        ]}
                      >
                        <Input placeholder="Base Camp Mining Site, Chitral" className={styles.inputclass} />
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="ProjectDetails"
                        label="Project Details"
                        rules={[
                          {
                            //required: true,
                            //message: "Please input Project Details!",
                          },
                        ]}
                      >
                        <Input placeholder="Details" className={styles.inputclass} />
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 25%">
                      <Form.Item
                        name="tentativeDate"
                        label="Tentative Date expected to Visit Field"
                        rules={[
                          {
                            //required: true,
                            //message: "Please Select Tentative Date!",
                          },
                        ]}
                      >
                        <RangePicker name="tentativeDate" className={styles.inputselect} format={dateFormat} />
                      </Form.Item>
                    </Col>
                  </Flex>
                  <Flex wrap gap="center" horizontal justify="space-around" style={{ width: "100%" }}>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="mapminingtitle"
                        label="Map of Mining Title (Coordinates)"
                        rules={[
                          {
                            //required: true,
                            //message: "Please upload Map!",
                          },
                        ]}
                      >
                        <Upload {...props5} fileList={fileList5}>
                          <Button className={styles.fileupload} icon={<UploadOutlined />}>
                            Coordinates Map
                          </Button>
                        </Upload>
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 15%"></Col>
                    <Col className="column" flex="1 0 25%"></Col>
                  </Flex>

                  {/*
                        fourth Page End
                    */}

                  {/*
                        Fifth page start
                    */}
                  {Array.isArray(data?.nocApplicationEquipments) && data?.nocApplicationEquipments.length ? (
                    <>
                      <div style={{ width: "78%", marginLeft: "130px" }}>
                        <h3 style={{ marginTop: "10px", marginLeft: "5px", paddingBottom: "10px", color: "#27ae60" }}>
                          Equipment Listings
                        </h3>
                        <div style={{ paddingTop: "20px" }}>
                          <ConfigProvider
                            theme={{
                              token: {
                                /* Here is your global tokens */
                                colorPrimary: "#27ae60",
                                colorLink: "#555555",
                                colorLinkActive: "#27ae60",
                                colorLinkHover: "#27ae60",
                              },
                              components: {
                                Table: {
                                  /* here is your component tokens */
                                  headerBg: "#ECECEC",
                                  headerColor: "black",
                                  rowHoverBg: "#fafafa",
                                  //colorText: '#27ae60',
                                },
                              },
                            }}
                          >
                            <Table dataSource={data.nocApplicationEquipments} columns={columns} />
                          </ConfigProvider>
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  {/*
                        Fifth page end
                    */}

                  {/*
                        sixth page start
                    */}

                  <h3 style={{ marginTop: "10px", paddingBottom: "10px", color: "#27ae60" }}>
                    Sponsor Details
                  </h3>
                  <Flex wrap gap="center" horizontal justify="space-around" style={{ width: "100%" }}>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="licensenumber"
                        label="Title/License Number"
                        rules={[
                          {
                            //required: true,
                            //message: "Please input Title/License Number!",
                          },
                        ]}
                      >
                        <Input placeholder="Title/License Number" className={styles.inputclass} />
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="companyName"
                        label="Sponsoring Company"
                        rules={[
                          {
                            //required: true,
                            //message: "Please input Sponsoring Company!",
                          },
                        ]}
                      >
                        <Input placeholder="Sponsoring Company" className={styles.inputclass} />
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 25%">
                      <Form.Item
                        name="pakistanAddress"
                        label="Pakistan Address"
                        rules={[
                          {
                            //required: true,
                            //message: "Please input Pakistan Address!",
                          },
                        ]}
                      >
                        <Input placeholder="Pakistan Address" className={styles.inputclass} />
                      </Form.Item>
                    </Col>
                  </Flex>
                  <Flex wrap gap="center" horizontal justify="space-around" style={{ width: "100%" }}>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="addressVisitingOrganisations"
                        label="Name and Address of Visiting Organisations"
                        rules={[
                          {
                            //required: true,
                            //message: "Please input Name and Address of Visiting Organisations!",
                          },
                        ]}
                      >
                        <Input placeholder="Name and Address of Visiting Organisations" className={styles.inputclass} />
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="nameDesignation"
                        label="Name & Designation of Conducting Offical"
                        rules={[
                          {
                            //required: true,
                            //message: "Please input Name & Designation of Conducting Offical!",
                          },
                        ]}
                      >
                        <Input placeholder="Name & Designation of Conducting Offical" className={styles.inputclass} />
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 25%">
                      <Form.Item
                        name="pakistaniOfficalName"
                        label="Name of  Pakistani Offical"
                        rules={[
                          {
                            //required: true,
                            //message: "Please input Name of Pakistani Offical!",
                          },
                        ]}
                      >
                        <Input placeholder="Name of Pakistani Offical" className={styles.inputclass} />
                      </Form.Item>
                    </Col>
                  </Flex>
                  <Flex wrap gap="center" horizontal justify="space-around" style={{ width: "100%" }}>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="contactNo"
                        label="Contact No. of Pakistani Offical"
                        rules={[
                          {
                            //required: true,
                            //message: "Please input Contact No. of Pakistani Offical!",
                          },
                        ]}
                      >
                        <Input placeholder="Contact No. of Pakistani Offical" className={styles.inputclass} />
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="pakistaniOfficalAddress"
                        label="Address of Pakistani Offical"
                        rules={[
                          {
                            //required: true,
                            //message: "Please input Address of Pakistani Offical!",
                          },
                        ]}
                      >
                        <Input placeholder="Address of Pakistani Offical" className={styles.inputclass} />
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 25%">
                      <Form.Item
                        name="cincNo"
                        label="CINC No. of Pakistani Offical"
                        rules={[
                          {
                            //required: true,
                            //message: "Please input CINC No. of Pakistani Offical!",
                          },
                        ]}
                      >
                        <Input placeholder="CINC No. of Pakistani Offical" className={styles.inputclass} />
                      </Form.Item>
                    </Col>
                  </Flex>
                  <Flex wrap gap="center" horizontal justify="space-around" style={{ width: "100%" }}>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="cnicImageFront"
                        label="CNIC Front Image of Pakistani Offical"
                        rules={[
                          {
                            //required: true,
                            //message: "Please upload CNIC Image!",
                          },
                        ]}
                      >
                        <Upload {...props6} fileList={fileList6}>
                          <Button className={styles.fileupload} icon={<UploadOutlined />}>
                            CINC Front Image
                          </Button>
                        </Upload>
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="cnicImageBack"
                        label="CNIC Back Image of Pakistani Offical"
                        rules={[
                          {
                            //required: true,
                            //message: "Please upload CNIC Image!",
                          },
                        ]}
                      >
                        <Upload {...props8} fileList={fileList8}>
                          <Button className={styles.fileupload} icon={<UploadOutlined />}>
                            CINC Back Image
                          </Button>
                        </Upload>
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 25%"></Col>
                  </Flex>

                  {/*
                        sixth page end
                    */}

                  {/*
                        seventh page start
                    */}

                  <h3 style={{ marginTop: "10px", paddingBottom: "10px", color: "#27ae60" }}>
                    Foreigner's Accommodation Details
                  </h3>
                  <Flex wrap gap="center" horizontal justify="space-around" style={{ width: "100%" }}>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="ForeignerPlacesOFvisitDetail"
                        label="Details of Places to be visited during stay"
                        rules={[
                          {
                            //required: true,
                            //message: "Please input Details of Places!",
                          },
                        ]}
                      >
                        <Input placeholder="Details of Places" className={styles.inputclass} />
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="ForeignerWorkPlacesWithAddress"
                        label="Places with Address (Foreigner is required to
                            work)"
                        rules={[
                          {
                            //required: true,
                            //message: "Please input Places!",
                          },
                        ]}
                      >
                        <Input placeholder="Places with Address" className={styles.inputclass} />
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 25%">
                      <Form.Item
                        name="ForeignerPlacesWhereStay"
                        label="Places where the foreigner will stay"
                        rules={[
                          {
                            //required: true,
                            //message: "Please input Place of Stay!",
                          },
                        ]}
                      >
                        <Input placeholder="Place of Stay" className={styles.inputclass} />
                      </Form.Item>
                    </Col>
                  </Flex>
                  <Flex wrap gap="center" horizontal justify="space-around" style={{ width: "100%" }}>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="ForeignerVisitDurationDate"
                        label="Duration of Visit"
                        rules={[
                          {
                            //required: true,
                            //message: "Please select Duration of Visit!",
                          },
                        ]}
                      >
                        <RangePicker name="Durtion of Visit" className={styles.inputselect} format={dateFormat} />
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 15%"></Col>
                    <Col className="column" flex="1 0 25%"></Col>
                  </Flex>

                  {/*
                        seventh page start
                    */}

                  {/*
                        eight page start
                    */}
                  {Array.isArray(data?.nocApplicationTravelHistory) && data?.nocApplicationTravelHistory.length ? (
                    <>
                      <div style={{ width: "78%", marginLeft: "130px" }}>
                        <h3 style={{ marginTop: "10px", marginLeft: "5px", paddingBottom: "10px", color: "#27ae60" }}>
                          Travel History Listing
                        </h3>
                        <ConfigProvider
                          theme={{
                            token: {
                              /* Here is your global tokens */
                              colorPrimary: "#27ae60",
                              colorLink: "#555555",
                              colorLinkActive: "#27ae60",
                              colorLinkHover: "#27ae60",
                            },
                            components: {
                              Table: {
                                /* here is your component tokens */
                                headerBg: "#ECECEC",
                                headerColor: "black",
                                rowHoverBg: "#fafafa",
                                //colorText: '#27ae60',
                              },
                            },
                          }}
                        >
                          <Table dataSource={data.nocApplicationTravelHistory} columns={columns1} />
                        </ConfigProvider>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  {/*
                        eigth page end
                    */}

                  {/*
                        ninth page start
                    */}

                  <h3 style={{ marginTop: "10px", paddingBottom: "10px", color: "#27ae60" }}>
                    Visa Grant Details
                  </h3>
                  <Flex wrap gap="center" horizontal justify="space-around" style={{ width: "100%" }}>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="DateOfVisaApplication"
                        label="Date of Visa Application"
                        rules={[
                          {
                            //required: true,
                            //message: "Please select Date of Visa Application!",
                          },
                        ]}
                      >
                        <DatePicker name="DateOfVisaApplication" className={styles.inputselect} format={dateFormat} />
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="VisaReferenceNumber"
                        label="Visa Reference Number"
                        rules={[
                          {
                            //required: true,
                            //message: "Please input Visa Reference Number!",
                          },
                        ]}
                      >
                        <Input placeholder="Visa Reference Number" className={styles.inputclass} />
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 25%">
                      <Form.Item
                        name="VisaCategory"
                        label="Visa Category"
                        rules={[
                          {
                            //required: true,
                            //message: "Please select Visa Category!",
                          },
                        ]}
                      >
                        <Select className={styles.inputselect} placeholder="Select Category">
                          <Option value="Business">Business</Option>
                          <Option value="Work">Work</Option>
                          <Option value="Tourist">Tourist</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Flex>
                  <Flex wrap gap="center" horizontal justify="space-around" style={{ width: "100%" }}>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="VisaSubcategory"
                        label="Visa Subcategory"
                        rules={[
                          {
                            //required: true,
                            //message: "Please select Visa Subcategory!",
                          },
                        ]}
                      >
                        <Select className={styles.inputselect} placeholder="Select Subcategory">
                          <Option value="Individual">Individual</Option>
                          <Option value="Company">Company</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="ApplicationType"
                        label="Application Type"
                        rules={[
                          {
                            //required: true,
                            //message: "Please input Application Type!",
                          },
                        ]}
                      >
                        <Input placeholder="Application Type" className={styles.inputclass} />
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 25%">
                      <Form.Item
                        name="VisaGrantDate"
                        label="Visa Grant Date"
                        rules={[
                          {
                            //required: true,
                            //message: "Please select Visa Grant Date!",
                          },
                        ]}
                      >
                        <DatePicker name="VisaGrantDate" className={styles.inputselect} format={dateFormat} />
                      </Form.Item>
                    </Col>
                  </Flex>
                  <Flex wrap gap="center" horizontal justify="space-around" style={{ width: "100%" }}>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="VisaStartDate"
                        label="Visa Start Date"
                        rules={[
                          {
                            //required: true,
                            //message: "Please select Visa Start Date!",
                          },
                        ]}
                      >
                        <DatePicker name="VisaStartDate" className={styles.inputselect} format={dateFormat} />
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="VisaEndDate"
                        label="Visa End Date"
                        rules={[
                          {
                            //required: true,
                            //message: "Please select Visa End Date!",
                          },
                        ]}
                      >
                        <DatePicker name="VisaEndDate" className={styles.inputselect} format={dateFormat} />
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 25%">
                      <Form.Item
                        name="VisaDurationInDays"
                        label="Visa Duration (Days)"
                        rules={[
                          {
                            //required: true,
                            //message: "Please input Visa Duration!",
                          },
                        ]}
                      >
                        <Input placeholder="300" className={styles.inputclass} />
                      </Form.Item>
                    </Col>
                  </Flex>
                  <Flex wrap gap="center" horizontal justify="space-around" style={{ width: "100%" }}>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="TravelCountryName"
                        label="Travel Document Country"
                        rules={[
                          {
                            //required: true,
                            //message: "Please select Travel Document Country!",
                          },
                        ]}
                      >
                        <Select className={styles.inputselect} placeholder="Select Country">
                          {nationalityList.map((data) => {
                            return <Option value={data.nationalityName}>{data.nationalityName}</Option>;
                          })}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="VisaStayFacility"
                        label="Stay Facility"
                        rules={[
                          {
                            //required: true,
                            //message: "Please input Stay Facility!",
                          },
                        ]}
                      >
                        <Input placeholder="Stay Facility" className={styles.inputclass} />
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 25%">
                      <Form.Item
                        name="VisaGrantCertificate"
                        label="Visa Grant Certificate"
                        rules={[
                          {
                            //required: true,
                            //message: "Please upload Visa Grant Certificate!",
                          },
                        ]}
                      >
                        <Upload {...props7} fileList={fileList7}>
                          <Button className={styles.fileupload} icon={<UploadOutlined />}>
                            Visa Grant Certificate
                          </Button>
                        </Upload>
                      </Form.Item>
                    </Col>
                  </Flex>
                </Form>
              </ConfigProvider>
              {/**Form end */}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default NOCApplicationView;
