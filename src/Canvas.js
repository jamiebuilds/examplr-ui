// @flow
import React from 'react';
import styled from 'styled-components';
import { type BackgroundItem } from './backgrounds';

const CanvasContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  ${props => props.background}
`;

type Props = {
  background: BackgroundItem,
};

export default function Canvas(props: Props) {
  console.log(props);
  return (
    <CanvasContainer background={props.background.css}>
      Hi
    </CanvasContainer>
  );
}
