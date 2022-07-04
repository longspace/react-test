import React from 'react'
import { Form, Input, Select, DatePicker, Button } from "antd"

function BaseForm(props) {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("onFinish",values);
  };
  const { Option } = Select;
  const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 18,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 20,
      span: 4,
    },
  };

  return (
    <div>
      <Form {...layout} form={form}  onFinish={onFinish}>
        <Form.Item
          name="note"
          label="Note"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Select a option"
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
          </Select>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            保存
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default BaseForm