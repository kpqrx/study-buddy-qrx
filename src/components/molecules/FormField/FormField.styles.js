import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 24px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;
