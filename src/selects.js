import styled from 'styled-components';

export const SelectContainer = styled.div`
  position: relative;
`;

export const SelectInput = styled.input`
  font: inherit;
  padding: 0.5rem 1rem;
  border: none;
  background: white;
  color: black;
  margin-right: 0.5rem;
`;

export const SelectDropdown = styled.div`
  position: absolute;
  min-width: 100%;
  background: white;
  color: black;
  box-shadow:
    0 0 1px rgba(0, 0, 0, 0.4),
    0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SelectItem = styled.div`
  padding: 0.5rem 1rem;
  background: ${props => props.highlighted ? '#eee' : 'transparent'};
  color: ${props => props.muted ? '#999' : 'inherit'};
`;

export const SelectSeparator = styled.div`
  border-top: 1px solid blue;
`;

export function compare(a, b) {
  return a.toLowerCase().includes(b.toLowerCase());
}
