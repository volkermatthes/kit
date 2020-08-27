import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import '../theme/kit.css';
import { Avatar } from '../';

export default {
  title: 'Elements/Avatar',
  component: Avatar,
  args: {
    name: 'VM',
  },
} as Meta;

const Template = (args: object) => {
  return <Avatar {...args} />;
};

export const Default = Template.bind({});
