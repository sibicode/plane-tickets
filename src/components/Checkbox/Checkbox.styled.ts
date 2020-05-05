import styled from 'styled-components';
import { VisibilityHidden, mixins } from '../../assets/styled';
import checkMark from '../../assets/images/check.svg';

export const Label = styled.label`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  font-size: 13px;
  line-height: 20px;
  color: ${mixins.colors.main};
  background-color: ${mixins.colors.white};
  cursor: pointer;

  &:hover {
    background-color: ${mixins.colors.checkboxHover};
  }
`;

export const Indicator = styled.span`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border: 1px solid ${mixins.colors.checkboxBorder};
  border-radius: 2px;
  background-color: ${mixins.colors.white};
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const Input = styled.input`
  ${VisibilityHidden}

  &:checked + ${Indicator} {
    border-color: ${mixins.colors.primary};
    background-image: url(${checkMark})
  }
`;
