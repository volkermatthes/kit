import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import '../theme/_kit.css';
import { Divider } from '../';

export default {
  title: 'Elements/Divider',
  component: Divider,
} as Meta;

const Template = (args: object) => {
  return <Divider {...args} />;
};

export const Default = Template.bind({});
