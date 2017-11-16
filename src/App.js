// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import Controls from './Controls';
import Canvas from './Canvas';
import backgrouds, { type BackgroundItem } from './backgrounds';

const AppContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const AppControls = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  height: 3rem;
`;

const AppCanvas = styled.div`
  position: absolute;
  z-index: 0;
  top: 3rem;
  bottom: 0;
  left: 0;
  right: 0;
`;

type Props = {
  // ...
};

type State = {
  examples: Array<string>,
  selectedExample: string | null,
  devices: Array<string>,
  selectedDevice: string | null,
  selectedBackground: BackgroundItem,
};

class App extends Component<Props, State> {
  state = {
    examples: [
      'One',
      'Two',
      'Three',
      'Four',
      'Five'
    ],
    selectedExample: null,
    devices: [
      'iPhone 5 portrait',
      'iPhone 5 landscape',
      'iPhone 6 portrait',
      'iPhone 6 landscape',
      'iPhone 6S portrait',
      'iPhone 6S landscape',
      'Android (Nexus 4) portrait',
      'Android (Nexus 4) landscape',
      'iPad portrait',
      'iPad landscape',
    ],
    selectedDevice: null,
    selectedBackground: backgrouds[0],
  };

  handleExampleSelected = (selectedExample: string | null) => {
    this.setState({
      selectedExample,
    });
  };

  handleDeviceSelected = (selectedDevice: string | null) => {
    this.setState({
      selectedDevice,
    });
  };

  handleBackgroundSelected = (selectedBackground: BackgroundItem) => {
    this.setState({
      selectedBackground,
    });
  };

  render() {
    return (
      <AppContainer>
        <AppControls>
          <Controls
            examples={this.state.examples}
            selectedExample={this.state.selectedExample}
            onExampleSelected={this.handleExampleSelected}
            devices={this.state.devices}
            selectedDevice={this.state.selectedDevice}
            onDeviceSelected={this.handleDeviceSelected}
            backgrounds={backgrouds}
            selectedBackground={this.state.selectedBackground}
            onBackgroundSelected={this.handleBackgroundSelected}/>
        </AppControls>
        <AppCanvas>
          <Canvas background={this.state.selectedBackground}/>
        </AppCanvas>
      </AppContainer>
    );
  }
}

export default App;
