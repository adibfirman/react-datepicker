import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  position: absolute;
  background-color: #fff;
  font-weight: bold;
  font-size: 13px;
  border-radius: 10px;
  padding: 3px 9px;
  overflow: hidden;

  &[data-isopen='true'] {
    width: 330px;
    height: 330px;
    bottom: -27vh;
    padding: 0;
    box-shadow: 0 0 20px -4px #000000;
    overflow: hidden;
  }
`;

export const WrapperChildren = styled.div`
  width: 100%;
  height: 100%;
  z-index: 3;
  position: absolute;
`;