import React, { useState, useEffect } from "react";
import { Container } from "components/UI/Container";
import styles from "./Company.module.css";
import {REACT_APP_FILE_URL} from 'utils/constant/url'
import { useNavigate } from "react-router-dom";
import { commonAPIs } from "services/api/common";
import { UploadOutlined } from "@ant-design/icons";
import { REQUEST_TYPES, ENDPOINTS } from "utils/constant/url";
import { Table } from "antd";
import dayjs from "dayjs";
import BreadCrumbs from "components/Breadcrumbs";
import * as customParseFormat from "dayjs/plugin/customParseFormat";
import { Form, Input, Col, message, Flex, ConfigProvider, Upload, Button } from "antd";
import { Loader } from "components";
const columns = [
  {
    title: "Sr. No ",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Sample Type",
    dataIndex: "sampleType",
    key: "sampleType",
  },
  {
    title: "Target Mineral",
    dataIndex: "targetedMineral",
    key: "targetedMineral",
  },
  {
    title: "Sample Location",
    dataIndex: "sampleLocation",
    key: "sampleLocation",
  }
];


function ApplicationView() {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [errorMsg, setErrorMsg] = useState("");
  const [sampleListing, setSampleList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState([]);
  dayjs.extend(customParseFormat);
 
  const [data, setData] = useState([]);
  const [form] = Form.useForm();

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
  const warning = (message = "This is a warning message") => {
    messageApi.open({
      type: "warning",
      content: message,
    });
  };
  const fetchAPIs = async (id = "") => {
    setLoading(true);
    try {
      const { data, isError, message, } = await commonAPIs(REQUEST_TYPES.GET, `${ENDPOINTS.GET_TEST_APPLICATION_BY_ID}?TestApplicationId=${id}`,);
      const { data: sampleListing, isError1, message1 } = await commonAPIs(REQUEST_TYPES.GET, `${ENDPOINTS.GET_SAMPLE_DETAILS}?TestApplicationId=${id}`);
     
      if (isError || isError1) {
        setLoading(false);
        warning(message);
      }
      if (!isError && sampleListing) {
        setSampleList(sampleListing);
      }
      const {applyAs, companyNameOrName, cnicOrNTNNumber, businessDomain, address, mobileNumber, email, mineralTestId, labId, testPrice, purposeOfTest, geologicalInformation, typeOfWorkRequired, requirementRegardingReports, additionalInstruction, sampleSubmissionMode, shipmentBy, shipmentReceiptImage, trackingNumber } = data || {}
      if (shipmentReceiptImage) {
        let str = shipmentReceiptImage;
        let file = {
          uid: "-1",
          name: "Shipment Receipt Image",
          status: "done",
          url: REACT_APP_FILE_URL + shipmentReceiptImage,
        };
        setFileList([...fileList, file]);
      }
        form.setFieldsValue({
          applyAs,
          companyNameOrName,
          cnicOrNTNNumber,
          businessDomain,
          address,
          mobileNumber,
          email,
          mineralTestId,
          labId, 
          testPrice, 
          purposeOfTest,
          geologicalInformation,
          typeOfWorkRequired,
          requirementRegardingReports,
          additionalInstruction,
          sampleSubmissionMode, shipmentBy, trackingNumber
        });
        setLoading(false);

      }
     catch (error) {
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

  const onFinish1 = (values) => {
    setErrorMsg("on Finish");
  };
  const Cancel = () => {
    navigate("/expatnocapplication");
  };

  const onFinishFailed1 = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const breadcrumbs = [
    { path: "/", label: "Home" },
    { path: "/service-and-support", label: "Services & Support" },
    { path: "/mineral-testing-labs", label: "Mineral Testing Labs" },
    { path: "#", label: "NOC Application View" },
  ];

  return (
    <Container>
      <div className="wrapper">
        <div className="addwrapper">
          <div className="wrapper__head">
            <div className="breadcrumbbar mt-[50px]">
              <BreadCrumbs breadcrumbs={breadcrumbs} />
              <div className="mineral-testing-title">Mineral Test View</div>
            </div>
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
                {contextHolder}
                {/** Form start */}
              {
                loading ? <Loader /> : 
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
                {/*
                   Second Page Start
                  */}

                <h3 style={{ marginTop: "10px", paddingBottom: "10px", color: "#27ae60" }}>
                  Application Details
                </h3>
                <Flex wrap gap="center" horizontal justify="space-around" style={{ width: "100%" }}>
                <Col className="column" flex="1 0 25%">
                    <Form.Item
                      name="applyAs"
                      label="Apply As"
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
                <Col className="column" flex="1 0 25%">
                    <Form.Item
                      name="companyNameOrName"
                      label="Name"
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
                  <Col className="column" flex="1 0 25%">
                    <Form.Item
                      name="cnicOrNTNNumber"
                      label="CNIC"
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
                      name="mobileNumber"
                      label="Mobile Number"
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
                      name="email"
                      label="Email"
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
                  <Col className="column" flex="1 0 15%">
                    <Form.Item
                      name="businessDomain"
                      label="Business Domain"
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
                </Flex>
                <Flex wrap gap="center" horizontal justify="space-around" style={{ width: "100%" }}>
                <Col className="column" flex="1 0 25%">
                    <Form.Item
                      name="address"
                      label="Address"
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
                {/*
                   Second Page End
                  */}

                {/*
                      eight page start
                  */}
                {sampleListing && sampleListing.length ? (
                  <>
                    <div style={{ width: "90%" }}>
                      <h3 style={{ marginTop: "10px", marginLeft: "5px", paddingBottom: "10px", color: "#27ae60" }}>
                        Sample Details
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
                        <Table dataSource={sampleListing || []} columns={columns} />
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
                Mineral Test Information - Mineral Lab
                </h3>
                <Flex wrap gap="center" horizontal justify="space-around" style={{ width: "100%" }}>
                <Col className="column" flex="1 0 25%">
                    <Form.Item
                      name="mineralTestId"
                      label="Type of Test Required"
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
                <Col className="column" flex="1 0 25%">
                    <Form.Item
                      name="labId"
                      label="Available Mineral labs"
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
                  <Col className="column" flex="1 0 25%">
                    <Form.Item
                      name="testPrice"
                      label="Test Price"
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
                <Col className="column" flex="1 0 25%">
                    <Form.Item
                      name="purposeOfTest"
                      label="Purpose of Test"
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
                <h3 style={{ marginTop: "10px", paddingBottom: "10px", color: "#27ae60" }}>
                Background Information
                </h3>
                <Flex wrap gap="center" horizontal justify="space-around" style={{ width: "100%" }}>
                <Col className="column" flex="1 0 25%">
                    <Form.Item
                      name="geologicalInformation"
                      label="Geological Information"
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
                <Col className="column" flex="1 0 25%">
                    <Form.Item
                      name="typeOfWorkRequired"
                      label="Type of Work Required"
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
                  <Col className="column" flex="1 0 25%">
                    <Form.Item
                      name="requirementRegardingReports"
                      label=" Special requirement regarding report"
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
                <Col className="column" flex="1 0 25%">
                    <Form.Item
                      name="additionalInstruction"
                      label="Additional Information"
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
                <h3 style={{ marginTop: "10px", paddingBottom: "10px", color: "#27ae60" }}>
                Shipment Detail
                </h3>
                <Flex wrap gap="center" horizontal justify="space-around" style={{ width: "100%" }}>
                <Col className="column" flex="1 0 25%">
                    <Form.Item
                      name="sampleSubmissionMode"
                      label="Mode of Sample Submission"
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
                <Col className="column" flex="1 0 25%">
                    <Form.Item
                      name="shipmentBy"
                      label="Shipment By"
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
                  <Col className="column" flex="1 0 25%">
                      <Form.Item
                        name="shipmentReceiptImage"
                        label="Upload Receipt"
                        rules={[
                          {
                            //required: true,
                            //message: "Please upload Grant Letter!",
                          },
                        ]}
                      >
                        <Upload fileList={fileList}>
                          <Button className={styles.fileupload} icon={<UploadOutlined />}>
                          Upload Receipt
                          </Button>
                        </Upload>
                      </Form.Item>
                    </Col>
                </Flex>
                <Flex wrap gap="center" horizontal justify="space-around" style={{ width: "100%" }}>
                <Col className="column" flex="1 0 25%">
                    <Form.Item
                      name="trackingNumber"
                      label="Tracking Number"
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
              </Form>
              }
              </ConfigProvider>
              {/**Form end */}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ApplicationView;
