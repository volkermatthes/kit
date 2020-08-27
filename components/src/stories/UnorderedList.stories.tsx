import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import '../theme/kit.css';
import { UnorderedList } from '../';

export default {
  title: 'Elements/UnorderedList',
  component: UnorderedList,
} as Meta;

const Template = () => {
  return (
    <UnorderedList>
        <UnorderedList.Item>Item 1</UnorderedList.Item>
        <UnorderedList.Item>Item 2</UnorderedList.Item>
        <UnorderedList.Item>Item 3</UnorderedList.Item>
        <UnorderedList.Item>Item 4</UnorderedList.Item>
        <UnorderedList.Item>Item 5</UnorderedList.Item>
    </UnorderedList>
  );
};

export const Default = Template.bind({});
