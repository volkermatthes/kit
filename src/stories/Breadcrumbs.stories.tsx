import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../theme/kit.css';
import { Breadcrumbs, BreadcrumbsProps } from '../';

export default {
  title: 'Elements/Breadcrumbs',
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args: BreadcrumbsProps) => {
  return (
    <Breadcrumbs {...args}>
      <Breadcrumbs.Item>Home</Breadcrumbs.Item>
      <Breadcrumbs.Item>Route 1</Breadcrumbs.Item>
      <Breadcrumbs.Item current>Route 1.1</Breadcrumbs.Item>
    </Breadcrumbs>
  );
};

export const Default = Template.bind({});
