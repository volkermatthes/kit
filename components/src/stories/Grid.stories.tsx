import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import '../theme/kit.css';
import { Container, Row, Column } from '../';

export default {
  title: 'Elements/Grid',
  component: Container,
} as Meta;

const Template = (args: object) => {
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
