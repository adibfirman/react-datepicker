import styled from 'styled-components';
import { ColorsType } from '../useGlobalData';

export const Wrapper = styled.div<ColorsType>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(7em, 1fr));
  padding: 20px;
  justify-items: center;
  height: 74%;

  span {
    color: ${({ textColor }) => textColor};
    align-self: center;
    text-transform: uppercase;
  }
`;
