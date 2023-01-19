import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../theme/kit.css';
import { UnorderedList, UnorderedListProps } from '../';

export default {
  title: 'Elements/UnorderedList',
  component: UnorderedList,
} as ComponentMeta<typeof UnorderedList>;

const Template: ComponentStory<typeof UnorderedList> = (args: UnorderedListProps) => {
  return (
    <UnorderedList {...args}>
      <UnorderedList.Item>Item 1</UnorderedList.Item>
      <UnorderedList.Item>Item 2</UnorderedList.Item>
      <UnorderedList.Item>Item 3</UnorderedList.Item>
      <UnorderedList.Item>Item 4</UnorderedList.Item>
      <UnorderedList.Item>Item 5</UnorderedList.Item>
    </UnorderedList>
  );
};

export const Default = Template.bind({});