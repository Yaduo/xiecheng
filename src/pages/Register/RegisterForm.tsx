import React, { useState } from 'react';
import "./RegisterForm.less"
import { Link } from 'react-router-dom';
import { Form, Input, Tooltip, Icon, Checkbox, Button } from 'antd';
import { FormComponentProps } from "antd/lib/form/Form";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegisterFormComponent: React.FC<FormComponentProps> = (props) => {

  const [confirmDirty, setConfirmDirty] = useState(false);
  const { getFieldDecorator } = props.form;

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  const handleConfirmBlur = e => {
    const { value } = e.target;
    setConfirmDirty(confirmDirty || !!value)
  };

  const validateToNextPassword = (rule, value, callback) => {
    const { form } = props;
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  const compareToFirstPassword = (rule, value, callback) => {
    if (value && value !== props.form.getFieldValue('password')) {
      callback('密码确认不一致!');
    } else {
      callback();
    }
  };

  return (
    <Form {...formItemLayout} onSubmit={handleSubmit} className="register-form">
      {/* 昵称 */}
      <Form.Item
        label={
          <span>
            昵称&nbsp;
            <Tooltip title="怎么叫你呢?"><Icon type="question-circle-o" /></Tooltip>
          </span>
        }
      >
        {getFieldDecorator('Nickname', {
          rules: [{ required: true, message: '请输入你的昵称!', whitespace: true }],
        })(<Input />)}
      </Form.Item>

      {/* E-mail */}
      <Form.Item label="E-mail">
        {getFieldDecorator('email', {
          rules: [
            {
              type: 'email',
              message: '请输入正确的 E-mail!',
            },
            {
              required: true,
              message: '请输入你的 E-mail!',
            },
          ],
        })(<Input />)}
      </Form.Item>

      {/* 密码 */}
      <Form.Item label="密码" hasFeedback>
        {getFieldDecorator('password', {
          rules: [
            {
              required: true,
              message: '请输入密码!',
            },
            {
              validator: validateToNextPassword,
            },
          ],
        })(<Input.Password />)}
      </Form.Item>

      {/* 密码确认 */}
      <Form.Item label="密码确认" hasFeedback>
        {getFieldDecorator('confirm', {
          rules: [
            {
              required: true,
              message: '请确认密码!',
            },
            {
              validator: compareToFirstPassword,
            },
          ],
        })(<Input.Password onBlur={handleConfirmBlur} />)}
      </Form.Item>
        
      {/* 协议确认 */}
      <Form.Item {...tailFormItemLayout}>
        {getFieldDecorator('同意', {
          valuePropName: 'checked',
        })(
          <Checkbox> 我已阅读并同意<Link to="/">协议</Link></Checkbox>,
        )}
      </Form.Item>

      {/* 注册按钮 */}
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">注册</Button>
      </Form.Item>
    </Form>
  )
}

export default Form.create({ name: 'normal_login' })(RegisterFormComponent);


