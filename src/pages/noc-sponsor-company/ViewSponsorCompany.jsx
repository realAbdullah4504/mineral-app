import React, { useEffect, useState } from "react";
import styles from "./Company.module.css";
import { useNavigate } from "react-router-dom";
import { commonAPIs } from "services/api/common";
import { REQUEST_TYPES, ENDPOINTS } from "utils/constant/url";
import {
  UploadOutlined,
  PictureOutlined,
  FileImageOutlined,
} from "@ant-design/icons";
import { REACT_APP_FILE_URL } from "utils/constant/url";
import BreadCrumbs from "components/Breadcrumbs";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Container } from "components/UI/Container";
import { Loader } from "components";

import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
  Col,
  Row,
  message,
  Upload,
  Modal,
  Flex,
  ConfigProvider,
} from "antd";
const { Option } = Select;

function SponsorCompanyView() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  dayjs.extend(customParseFormat);


  const [messageApi, contextHolder] = message.useMessage();
  const [fileList, setFileList] = useState([]);
  const [fileList1, setFileList1] = useState([]);
  const [defaultFileList1, setDefaultFileList1] = useState([]);
  const [fileList2, setFileList2] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [citiesList, setCitiesList] = useState([]);

  const [data, setData] = useState([]);
  const [length, setLength] = useState(0);
  const [form] = Form.useForm();
  let arrayCity = [
    {
      id: "0",
      cityName: "None",
    },
  ];

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const success = () => {
    messageApi
      .open({
        type: "loading",
        content: "Processing..",
        duration: 2.5,
      })
      .then(() => {
        message.success("Saved successfully.", 2.5);
        navigate("/company-signup");
      });
  };
  const warning = (message = "This is a warning message") => {
    messageApi.open({
      type: "warning",
      content: message,
    });
  };
  const fetchData = async (id = "") => {
    setLoading(true);
    try {
      const {
        data: cities,
        isError,
        message,
      } = await commonAPIs(REQUEST_TYPES.GET, ENDPOINTS.GET_ALL_CITIES);
      const { data, isError1, message1 } = await commonAPIs(
        REQUEST_TYPES.GET,
        `${ENDPOINTS.GET_SPONSOR_COMPANY_BY_ID}?CompanyId=${id}`
      );
      if (isError || isError1) {
        setLoading(false);
        warning(message);
      }
      if (!isError && cities) {
        setCitiesList(cities);
      }
      if (!isError1 && data) {
        setData(data);
        form.setFieldsValue(data);
        form.setFieldsValue({
          registrationyear: dayjs(new Date(data.registrationYear, 1, 1)),
          faxName: data.faxNumber,
          cityId: data.cityId,
        });
        if (data?.logoPath) {
          let str = data?.logoPath;
          let strresult = str.split("/");

          let uidarray = strresult[strresult.length - 1].split("_");

          let logofile = {
            uid: uidarray[0],
            name: "logo",
            status: "done",
            url: REACT_APP_FILE_URL + data?.logoPath,
          };
          setFileList2([...fileList2, logofile]);
        }

        if (data?.companyRegistrationCertificates[0]) {
          let file222 = {
            uid: data?.companyRegistrationCertificates[0]?.fileGUID,
            name: "Registration Certificate",
            status: "done",
            url:
              REACT_APP_FILE_URL +
              data?.companyRegistrationCertificates[0]?.path,
          };
          setFileList([...fileList, file222]);
          form.setFieldsValue({
            registrationcredentials: file222,
          });
        }

        if (data?.companyTaxRegistrationCertificates[0]) {
          let file111 = {
            uid: data?.companyTaxRegistrationCertificates[0]?.fileGUID,
            name: "Tax Registration Certificate",
            status: "done",
            url:
              REACT_APP_FILE_URL +
              data?.companyTaxRegistrationCertificates[0]?.path,
          };
          setFileList1([...fileList1, file111]);
          form.setFieldsValue({
            taxregistration: file111,
          });
        }
      }
      setLoading(false);
    } catch (error) {
        setLoading(false);
    }
  };
  useEffect(() => {
    const CompanyId =
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search).get("id")
        : "";
    fetchData(CompanyId);
  }, []);

  const OnEdit = () => {
    navigate("/companyedit?Id=" + data.id);
  };

  const onFinish = (values) => {
    console.log("Success:", values);

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (date, datestring) => {
    date.value = datestring;
  };

  const companyStatusList = [
    {
      status: "PublicNewEntry",
      display_status: "Pending Submission",
    },
    {
      status: "PublicEntrySubmitted",
      display_status: "Submitted for Approval",
    },
    {
      status: "SubmissionFailed",
      display_status: "Re-Submit Application",
    },
    {
      status: "EntrySubmitted",
      display_status: "Submitted for Approval",
    },
    {
      status: "ReviewerChanges",
      display_status: "Awaiting Approval",
    },
    {
      status: "ReviewFailed",
      display_status: "Awaiting Approval",
    },
    {
      status: "ReviewPassed",
      display_status: "Awaiting Approval",
    },
    {
      status: "ApprovalFailed",
      display_status: "Awaiting Approval",
    },
    {
      status: "ApprovalPassed",
      display_status: "Company Approved",
    },
  ];

  const getStatus = (item) => {
    const rarray = companyStatusList.filter((value) => value.status === item);

    if (rarray.length > 0) {
      return rarray[0].display_status;
    } else {
      return "-";
    }
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
    multiple: true,
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
    defaultFileList: [defaultFileList1],
    fileList1,
    multiple: true,
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
    multiple: true,
  };
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/service-and-support", label: "Services & Support" },
    { path: "/expatriate-security", label: "Expatriate Security" },
    { path: "#", label: "NOC Company View" },
  ];
  return (
    <Container>
      <div className="wrapper">
        <div className="addwrapper">
          <div className="wrapper__head">
            <div className="breadcrumbbar mt-[50px]">
              <BreadCrumbs breadcrumbs={breadcrumbs} />
              <div className="mineral-testing-title">Sponsor Company View</div>
            </div>
          </div>
          {
            loading? <Loader/> : 
            <div className="wrapper__container">
            <div
              className="wrapper__form"
              style={{ width: "100%", alignContent: "center" }}
            >
              <ConfigProvider
                theme={{
                  token: {
                    /* here is your global tokens */
                    colorPrimary: "#27ae60",
                    colorPrimaryActive: "#F3F4F4",
                    colorPrimaryHover: "#27ae60",
                    colorSplit: "#F3F3F4",
                    fontFamily: "Helvetica",
                    colorTextDisabled: "Black",
                  },
                  components: {
                    Input: {
                      /* here is your component tokens */
                    },
                  },
                }}
              >
                <Form
                  variant="outlined"
                  layout="vertical"
                  form={form}
                  initialValues={{ data }}
                  disabled={true}
                  style={{
                    width: "100%",
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  {"flag" === "flag" ? (
                    ""
                  ) : (
                    <>
                      <Row style={{ display: "flex" }}>
                        <Col
                          style={{ display: "flex", paddingLeft: "40px" }}
                          span={8}
                        >
                          <div style={{ display: "flex" }}>
                            <div style={{ display: "flex" }}>
                              <div style={{ width: "360px" }}>
                                <Form.Item noStyle>
                                  <span className={styles.spantext}>
                                    <span style={{ color: "red" }}> * </span>
                                    Company Logo
                                  </span>
                                </Form.Item>
                                <Form.Item
                                  name="logo"
                                  rules={[
                                    {
                                      required: true,
                                      message: "Please upload Logo!",
                                    },
                                  ]}
                                >
                                  <Upload {...props2}>
                                    <Button
                                      className={styles.fileupload}
                                      icon={<UploadOutlined />}
                                    >
                                      Upload Logo
                                    </Button>
                                  </Upload>
                                </Form.Item>
                              </div>
                            </div>
                            <div style={{ display: "flex" }}>
                              <div style={{ width: "360px" }}>
                                <Form.Item noStyle>
                                  <span className={styles.spantext}>
                                    <span style={{ color: "red" }}> * </span>
                                    Company Logo
                                  </span>
                                </Form.Item>
                                <Form.Item
                                  name="logo"
                                  rules={[
                                    {
                                      //required: true,
                                      //message: "Please upload Logo!",
                                    },
                                  ]}
                                >
                                  <Upload {...props2}>
                                    <Button
                                      className={styles.fileupload}
                                      icon={<UploadOutlined />}
                                    >
                                      Upload Logo
                                    </Button>
                                  </Upload>

                                  <Button
                                    className={styles.fileupload}
                                    onClick={showModal}
                                    icon={<PictureOutlined />}
                                  >
                                    View
                                  </Button>

                                  <Button
                                    className={styles.fileupload}
                                    icon={<FileImageOutlined />}
                                  >
                                    View
                                  </Button>
                                  <Modal
                                    title="Logo"
                                    open={isModalOpen}
                                    onOk={handleOk}
                                    onCancel={handleCancel}
                                    width={1000}
                                  >
                                    <p>
                                      Some contents...
                                      <img
                                        height={450}
                                        width={500}
                                        alt=""
                                        src={REACT_APP_FILE_URL + data.logoPath}
                                      />
                                    </p>
                                    <span>
                                      {" "}
                                      LogoPath:
                                      {
                                        //REACT_APP_FILE_URL+data.logoPath
                                        //REACT_APP_FILE_URL+'pmisp/Staging/Company/CompanyLogo/Doucment/200072e1-5c5e-446f-9f2c-689ee755d26d_apple.png';
                                        REACT_APP_FILE_URL + data.logoPath
                                        /*

                                <FileViewer
                                fileType={'png'}
                                filePath={REACT_APP_FILE_URL +data.logoPath}
                                
                                
                                onError={onError}
                              />
                                */
                                      }
                                    </span>
                                    <p></p>
                                    <p>Some contents...</p>
                                    <Button
                                      className={styles.fileupload}
                                      icon={<FileImageOutlined />}
                                    >
                                      View
                                    </Button>
                                  </Modal>
                                </Form.Item>
                              </div>
                            </div>
                            <div style={{ display: "flex" }}>
                              <div style={{ width: "360px" }}>
                                <Form.Item noStyle>
                                  <span className={styles.spantext}>
                                    <span style={{ color: "red" }}> * </span>
                                    Company Logo
                                  </span>
                                </Form.Item>
                                <Form.Item
                                  name="logo"
                                  rules={[
                                    {
                                      required: true,
                                      message: "Please upload Logo!",
                                    },
                                  ]}
                                >
                                  <Upload {...props2}>
                                    <Button
                                      className={styles.fileupload}
                                      icon={<UploadOutlined />}
                                    >
                                      Upload Logo
                                    </Button>
                                  </Upload>
                                </Form.Item>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </>
                  )}

                  {data.status === "PublicNewEntry" ||
                  data.status === "SubmissionFailed" ? (
                    <>
                      <div
                        className="expatview_wrapper_tb"
                        style={{ paddingBottom: "20px", width: "87%" }}
                      >
                        <div
                          className="expatview_text_cover"
                          style={{ width: "100%" }}
                        >
                          <h3
                            style={{
                              paddingLeft: "40px",
                              paddingBottom: "40px",
                            }}
                          ></h3>
                        </div>
                        <div className="expatview_button_cover">
                          <div>
                            <div style={{ width: "100%", textAlign: "right" }}>
                              <button
                                type="primary"
                                className={styles.submitbutton}
                                shape="round"
                                size="medium"
                                onClick={OnEdit}
                              >
                                Edit Company
                                <i
                                  className="fa fa-plus-circle"
                                  style={{ marginLeft: "10px" }}
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}

                  <Flex
                    wrap
                    gap="center"
                    horizontal
                    justify="space-around"
                    style={{ width: "100%" }}
                  >
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="status"
                        label={`Company Status : ${getStatus(data.status)}`}
                      >
                        <span></span>
                      </Form.Item>
                    </Col>
                  </Flex>

                  <Flex
                    wrap
                    gap="center"
                    horizontal
                    justify="space-around"
                    style={{ width: "100%" }}
                  >
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="companyName"
                        label="Company Name"
                        rules={[
                          {
                            //required: true,
                            //message: "Please enter Company Name!",
                          },
                        ]}
                      >
                        <Input
                          id="companyName"
                          placeholder="HSB Holdings"
                          className={styles.inputclass}
                        />
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="registrationType"
                        label="Registration Type"
                        rules={[
                          {
                            //required: true,
                            //message: "Please select Type!",
                          },
                        ]}
                      >
                        <Select
                          className={styles.inputselect}
                          placeholder="Registration Type"
                        >
                          <Option value="Company">Company</Option>
                          <Option value="Individual">Individual</Option>
                        </Select>
                      </Form.Item>
                    </Col>

                    <Col className="column" flex="1 0 25%">
                      <Form.Item
                        name="cityId"
                        label="Registration City"
                        rules={[
                          {
                            //required: true,
                            //message: "Please select City!",
                          },
                        ]}
                      >
                        <Select
                          className={styles.inputselect}
                          placeholder="Registration City"
                        >
                          {citiesList.map((data) => {
                            return (
                              <Option value={data.id}>{data.cityName}</Option>
                            );
                          })}
                        </Select>
                      </Form.Item>
                    </Col>
                  </Flex>

                  <Flex
                    wrap
                    gap="center"
                    horizontal
                    justify="space-around"
                    style={{ width: "100%" }}
                  >
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="registrationyear"
                        label="Registration Year"
                        rules={[
                          {
                            //required: true,
                            //message: "Please input!",
                          },
                        ]}
                      >
                        <DatePicker
                          name="registrationyear"
                          className={styles.inputselect}
                          picker="year"
                          onChange={onChange}
                        />
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="businessDomain"
                        label="Business Domain"
                        rules={[
                          {
                            //required: true,
                            //message: "Please select Business Domain!",
                          },
                        ]}
                      >
                        <Select
                          className={styles.inputselect}
                          placeholder="Business Domain"
                        >
                          <Option value="Mining">Mining</Option>
                          <Option value="Services">Services</Option>
                        </Select>
                      </Form.Item>
                    </Col>

                    <Col className="column" flex="1 0 25%">
                      <Form.Item
                        name="ntnNumber"
                        label="NTN/FTN/Tax No."
                        rules={[
                          {
                            //required: true,
                            //message: "Please input NTN Number!",
                          },
                        ]}
                      >
                        <Input
                          placeholder="Enter NTN/FTN Number"
                          className={styles.inputclass}
                        />
                      </Form.Item>
                    </Col>
                  </Flex>
                  <Flex
                    wrap
                    gap="center"
                    horizontal
                    justify="space-around"
                    style={{ width: "100%" }}
                  >
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="logoPath"
                        label="Company Logo"
                        rules={[
                          {
                            //required: true,
                            //message: "Please upload Logo!",
                          },
                        ]}
                      >
                        <Upload {...props2} fileList={fileList2}>
                          <Button className={styles.fileupload}>
                            Upload Logo <UploadOutlined />
                          </Button>
                        </Upload>
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="companyRegistrationCertificates"
                        label="Company's Registration Certificate"
                        rules={[
                          {
                            //required: true,
                            //message: "Enter Company's Registration Certificate!",
                          },
                        ]}
                      >
                        <Upload {...props}>
                          <Button className={styles.fileupload}>
                            Company's Registration Certificate{" "}
                            <UploadOutlined />
                          </Button>
                        </Upload>
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 25%">
                      <Form.Item
                        name="companyTaxRegistrationCertificates"
                        label="Taxpayer Registration Certificate"
                        rules={[
                          {
                            //required: true,
                            //message: "Please upload Taxpayer Registration Certificate!",
                          },
                        ]}
                      >
                        <Upload {...props1} fileList={fileList1}>
                          <Button className={styles.fileupload}>
                            Taxpayer Registration Certificate <UploadOutlined />
                          </Button>
                        </Upload>
                      </Form.Item>
                    </Col>
                  </Flex>

                  <h3
                    style={{
                      marginTop: "10px",
                      marginLeft: "130px",
                      paddingBottom: "10px",
                      color: "#27ae60",
                    }}
                  >
                    Contact Details
                  </h3>
                  <Flex
                    wrap
                    gap="center"
                    horizontal
                    justify="space-around"
                    style={{ width: "100%" }}
                  >
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="registrationAddress"
                        label="Address"
                        rules={[
                          {
                            //required: true,
                            //message: "Please input your Address",
                          },
                        ]}
                      >
                        <Input
                          placeholder="Enter Address"
                          className={styles.inputclass}
                        />
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="phoneNumber"
                        label="Phone Number"
                        rules={[
                          {
                            //required: true,
                            //message: "Please Phone Number!",
                          },
                        ]}
                      >
                        <Input
                          maxLength={11}
                          placeholder="03001234567"
                          className={styles.inputclass}
                          pattern="[0-9.]+"
                        />
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 25%">
                      <Form.Item
                        name="mobileNumber"
                        label="Mobile Number"
                        rules={[
                          {
                            //required: true,
                            //message: "Please Mobile Number!",
                          },
                        ]}
                      >
                        <Input
                          pattern="[0-9.]+"
                          placeholder="03001234567"
                          maxLength={11}
                          className={styles.inputclass}
                        />
                      </Form.Item>
                    </Col>
                  </Flex>
                  <Flex
                    wrap
                    gap="center"
                    horizontal
                    justify="space-around"
                    style={{ width: "100%" }}
                  >
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                          {
                            //type: "email",
                            //message: "The input is not valid E-mail!",
                          },
                          {
                            //required: true,
                            //message: "Please input your E-mail!",
                          },
                        ]}
                      >
                        <Input
                          placeholder="email@email.com"
                          className={styles.inputclass}
                        />
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 15%">
                      <Form.Item
                        name="faxName"
                        type="number"
                        label="Fax No."
                        rules={[
                          {
                            //required: true,
                            //message: "Please input Fax Number!",
                          },
                        ]}
                      >
                        <Input
                          maxLength={11}
                          placeholder="03001234567"
                          className={styles.inputnumber}
                          pattern="[0-9.]+"
                        />
                      </Form.Item>
                    </Col>
                    <Col className="column" flex="1 0 25%">
                      <Form.Item
                        name="contactPersonName"
                        label="Contact Person Name"
                        rules={[
                          {
                            //required: true,
                            //message: "Please enter Contact Person!",
                          },
                        ]}
                      >
                        <Input
                          placeholder="Enter Contact person Name"
                          className={styles.inputclass}
                        />
                      </Form.Item>
                    </Col>
                  </Flex>

                  {/*<Row style={{alignContent: 'center' }} >
        <Col style={{ marginTop: '30px', alignItems: 'center' }} span={24}>
        
        <ConfigProvider
            theme={{
                components: {
                Button: {
                    // here is your component tokens 
                },
                },
            }}
            >
            <Button type="primary" className={styles.submitbutton} shape='round' size='large' htmlType="submit">
            Submit
            </Button>
        </ConfigProvider>
          
        
        </Col>
        </Row>*/}
                  {"flag234" === "flag123" ? (
                    <>
                      <Row>
                        <Col>{errorMsg}</Col>
                      </Row>
                      <div
                        className="expatview_button_cover"
                        style={{
                          width: "50%",
                          marginTop: "30px",
                          marginBottom: "30px",
                        }}
                      >
                        <div>
                          <button
                            type="primary"
                            className={styles.submitbutton}
                            shape="round"
                            size="large"
                            htmlType="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                      {contextHolder}
                    </>
                  ) : (
                    <></>
                  )}
                </Form>
              </ConfigProvider>
            </div>
          </div>
          }
        </div>
      </div>
    </Container>
  );
}

export default SponsorCompanyView;
