// @flow
import React from 'react';
import styled from 'styled-components';
import ExampleSelector from './ExampleSelector';
import Select from './Select';
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

const ControlsTitle = styled.h1`
  font-size: inherit;
  font-weight: 800;
  text-transform: uppercase;
  margin-right: 1rem;
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
  devices: Array<string>,
  selectedDevice: string | null,
  onDeviceSelected: (selectedDevice: string | null) => mixed,
  backgrounds: Array<BackgroundItem>,
  selectedBackground: BackgroundItem,
  onBackgroundSelected: (selectedBackground: BackgroundItem) => mixed,
};

export default function Controls(props: Props) {
  return (
    <ControlsContainer>
      <ControlsIcon>{"🌈"}</ControlsIcon>
      <ControlsTitle>Examplr</ControlsTitle>
      <Select
        placeholder="Select Example"
        items={props.examples}
        selectedItem={props.selectedExample}
        onChange={props.onExampleSelected}/>
      <Select
        placeholder="Select Device"
        items={props.devices}
        selectedItem={props.selectedDevice}
        onChange={props.onDeviceSelected}/>

      {props.backgrounds.map(background => (
        <BackgroundTile
          key={background.label}
          backgroundCss={background.wrapper}
          active={background === props.selectedBackground}
          onClick={() => props.onBackgroundSelected(background)}/>
      ))}
    </ControlsContainer>
  );
}
