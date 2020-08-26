import React, { FunctionComponent } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { select } from '@storybook/addon-knobs';
import '../theme/_kit.css';
import * as icons from '@volkermatthes/kit-icons';

type IconFC = FunctionComponent<React.SVGProps<SVGSVGElement>>;
const keys: string[] = Object.keys(icons);
const selectedKey = select('Icon', keys, keys[0]);
const Icon = (icons as { [key: string]: IconFC })[selectedKey];

export default {
  title: 'Elements/Icons',
  component: Icon,
  args: {
    width: 24,
  },
} as Meta;

const Template = (args: object) => {
  return <Icon {...args} />;
};

export const Default = Template.bind({});
