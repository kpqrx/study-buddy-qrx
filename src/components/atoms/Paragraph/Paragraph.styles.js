import styled from 'styled-components';

export const StyledParagraph = styled.p`
  font-size: ${({ theme, fontSize }) => theme.fontSize[fontSize]};
  font-weight: ${({ isBold }) => (isBold ? '700' : '300')};
  color: ${({ theme }) => theme.colors.black};
`;
