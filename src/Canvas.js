// @flow
import React from 'react';
import styled from 'styled-components';
import { type BackgroundItem } from './backgrounds';
import Handle from './Handle';

const CanvasContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 3rem;
  ${props => props.background}
`;

const CanvasWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  box-shadow:
    0 0 0 1px rgba(180, 180, 180, 0.5),
    0 0 10px rgba(1, 0, 0, 0.1),
    0 10px 40px rgba(0, 0, 0, 0.1);
  ${props => props.background}
`;

const ExampleButton = styled.button`
  font: inherit;
  border: 4px solid #2196F3;
  padding: 0.5rem 1rem;
  background: white;

  color: #2196F3;
  border-radius: 2rem;
  -webkit-font-smoothing: antialiased;
  font-weight: 600;
`;

type Props = {
  background: BackgroundItem,
};

type State = {
  // ...
};

export default class Canvas extends React.Component<Props, State> {
  state = {
    width: null,
    height: null,
  };

  render() {
    return (
      <CanvasContainer background={this.props.background.container}>
        <CanvasWrapper background={this.props.background.wrapper}>
          <Handle dir="top"/>
          <Handle dir="bottom"/>
          <Handle dir="left"/>
          <Handle dir="right"/>

          <ExampleButton>
            Example Button
          </ExampleButton>
        </CanvasWrapper>
      </CanvasContainer>
    );
  }
}
