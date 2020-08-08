import React from 'react';
import { motion } from 'framer-motion';

import { Wrapper, BaseWeek, BaseMonth } from './styles';
import Header from '../Header';

function useListMonth() {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const totalDaysThisMonth = new Date(year, month, 0).getDate();
  const maxGenereateList = 35;
  const additionalDayNextMonth = Array(maxGenereateList - totalDaysThisMonth)
    .fill(null)
    .map((_, i) => i + 1);

  const list = Array(totalDaysThisMonth)
    .fill(null)
    .map((_, i) => i + 1);

  return { list, additionalDayNextMonth };
}

export default function MonthView() {
  const { list: days, additionalDayNextMonth } = useListMonth();

  return (
    <Wrapper
      animate={{ scale: 1 }}
      transition={{ delay: 0.29, type: 'tween' }}
      initial={{ scale: 0 }}
    >
      <Header />
      <BaseWeek>
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>T</span>
        <span>F</span>
        <span>S</span>
        <span>S</span>
      </BaseWeek>
      <BaseMonth>
        {days.map(day => (
          <motion.span
            key={day}
            initial={{ borderRadius: '100%' }}
            data-isselected={day === 2}
            transition={{ type: 'tween' }}
            whileHover={day !== 2 ? { backgroundColor: '#ECEAED' } : {}}
          >
            {day}
          </motion.span>
        ))}
        {additionalDayNextMonth.map(day => (
          <span key={day} className="disabled">
            {day}
          </span>
        ))}
      </BaseMonth>
    </Wrapper>
  );
}
