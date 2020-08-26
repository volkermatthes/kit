import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import '../theme/_kit.css';
import { Tag } from '../';

export default {
  title: 'Elements/Tag',
  component: Tag,
} as Meta;

const Template = (args: object) => {
  return (
    <Tag>Tag</Tag>
  );
};

export const Default = Template.bind({});
