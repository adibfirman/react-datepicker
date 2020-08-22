import styled from 'styled-components';

export const Base = styled.div<{ txtColors: string }>`
  white-space: nowrap;
  cursor: pointer;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  align-items: center;
  grid-column-gap: 5px;
  color: ${({ txtColors }) => txtColors};

  > :nth-of-type(1) {
    margin-bottom: 4px;
  }
`;
