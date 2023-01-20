import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../theme/kit.css';
import { Button, ButtonProps } from '../';
import { Plus } from 'react-feather';

export default {
  title: 'Elements/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => {
  return (
    <Button icon={<Plus size="16" />} {...args}>
      Button
    </Button>
  );
};

export const Default = Template.bind({});

Default.args = {
  kind: 'primary',
  size: 'default',
  loading: false,
};
