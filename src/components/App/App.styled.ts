import styled from 'styled-components';
import { colors } from '../../assets/styled/mixins';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  min-width: 780px;
  padding: 0 15px;
  background-color: ${colors.pageBg};
`;

export const Header = styled.header`
  padding: 40px 0 26px;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 755px;
`;

export const Sidebar = styled.div`
  flex-shrink: 0;
  width: 232px;
  margin-right: 20px;
`;

export const Content = styled.main`
  flex: 1 0 auto;
`;
