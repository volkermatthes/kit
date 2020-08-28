import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import '../theme/kit.css';
import { Code } from '../';

export default {
  title: 'Elements/Code',
  component: Code,
} as Meta;

const content = '<html></html>';

const Template = (args: object) => {
  return <Code {...args}>{content}</Code>;
};

export const Default = Template.bind({});
