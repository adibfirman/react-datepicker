import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Base = styled(motion.div)`
  padding: 20px;
  height: 88%;
  display: grid;
  grid-template-rows: repeat(2, max-content) 1fr;
`;
