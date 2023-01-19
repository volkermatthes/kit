import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../theme/kit.css';
import { Link, LinkProps } from '../';

export default {
  title: 'Elements/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args: LinkProps) => {
  return (
    <Link {...args}>
      <a href="https://www.google.de" target="_blank" rel="noopener noreferrer">
        Link
      </a>
    </Link>
  );
};

export const Default = Template.bind({});
