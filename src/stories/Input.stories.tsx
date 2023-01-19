import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../theme/kit.css';
import { Input, InputProps } from '../';

export default {
  title: 'Elements/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: InputProps) => {
  return <Input {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  label: 'E-Mail',
  helperText: 'This is a very helpful text, which helps you.',
  invalidText: 'This is a very right text, to show you whats wrong.',
};