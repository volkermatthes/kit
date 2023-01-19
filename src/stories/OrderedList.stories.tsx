import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../theme/kit.css';
import { OrderedList, OrderedListProps } from '../';

export default {
  title: 'Elements/OrderedList',
  component: OrderedList,
} as ComponentMeta<typeof OrderedList>;

const Template: ComponentStory<typeof OrderedList> = (args: OrderedListProps) => {
  return (
    <OrderedList {...args}>
      <OrderedList.Item>Item 1</OrderedList.Item>
      <OrderedList.Item>Item 2</OrderedList.Item>
      <OrderedList.Item>Item 3</OrderedList.Item>
      <OrderedList.Item>Item 4</OrderedList.Item>
      <OrderedList.Item>Item 5</OrderedList.Item>
    </OrderedList>
  );
};

export const Default = Template.bind({});
