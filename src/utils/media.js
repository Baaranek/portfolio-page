import { css } from 'styled-components';

export const sizes = {
  desktop: 1200,
  tablet: 768,
  phone: 480,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
