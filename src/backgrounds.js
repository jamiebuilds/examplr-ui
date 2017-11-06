// @flow
import { css } from 'styled-components';

const white = css`
  background-color: white;
`;

const black = css`
  background-color: black;
`;

const lightCheckered = css`
  background-color: white;
  background-image:
    linear-gradient(45deg, #f8f8f8 25%, transparent 25%),
    linear-gradient(-45deg, #f8f8f8 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #f8f8f8 75%),
    linear-gradient(-45deg, transparent 75%, #f8f8f8 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
`;

const darkCheckered = css`
  background-color: #000;
  background-image:
    linear-gradient(45deg, #111 25%, transparent 25%),
    linear-gradient(-45deg, #111 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #111 75%),
    linear-gradient(-45deg, transparent 75%, #111 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
`;

export type BackgroundItem = {
  label: string,
  wrapper: Function,
  container: Function,
};

const backgrounds: Array<BackgroundItem> = [
  {
    label: 'White',
    wrapper: white,
    container: lightCheckered,
  },
  {
    label: 'Light Checkered',
    wrapper: lightCheckered,
    container: lightCheckered,
  },
  {
    label: 'Dark Checkered',
    wrapper: darkCheckered,
    container: darkCheckered,
  },
  {
    label: 'Black',
    wrapper: black,
    container: darkCheckered,
  },
];

export default backgrounds;
