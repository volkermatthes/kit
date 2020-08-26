import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import '../theme/_kit.css';
import { Breadcrumbs } from '../';

export default {
  title: 'Elements/Breadcrumbs',
  component: Breadcrumbs,
} as Meta;

const Template = (args: object) => {
  return (
    <Breadcrumbs {...args}>
        <Breadcrumbs.Item>Home</Breadcrumbs.Item>
        <Breadcrumbs.Item>Route 1</Breadcrumbs.Item>
        <Breadcrumbs.Item current>Route 1.1</Breadcrumbs.Item>
    </Breadcrumbs>
  );
};

export const Default = Template.bind({});
