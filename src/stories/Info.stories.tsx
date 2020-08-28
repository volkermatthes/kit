import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import '../theme/kit.css';
import { Info } from '../';
import { Info as InfoIcon } from 'react-feather';

export default {
  title: 'Elements/Info',
  component: Info,
  args: {
    title: 'Info',
    icon: <InfoIcon />,
    kind: 'error',
    message:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
} as Meta;

const Template = (args: object) => {
  return <Info {...args} />;
};

export const Default = Template.bind({});
