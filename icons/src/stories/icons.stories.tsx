import React, { FunctionComponent } from 'react';
import * as icons from '../generated';
import Icon from '../components/Icon';
import { Meta } from '@storybook/react/types-6-0';

const keys: string[] = Object.keys(icons);

export default {
  title: 'Elements/Icon',
  component: Icon,
  args: {
    width: 24,
    name: 'Add',
  },
} as Meta;

const Template = (args: object) => {
  return (
    <React.Fragment>
      <ul>
        {keys.map((item) => (
          <li><Icon width={24} name={item} /></li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export const Default = Template.bind({});
