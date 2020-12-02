import { css } from 'styled-components';

export const sizes = {
  medium: 1024,
  tablet: 780,
  small: 480,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
