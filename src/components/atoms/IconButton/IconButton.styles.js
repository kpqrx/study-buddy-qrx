import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  border-radius: 50%;
  width: 32px;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.colors.grey};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  svg {
    pointer-events: none;
    transform: scale(1.55);
  }
`;

export const StyledTooltip = styled.span`
  border-radius: 8px;
  padding: 4px 18px;
  background-color: hsla(0, 0%, 0%, 50%);
  color: ${({ theme }) => theme.colors.white};
  white-space: nowrap;
  position: absolute;
  bottom: -30px;
  visibility: hidden;
  opacity: 0;
  transform: translateY(5px);
  transition: all 0.2s ease-in-out;
  pointer-events: none;

  ${({ isTooltipVisible }) =>
    isTooltipVisible &&
    css`
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    `}

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border: 4px solid transparent;
    border-bottom-color: hsla(0, 0%, 0%, 50%);
    position: absolute;
    top: -8px;
    left: calc(50% - 4px);
  }
`;
