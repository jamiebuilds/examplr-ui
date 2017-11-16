// @flow
import React from 'react';
import Downshift from 'downshift';
import styled from 'styled-components';

const SelectContainer = styled.div`
  position: relative;
`;

const SelectInput = styled.input`
  font: inherit;
  padding: 0.5rem 1rem;
  border: none;
  background: white;
  color: black;
  margin-right: 0.5rem;
`;

const SelectDropdown = styled.div`
  position: absolute;
  min-width: 100%;
  background: white;
  color: black;
  box-shadow:
    0 0 1px rgba(0, 0, 0, 0.4),
    0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SelectItem = styled.div`
  padding: 0.5rem 1rem;
  background: ${props => props.highlighted ? '#eee' : 'transparent'};
  color: ${props => props.muted ? '#999' : 'inherit'};
`;

const SelectSeparator = styled.div`
  border-top: 1px solid blue;
`;

function compare(a, b) {
  return a.toLowerCase().includes(b.toLowerCase());
}

function toMenuItems(items, inputValue) {
  let matched = [];
  let unmatched = [];

  items.forEach(item => {
    if (inputValue && compare(item, inputValue)) {
      matched.push({ match: true, item });
    } else {
      unmatched.push({ match: false, item });
    }
  });

  return matched.concat(unmatched);
}

type Props = {
  placeholder: string,
  items: Array<string>,
  selectedItem: string | null,
  onChange: (selected: string | null) => mixed,
};

type State = {
  isOpen: boolean,
};

export default class Select extends React.Component<Props, State> {
  state = {
    isOpen: false,
  };

  handleOuterClick = () => {
    this.setState({
      isOpen: false,
    });
  };

  handleInputFocus = () => {
    this.setState({
      isOpen: true,
    });
  };

  handleChange = (selectedItem: string | null) => {
    this.setState({
      isOpen: false,
    }, () => {
      this.props.onChange(selectedItem);
    });
  };

  render() {
    return (
      <Downshift
        onChange={this.handleChange}
        isOpen={this.state.isOpen}
        onOuterClick={this.handleOuterClick}>
        {state => {
          let menuItems = toMenuItems(this.props.items, state.inputValue);

          return (
            <SelectContainer {...state.getRootProps({ refKey: 'innerRef' })}>
              <div>
                <SelectInput {...state.getInputProps({
                  placeholder: this.props.placeholder,
                  onFocus: this.handleInputFocus,
                })}/>
                {!state.isOpen ? null : (
                  <SelectDropdown>
                    {menuItems.map(({ item, match }, index) => (
                      <SelectItem
                        {...state.getItemProps({ item })}
                        key={item}
                        muted={state.inputValue ? !match : false}
                        highlighted={state.highlightedIndex === index}
                        selected={state.selectedItem === item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectDropdown>
                )}
              </div>
            </SelectContainer>
          );
        }}
      </Downshift>
    );
  }
}
