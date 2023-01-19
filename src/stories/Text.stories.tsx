import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../theme/kit.css';
import { Text, TextProps } from '..';

export default {
  title: 'Typography/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args: TextProps) => {
  return (
    <Text {...args}>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
      invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
      justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
      ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
      et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
      sanctus est Lorem ipsum dolor sit amet.
    </Text>
  );
};

export const Default = Template.bind({});

Default.args = {
  fontWeight: 400,
  color: '#000000',
  size: 14,
};
