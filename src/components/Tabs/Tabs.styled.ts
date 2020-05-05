import styled from 'styled-components';
import { colors } from '../../assets/styled/mixins';

interface ITab {
  active: boolean
}

export const TabsPanel = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Tab = styled.button<ITab>`
  flex: 1 0 auto;
  padding: 14px;
  outline: none;
  border: 1px solid ${colors.TabBorder};
  background-color: ${colors.white};
  color: ${colors.main};
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  border-radius: 0;
  cursor: pointer;
    
  ${({ active }) => active && `
    color: ${colors.white};
    background-color: ${colors.primary};
    border-color: ${colors.primary};
  `}

  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
