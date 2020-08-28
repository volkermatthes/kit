import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import '../theme/kit.css';
import Input from '../components/Input';

export default {
  title: 'Elements/Input',
  component: Input,
  args: {
    label: 'E-Mail',
    helperText: 'This is a very helpful text, which helps you.',
    invalidText: 'This is a very right text, to show you whats wrong.',
  },
} as Meta;

const Template = (args: object) => {
  return <Input {...args} />;
};

export const Default = Template.bind({});