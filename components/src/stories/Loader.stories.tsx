import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import '../theme/_kit.css';
import { Loader } from '../';

export default {
  title: 'Elements/Loader',
  component: Loader,
} as Meta;

const Template = () => {
  return <Loader />;
};

export const Default = Template.bind({});
