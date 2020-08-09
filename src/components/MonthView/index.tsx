import React from 'react';
import { motion } from 'framer-motion';

import { WrapperList, Wrapper } from './styles';
import { useData } from '../useGlobalData';
import Header from '../Header';

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
  whileHover: {
    backgroundColor: 'rgb(255 255 255)',
    color: '#000',
    transition: { type: 'spring', stiffness: 100 },
  },
};

export default function MonthView() {
  const { colors, prevMode, triggerAnimation, setMode, mode } = useData();
  const transition = {
    delay: 0.48,
    type: 'spring',
    stiffness: 100,
    restDelta: 5,
    restSpeed: 2,
  };

  function onClick(e: React.MouseEvent<HTMLSpanElement>) {
    const ele = e.target as HTMLElement;
    triggerAnimation({ childEle: ele, mode: 'date', currMode: mode });
    setMode('date');
  }

  return (
    <Wrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={prevMode === 'year' ? transition : {}}
    >
      <Header text="2020" onTitleClick={() => setMode('year')} />
      <WrapperList {...colors}>
        {LIST_MONTH.map((month, i) => (
          <motion.span
            onClick={onClick}
            variants={ANIMATED}
            whileHover="whileHover"
            key={i}
          >
            {month}
          </motion.span>
        ))}
      </WrapperList>
    </Wrapper>
  );
}
