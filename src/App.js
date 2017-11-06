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
    selectedBackground: backgrouds[0],
  };

  handleExampleSelected = (selectedExample: string | null) => {
    this.setState({
      selectedExample,
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
