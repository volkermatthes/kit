import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import '../theme/kit.css';
import Button from '../components/Button';
import { Plus } from 'react-feather';

export default {
  title: 'Elements/Button',
  component: Button,
} as Meta;

const Template = (args: object) => {
  return <Button icon={<Plus size="16" />} {...args}>Button</Button>;
};

export const Default = Template.bind({});
