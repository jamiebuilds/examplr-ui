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
  css: Function,
};

const backgrounds: Array<BackgroundItem> = [
  {
    label: 'White',
    css: white,
  },
  {
    label: 'Light Checkered',
    css: lightCheckered,
  },
  {
    label: 'Dark Checkered',
    css: darkCheckered,
  },
  {
    label: 'Black',
    css: black,
  },
];

export default backgrounds;
