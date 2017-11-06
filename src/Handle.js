// @flow
import React from 'react';
import styled, { css } from 'styled-components';

const TopGrip = styled.div`
  position: absolute;
  top: -1rem;
  left: 50%;
  margin-left: -1rem;
  border-top: 2px solid rgba(125, 125, 125, 0.5);
  border-bottom: 2px solid rgba(125, 125, 125, 0.5);
  height: 8px;
  width: 2rem;
`;

const BottomGrip = styled.div`
  position: absolute;
  bottom: -1rem;
  left: 50%;
  margin-left: -1rem;
  border-top: 2px solid rgba(125, 125, 125, 0.5);
  border-bottom: 2px solid rgba(125, 125, 125, 0.5);
  height: 8px;
  width: 2rem;
`;

const LeftGrip = styled.div`
  position: absolute;
  left: -1rem;
  top: 50%;
  margin-top: -1rem;
  border-left: 2px solid rgba(125, 125, 125, 0.5);
  border-right: 2px solid rgba(125, 125, 125, 0.5);
  height: 2rem;
  width: 8px;
`;

const RightGrip = styled.div`
  position: absolute;
  right: -1rem;
  top: 50%;
  margin-top: -1rem;
  border-left: 2px solid rgba(125, 125, 125, 0.5);
  border-right: 2px solid rgba(125, 125, 125, 0.5);
  height: 2rem;
  width: 8px;
`;

type Props = {
  dir: 'top' | 'bottom' | 'left' | 'right',
  onDrag: (pos: { x: number, y: number }) => mixed,
};

export default class Handle extends React.Component<Props> {
  render() {
    switch (this.props.dir) {
      case 'top': return <TopGrip/>;
      case 'bottom': return <BottomGrip/>;
      case 'left': return <LeftGrip/>;
      case 'right': return <RightGrip/>;
    }
  }
}
