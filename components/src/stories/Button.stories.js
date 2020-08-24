import React from 'react';
import '../theme/theme.css';
import Button from '../components/Button';

export default {
  title: 'Elements/Button',
  component: Button,
};

const Template = (args) => {
  return (
    <Button {...args}>Button</Button>
  )
};

export const Default = Template.bind({});