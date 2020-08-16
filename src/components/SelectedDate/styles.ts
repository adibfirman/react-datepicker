import styled from 'styled-components';

export const Base = styled.div`
  white-space: nowrap;
  cursor: pointer;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  align-items: center;
  grid-column-gap: 5px;

  > :nth-of-type(1) {
    margin-bottom: 4px;
  }
`;
