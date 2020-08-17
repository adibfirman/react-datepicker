import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

import { WrapperList, Wrapper } from './styles';
import { useData, COLOR_DATA } from '../useGlobalData';
import Header from '../Header';
import { AnimateContent } from '../AnimateContent';
import { LIST_MONTH, ANIMATED_EACH_OF_MONTH } from './constants';

export function MonthView() {
  const { colors, prevMode, triggerAnimation, setMode, ...data } = useData();
  const { year, month, date } = data.currentDate;
  const dateObject = new Date(year, month, date);
  const selectedMonthText = format(dateObject, 'MMM').toLocaleLowerCase();

  function onClick(month: number) {
    return (e: React.MouseEvent<HTMLSpanElement>) => {
      const ele = e.target as HTMLElement;
      triggerAnimation({ childEle: ele, mode: 'date', currMode: data.mode });

      data.setDate({ month });
      setMode('date');
    };
  }

  return (
    <AnimateContent selectedPrevMode="year">
      <Wrapper>
        <Header
          text={format(dateObject, 'yyyy')}
          onTitleClick={() => setMode('year')}
          hideNavigation
        />
        <WrapperList {...colors}>
          {LIST_MONTH.map((month, i) => (
            <motion.span
              key={i}
              onClick={onClick(i)}
              variants={ANIMATED_EACH_OF_MONTH}
              whileHover="whileHover"
              data-isselected={month === selectedMonthText}
              custom={{ colors: COLOR_DATA.date }}
            >
              {month}
            </motion.span>
          ))}
        </WrapperList>
      </Wrapper>
    </AnimateContent>
  );
}
