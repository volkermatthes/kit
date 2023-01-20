import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../theme/kit.css';
import { Grid, GridProps } from '../';
import styled from 'styled-components';

const StyledBox = styled.div`
  width: 100%;
  height: 100px;
  background-color: var(--color-secondary3);
  color: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
`;

export default {
  title: 'Elements/Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args: GridProps) => {
  return (
    <Grid {...args}>
      <Grid.Row>
        <Grid.Column size={3}>
          <StyledBox>3</StyledBox>
        </Grid.Column>
        <Grid.Column size={3}>
          <StyledBox>3</StyledBox>
        </Grid.Column>
        <Grid.Column size={3}>
          <StyledBox>3</StyledBox>
        </Grid.Column>
        <Grid.Column size={3}>
          <StyledBox>3</StyledBox>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{ marginTop: 32 }}>
        <Grid.Column size={1}>
          <StyledBox>1</StyledBox>
        </Grid.Column>
        <Grid.Column size={4}>
          <StyledBox>4</StyledBox>
        </Grid.Column>
        <Grid.Column size={2}>
          <StyledBox>2</StyledBox>
        </Grid.Column>
        <Grid.Column size={5}>
          <StyledBox>5</StyledBox>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export const Default = Template.bind({});

Default.args = {
  width: '100%',
};
