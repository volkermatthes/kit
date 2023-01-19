import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../theme/kit.css';
import { Headline, HeadlineProps } from '../';

export default {
  title: 'Elements/Headline',
  component: Headline,
} as ComponentMeta<typeof Headline>;

const Template: ComponentStory<typeof Headline> = (args: HeadlineProps) => {
  return <Headline {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  level: 1,
};
