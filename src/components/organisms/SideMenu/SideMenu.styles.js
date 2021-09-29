import styled from 'styled-components';
import { ReactComponent as LogoImage } from 'assets/logo.svg';
import { NavLink } from 'react-router-dom';

export const StyledContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 150px;
  height: 100vh;
  position: fixed;
  border-right: 1px solid ${({ theme }) => theme.colors.gray.light};
`;

export const StyledLogoImage = styled(LogoImage)`
  width: 100%;
  height: 81px;
  fill: ${({ theme }) => theme.colors.gray.xDark};
  margin: 20px 0 48px;
`;

export const StyledNavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40%;
`;

const activeClassName = 'active';

export const StyledNavItem = styled(NavLink).attrs({ activeClassName })`
  color: ${({ theme }) => theme.colors.gray.xDark};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 20px;
  margin-bottom: 14px;
  position: relative;
  width: 100%;
  text-align: right;
  padding-right: 26px;

  &::before {
    content: '';
    position: absolute;
    right: 0;
    width: 22px;
    height: 3px;
    top: calc(50% - 2px);
    background-color: ${({ theme }) => theme.colors.gray.light};
    transform: scaleX(0);
    transform-origin: right;
    transition: all 0.5s ease;
    filter: contrast(0.6);
  }

  &.${activeClassName} {
    &::before {
      transform: scaleX(1);
      filter: contrast(1);
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;
