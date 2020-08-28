import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import '../theme/kit.css';
import { Checkbox } from '../';

export default {
  title: 'Elements/Checkbox',
  component: Checkbox,
  args: {
    label: 'Checkbox 1',
  },
} as Meta;

const Template = (args: object) => {
  return <Checkbox {...args} />;
};

export const Default = Template.bind({});
