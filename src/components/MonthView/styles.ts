import styled from 'styled-components';
import { motion } from 'framer-motion';

import { ColorsType } from '../useGlobalData';

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 88%;
  padding: 20px;
`;

export const WrapperList = styled.div<ColorsType>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5em, 1fr));
  justify-items: center;
  height: inherit;

  span {
    color: ${({ textColor }) => textColor};
    align-self: center;
    text-transform: uppercase;
    width: 84%;
    height: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    cursor: pointer;
  }
`;
