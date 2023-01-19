import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../theme/kit.css';
import { Container, ContainerProps, Row, Column } from '../';

export default {
  title: 'Elements/Grid',
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args: ContainerProps) => {
  return (
    <Container>
      <Row>
        <Column size={3}>Size: 3</Column>
        <Column size={3}>Size: 3</Column>
        <Column size={3}>Size: 3</Column>
        <Column size={3}>Size: 3</Column>
      </Row>
      <Row>
        <Column size={1}>Size: 1</Column>
        <Column size={4}>Size: 4</Column>
        <Column size={2}>Size: 2</Column>
        <Column size={5}>Size: 5</Column>
      </Row>
    </Container>
  );
};

export const Default = Template.bind({});
