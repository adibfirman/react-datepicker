import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Types } from '../useGlobalData';

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 93%;
  padding: 20px;
`;

export const WrapperList = styled.div<Types.ColorsType>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5em, 1fr));
  justify-items: center;
  height: inherit;
  padding: 12px;

  span {
    color: ${({ textColor }) => textColor};
    align-self: center;
    text-transform: uppercase;
    display: flex;
    padding: 5px 16px;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    cursor: pointer;

    &[data-isselected='true'] {
      background-color: #2196f3;
      color: #fff;
    }
  }
`;
