import { css } from 'styled-components';

export const VisibilityHidden = css`
  position: absolute;
  opacity: 0;
  z-index: -1;
  clip: rect(0 0 0 0);
`;
