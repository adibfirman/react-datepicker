import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  font-family: inherit;
  display: flex;
  justify-content: center;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(2, max-content);
  grid-column-gap: 12px;
  font-size: 1.5em;
  padding: 20px;
  padding-bottom: 0;
`;
