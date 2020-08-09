import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

import { Wrapper, BaseWeek, BaseMonth } from './styles';
import Header from '../Header';
import { useData } from '../useGlobalData';

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

export default function DatesView() {
  const { list: days, additionalDayNextMonth } = useListMonth();
  const { setMode, prevMode, currentDate } = useData();
  const { date, objDate } = currentDate;
  const transition = {
    delay: 0.38,
    type: 'spring',
    stiffness: 100,
    restDelta: 5,
    restSpeed: 2,
  };

  return (
    <Wrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={prevMode === 'month' ? transition : {}}
    >
      <Header
        text={format(objDate, 'MMMM yyyy')}
        onTitleClick={() => setMode('month')}
      />
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
            onClick={() => setMode('selected_date')}
            initial={{ borderRadius: '100%' }}
            data-isselected={day === date}
            transition={{ type: 'tween' }}
            className={day > date ? 'disabled' : ''}
            whileHover={
              day !== date && day < date ? { backgroundColor: '#ECEAED' } : {}
            }
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
