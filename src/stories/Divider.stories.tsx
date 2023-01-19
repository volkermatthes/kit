import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../theme/kit.css';
import { Divider, DividerProps } from '../';

export default {
  title: 'Elements/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args: DividerProps) => {
  return <Divider {...args} />;
};

export const Default = Template.bind({});
