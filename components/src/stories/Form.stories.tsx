import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import '../theme/kit.css';
import { Form, Input, Button } from '../';

export default {
  title: 'Elements/Form',
  component: Form,
  args: {
    name: 'VM',
  },
} as Meta;

const Template = (args: object) => {
  return (
    <Form {...args}>
      <Form.Item>
        <Input label="E-Mail" />
      </Form.Item>
      <Form.Item>
        <Input label="Password" type="password" />
      </Form.Item>
      <Form.Item>
        <Button kind="primary">Login</Button>
      </Form.Item>
    </Form>
  );
};

export const Default = Template.bind({});
