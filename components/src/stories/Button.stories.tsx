import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import '../theme/kit.css';
import Button from '../components/Button';

export default {
  title: 'Elements/Button',
  component: Button,
} as Meta;

const Template = (args: object) => {
  return <Button {...args}>Button</Button>;
};

export const Default = Template.bind({});
