import styled from 'styled-components';
import { colors, shadow } from '../../assets/styled/mixins';

const BaseText = styled.span`
  display: block;
  font-weight: 600;
`;

export const Wrapper = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: ${shadow.panel};
  background-color: ${colors.white};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Price = styled(BaseText)`
  font-size: 24px;
  line-height: 24px;
  color: ${colors.primary};
`;

export const Preview = styled.div`
  width: 140px;

  img {
    vertical-align: middle;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Info = styled.div`
  width: 140px;
`;

export const InfoLabel = styled(BaseText)`
  font-size: 12px;
  line-height: 18px;
  color: ${colors.secondary};
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const InfoText = styled(BaseText)`
  font-size: 14px;
  line-height: 21px;
  color: ${colors.main};
`;
