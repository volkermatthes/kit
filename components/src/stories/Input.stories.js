import React from 'react';
import '../theme/theme.css';
import Input from '../components/Input';

export default {
  title: 'Elements/Input',
  component: Input,
  args: {
    label: 'E-Mail',
    helperText: 'This is a very helpful text, which helps you.',
    invalidText: 'This is a very right text, to show you whats wrong.',
  }
};

const Template = (args) => {
  return (
    <Input {...args}/>
  )
};

export const Default = Template.bind({});