import React from 'react';
import '../theme/theme.css';
import Input from '../components/Input';

export default {
  title: 'Elements/Input',
  component: Input,
};

const Template = (args) => {
  return (
    <Input {...args}/>
  )
};

export const Default = Template.bind({});