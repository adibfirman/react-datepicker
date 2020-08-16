import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Base = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr repeat(2, max-content);
  grid-column-gap: 12px;
  font-size: 1.5em;
  align-items: center;
`;

export const WrapperTitle = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  align-items: center;
  grid-column-gap: 10px;
  cursor: pointer;
`;
