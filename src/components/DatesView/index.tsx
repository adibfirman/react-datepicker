import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

import { BaseWeek, Wrapper, BaseMonth } from './styles';
import Header from '../Header';
import { useData } from '../useGlobalData';
import { useListMonth } from './useHooks';
import { AnimateContent } from '../AnimateContent';

export default function DatesView() {
  const { list: days, additionalDayNextMonth } = useListMonth();
  const { setMode, currentDate } = useData();
  const { date, objDate } = currentDate;

  return (
    <AnimateContent selectedPrevMode="month">
      <Wrapper>
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
    </AnimateContent>
  );
}
