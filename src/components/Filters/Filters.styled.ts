import styled from 'styled-components';
import { colors, shadow } from '../../assets/styled/mixins';

export const Panel = styled.div`
  padding: 20px 0 10px;
  border-radius: 5px;
  box-shadow: ${shadow.panel};
  background-color: ${colors.white};
`;

export const Title = styled.div`
  margin-bottom: 10px;
  padding: 0 20px;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  color: ${colors.main};
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;
