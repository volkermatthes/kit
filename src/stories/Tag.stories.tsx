import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../theme/kit.css';
import { Tag, TagProps } from '../';

export default {
  title: 'Elements/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args: TagProps) => {
  return <Tag {...args}>Tag</Tag>;
};

export const Default = Template.bind({});
