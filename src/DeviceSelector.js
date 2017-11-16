// @flow
import React from 'react';
import Downshift from 'downshift';
import { SelectContainer, SelectInput, SelectDropdown, SelectItem, compare } from './selects';

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
  items: Array<string>,
  selectedItem: string | null,
  onChange: (selected: string | null, state: Object) => mixed,
};

type State = {
  isOpen: boolean,
};

export default class ExampleSelector extends React.Component<Props, State> {
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
