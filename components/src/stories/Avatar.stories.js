import React from 'react';
import '../theme/theme.css';
import Avatar from '../components/Avatar';

export default {
  title: 'Elements/Avatar',
  component: Avatar,
  args: {
    image: 'https://i.pinimg.com/280x280_RS/f1/e7/9f/f1e79fa15e597bd81caae37f7758e5f3.jpg',
    name: 'VM',
  }
};

const Template = (args) => {
  return (
    <Avatar {...args}/>
  )
};

export const Default = Template.bind({});