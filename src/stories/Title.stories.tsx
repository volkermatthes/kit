import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../theme/kit.css';
import { Title, TitleProps } from '..';

export default {
  title: 'Typography/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args: TitleProps) => {
  return <Title {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  level: 1,
};
