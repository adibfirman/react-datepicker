import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  position: absolute;
  font-weight: bold;
  font-size: 13px;
  padding: 3px 9px;
  overflow: hidden;
  width: 81px;
  height: 19px;
  border-radius: 20px;

  &[data-isopen='true'] {
    width: 330px;
    height: 330px;
    bottom: -27vh;
    padding: 0;
    border-radius: 3px;
    box-shadow: 8px 12px 20px 0px #0000005e;
    overflow: hidden;
  }
`;

export const WrapperChildren = styled.div`
  width: 100%;
  height: 100%;
  z-index: 3;
  position: absolute;
`;

export const BaseCircleAnimate = styled(motion.div)`
  width: 10;
  height: 10;
  position: 'absolute';
  z-index: 0;
  border-radius: 'inherit';
`;
