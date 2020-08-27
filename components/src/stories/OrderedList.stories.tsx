import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import '../theme/kit.css';
import { OrderedList } from '../';

export default {
  title: 'Elements/OrderedList',
  component: OrderedList,
} as Meta;

const Template = () => {
  return (
    <OrderedList>
        <OrderedList.Item>Item 1</OrderedList.Item>
        <OrderedList.Item>Item 2</OrderedList.Item>
        <OrderedList.Item>Item 3</OrderedList.Item>
        <OrderedList.Item>Item 4</OrderedList.Item>
        <OrderedList.Item>Item 5</OrderedList.Item>
    </OrderedList>
  );
};

export const Default = Template.bind({});
