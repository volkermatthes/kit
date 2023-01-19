import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../theme/kit.css';
import { Checkbox, CheckboxProps } from '../';

export default {
  title: 'Elements/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args: CheckboxProps) => {
  return <Checkbox {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  label: 'Checkbox 1',
};