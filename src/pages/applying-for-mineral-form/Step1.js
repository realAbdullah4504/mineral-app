import React, { useState } from "react";
import { Form, Select, Input, InputNumber, Button } from "antd";

const { Option } = Select;

const Step1 = ({ obj1, setDisabled }) => {
  const [form] = Form.useForm();
  const [applyAs, setApplyAs] = useState("Individual");
  setDisabled(false);
  const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };

  const handleApplyAsChange = (value) => {
    setApplyAs(value);
    // form.resetFields();
  };

  const renderFormItems = () => {
    if (!applyAs) return null;

    const fields = applyAs === "option1" ? obj1.individual : obj1.company;

    return fields.map((field) => {
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
            <InputNumber />
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

  return (
    <Form {...formItemLayout} form={form} variant="filled">
      <div className="form-grid">
        <Form.Item
          label="Apply As"
          name="ApplyAs"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Select placeholder="Select an option" onChange={handleApplyAsChange}>
            <Option value="option1">Individual</Option>
            <Option value="option2">Company</Option>
          </Select>
        </Form.Item>
        {renderFormItems()}
      </div>
      <Form.Item
        wrapperCol={{
          offset: 0,
          span: 24,
        }}
      ></Form.Item>
    </Form>
  );
};

export default Step1;
