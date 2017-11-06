// @flow
import React from 'react';
import styled from 'styled-components';
import ExampleSelector from './ExampleSelector';
import { type BackgroundItem } from './backgrounds';

const ControlsContainer = styled.nav`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: white;
  padding: 0 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const ControlsIcon = styled.div`
  font-size: 2em;
  line-height: 1.5;
  padding-right: 1rem;
`;

const BackgroundTile = styled.button`
  padding: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 0.25rem;
  margin-right: 0.25rem;
  border: 2px solid;
  border-color: ${props => props.active ? '#2196f3' : 'rgba(0, 0, 0, 0.2)'};
  ${props => props.backgroundCss};
`;

type Props = {
  examples: Array<string>,
  selectedExample: string | null,
  onExampleSelected: (selectedExample: string | null) => mixed,
  backgrounds: Array<BackgroundItem>,
  selectedBackground: BackgroundItem,
  onBackgroundSelected: (selectedBackground: BackgroundItem) => mixed,
};

export default function Controls(props: Props) {
  return (
    <ControlsContainer>
      <ControlsIcon>{"⚡️"}</ControlsIcon>
      <ExampleSelector
        placeholder="Select Example"
        items={props.examples}
        selectedItem={props.selectedExample}
        onChange={props.onExampleSelected}/>

      {props.backgrounds.map(background => (
        <BackgroundTile
          key={background.label}
          backgroundCss={background.css}
          active={background === props.selectedBackground}
          onClick={() => props.onBackgroundSelected(background)}/>
      ))}
    </ControlsContainer>
  );
}
