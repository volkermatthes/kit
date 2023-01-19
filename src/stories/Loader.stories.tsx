import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../theme/kit.css';
import { Loader, LoaderProps } from '../';

export default {
  title: 'Elements/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args: LoaderProps) => {
  return <Loader {...args} />;
};

export const Default = Template.bind({});
