import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import '../theme/kit.css';
import { Headline } from '../';

export default {
  title: 'Elements/Headline',
  component: Headline,
  args: {
    level: 1,
  },
} as Meta;

const Template = (args: object) => {
  return <Headline {...args}>Headline</Headline>;
};

export const Default = Template.bind({});
