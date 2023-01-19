import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../theme/kit.css';
import { Avatar, AvatarProps } from '../';

export default {
  title: 'Elements/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args: AvatarProps) => {
  return <Avatar {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  name: 'VM',
};