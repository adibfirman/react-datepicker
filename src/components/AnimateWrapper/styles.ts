import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  position: absolute;
  background-color: #fff;
  font-weight: bold;
  font-size: 13px;
  border-radius: 10px;
  padding: 3px 9px;

  &[data-isopen='true'] {
    width: 250px;
    height: 250px;
    top: calc(100vh - 35em);
    padding: 0;
    box-shadow: 0 0 20px -4px #000000;
    overflow: hidden;
  }
`;
