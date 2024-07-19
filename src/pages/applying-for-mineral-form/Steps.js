import React, { useState, useEffect } from "react";
import { Form, Input, Button, Upload, Select, Empty, InputNumber } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Listing from "./Listing";
const { Option } = Select;
const { TextArea } = Input;

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const Steps = ({ obj, showListing = false, setDisabled = "", step = 1 }) => {
  const [form] = Form.useForm();
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [listingData, setListingData] = useState([]);

  useEffect(() => {
    if (step == 2 && !listingData.length) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [listingData.length, step, setDisabled]);

  useEffect(() => {
    if (selectedRecord) {
      form.setFieldsValue(selectedRecord);
    }
  }, [selectedRecord, form]);

  const renderFormItems = () => {
    return obj.map((field) => {
      if (field.type === "input") {
        return (
          <Form.Item
            key={field.name}
            label={field.label}
            name={field.name}
            rules={[{ required: field.required === "true", message: `Please input ${field.label.toLowerCase()}!` }]}
          >
            <Input />
          </Form.Item>
        );
      }
      if (field.type === "number") {
        return (
          <Form.Item
            key={field.name}
            label={field.label}
            name={field.name}
            rules={[{ required: field.required === "true", message: `Please input ${field.label.toLowerCase()}!` }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
        );
      }
      if (field.type === "file") {
        return (
          <Form.Item
            key={field.name}
            label={field.label}
            name={field.name}
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload" listType="picture" maxCount={1}>
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>
          </Form.Item>
        );
      }
      if (field.type === "textarea") {
        return (
          <Form.Item
            key={field.name}
            label={field.label}
            name={field.name}
            rules={[{ required: field.required === "true", message: `Please input ${field.label.toLowerCase()}!` }]}
          >
            <TextArea rows={4} />
          </Form.Item>
        );
      }

      if (field.type === "select") {
        return (
          <Form.Item
            key={field.name}
            label={field.label}
            name={field.name}
            rules={[{ required: field.required === "true", message: `Please select ${field.label.toLowerCase()}!` }]}
          >
            <Select placeholder={`Select ${field.label.toLowerCase()}`}>
              {field.options.map((option) => (
                <Option key={option} value={option}>
                  {option}
                </Option>
              ))}
            </Select>
          </Form.Item>
        );
      }

      return null;
    });
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const handleAddForm = () => {
    form.validateFields().then((values) => {
      setListingData([...listingData, values]);
      form.resetFields();
    });
  };

  return (
    <div>
      {showListing ? (
        <div>
          {listingData.length ? (
            <Listing dataSource={listingData} setSelectedRecord={setSelectedRecord}></Listing>
          ) : (
            <Empty />
          )}
          <div className="mineral-testing-table-header">
            <div>Sample Details</div>
            <Button type="primary" className="next-button" style={{ padding: "20PX" }} onClick={handleAddForm}>
              Add Sample
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </Button>
          </div>
        </div>
      ) : (
        ""
      )}
      <Form {...formItemLayout} form={form} layout="vertical">
        <div className="form-grid"> {renderFormItems()}</div>
        <Form.Item
          wrapperCol={{
            offset: 0,
            span: 24,
          }}
        ></Form.Item>
      </Form>
    </div>
  );
};

export default Steps;
