import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

import { BaseWeek, Wrapper, BaseMonth } from './styles';
import Header from '../Header';
import { useData } from '../useGlobalData';
import { useListMonth } from './useHooks';
import { AnimateContent } from '../AnimateContent';
import * as Types from './types';
import { SliderAnimate } from '../SliderAnimate';

export function DatesView() {
  const { setMode, currentDate, setDate } = useData();
  const { year, month, date } = currentDate;
  const { list: days, additionalDayNextMonth } = useListMonth({ year, month });
  const [isMoveLeft, setMoveLeft] = useState(false);

  function handleNextMonth() {
    setMoveLeft(false);
    setDate({ month: month + 1, date: undefined });
  }

  function handlePrevMonth() {
    setMoveLeft(true);
    setDate({ month: month - 1, date: undefined });
  }

  return (
    <AnimateContent selectedPrevMode="month">
      <Wrapper>
        <Header
          text={<TextHeader goToNextMonth={isMoveLeft} />}
          onTitleClick={() => setMode('month')}
          onRightClick={handleNextMonth}
          onLeftClick={handlePrevMonth}
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
        <SliderAnimate isMoveToLeft={isMoveLeft} customKey={month}>
          <BaseMonth>
            {days.map(day => (
              <ShowDate
                key={day}
                day={day}
                date={date}
                setMode={setMode}
                setDate={setDate}
              />
            ))}
            {additionalDayNextMonth.map((day, i) => (
              <span key={i} className="disabled">
                {day}
              </span>
            ))}
          </BaseMonth>
        </SliderAnimate>
      </Wrapper>
    </AnimateContent>
  );
}

function TextHeader({ goToNextMonth }: { goToNextMonth: boolean }) {
  const { currentDateObj } = useData();
  const monthText = format(currentDateObj, 'MMM ');
  const yearText = format(currentDateObj, 'yyyy');

  return (
    <>
      <SliderAnimate isMoveToLeft={goToNextMonth} customKey={monthText}>
        {monthText}
      </SliderAnimate>
      <SliderAnimate isMoveToLeft={goToNextMonth} customKey={yearText}>
        {yearText}
      </SliderAnimate>
    </>
  );
}

function ShowDate({ day, date, setMode, setDate }: Types.IPropsDate) {
  function handlelClick() {
    setDate({ date: day });
    setMode('selected_date');
  }

  return (
    <motion.span
      onClick={handlelClick}
      data-isselected={day === date}
      transition={{ type: 'tween' }}
      whileHover={day !== date ? { backgroundColor: '#ECEAED' } : {}}
    >
      {day}
    </motion.span>
  );
}
