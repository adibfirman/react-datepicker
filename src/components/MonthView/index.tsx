import React from 'react';
import { motion } from 'framer-motion';

import { Wrapper } from './styles';
import { useData } from '../useGlobalData';

const LIST_MONTH = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const ANIMATED = {
  initial: {
    width: '59%',
    height: '47%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 19,
    cursor: 'pointer',
  },
  whileHover: {
    backgroundColor: 'rgb(255 255 255)',
    color: '#000',
    transition: { type: 'spring', stiffness: 100 },
  },
};

export default function MonthView() {
  const { colors, triggerAnimation } = useData();

  function onClick(e: React.MouseEvent<HTMLSpanElement>) {
    const ele = e.target as HTMLElement;
    triggerAnimation(ele);
  }

  return (
    <Wrapper {...colors}>
      {LIST_MONTH.map((month, i) => (
        <motion.span
          onClick={onClick}
          variants={ANIMATED}
          initial="initial"
          whileHover="whileHover"
          key={i}
        >
          {month}
        </motion.span>
      ))}
    </Wrapper>
  );
}
