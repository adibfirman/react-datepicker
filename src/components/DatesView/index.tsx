import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

import { BaseWeek, Wrapper, BaseMonth } from './styles';
import Header from '../Header';
import { useData } from '../useGlobalData';
import { useListMonth } from './useHooks';
import { AnimateContent } from '../AnimateContent';
import * as Types from './types';

export function DatesView() {
  const { list: days, additionalDayNextMonth } = useListMonth();
  const { setMode, currentDate } = useData();
  const { year, month, date } = currentDate;
  const dateObject = new Date(year, month, date);

  return (
    <AnimateContent selectedPrevMode="month">
      <Wrapper>
        <Header
          text={format(dateObject, 'MMMM yyyy')}
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
            <ShowDate key={day} day={day} date={date} setMode={setMode} />
          ))}
          {additionalDayNextMonth.map((day, i) => (
            <span key={i} className="disabled">
              {day}
            </span>
          ))}
        </BaseMonth>
      </Wrapper>
    </AnimateContent>
  );
}

function ShowDate({ day, date, setMode }: Types.IPropsDate) {
  const grantedDay = day !== date && day < date;

  function handlelClick() {
    if (grantedDay || day === date) setMode('selected_date');
  }

  return (
    <motion.span
      onClick={handlelClick}
      initial={{ borderRadius: '100%' }}
      data-isselected={day === date}
      transition={{ type: 'tween' }}
      className={day > date ? 'disabled' : ''}
      whileHover={grantedDay ? { backgroundColor: '#ECEAED' } : {}}
    >
      {day}
    </motion.span>
  );
}
