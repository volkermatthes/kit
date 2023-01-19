import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import '../theme/kit.css'
import { Form, FormProps, Input, Button } from '../'

export default {
  title: 'Elements/Form',
  component: Form,
} as ComponentMeta<typeof Form>

const Template: ComponentStory<typeof Form> = (args: FormProps) => {
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
  )
}

export const Default = Template.bind({})
