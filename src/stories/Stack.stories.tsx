import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../theme/kit.css';
import { Stack, StackProps } from '..';

export default {
  title: 'Elements/Stack',
  component: Stack,
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args: StackProps) => {
  return (
    <Stack {...args}>
      <div style={{ width: '100%', height: '100px', backgroundColor: 'red' }} />
      <div style={{ width: '100%', height: '100px', backgroundColor: 'red' }} />
      <div style={{ width: '100%', height: '100px', backgroundColor: 'red' }} />
    </Stack>
  );
};

export const Default = Template.bind({});

Default.args = {
  gap: 8,
  direction: 'column',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'center',
};
