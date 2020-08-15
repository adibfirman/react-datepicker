import React from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

import { WrapperList, Wrapper } from './styles';
import { useData, COLOR_DATA, Types } from '../useGlobalData';
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
  whileHover: ({ colors }: { colors: Types.ColorsType }) => ({
    backgroundColor: colors.bgColor,
    color: colors.textColor,
  }),
};

export default function MonthView() {
  const { colors, prevMode, triggerAnimation, setMode, ...data } = useData();
  const { objDate } = data.currentDate;
  const selectedMonthText = format(objDate, 'MMM').toLocaleLowerCase();
  const transition = {
    delay: 0.38,
    type: 'spring',
    stiffness: 100,
    restDelta: 5,
    restSpeed: 2,
  };

  function onClick(e: React.MouseEvent<HTMLSpanElement>) {
    const ele = e.target as HTMLElement;
    triggerAnimation({ childEle: ele, mode: 'date', currMode: data.mode });
    setMode('date');
  }

  return (
    <Wrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={prevMode === 'year' ? transition : {}}
    >
      <Header
        text={format(objDate, 'yyyy')}
        onTitleClick={() => setMode('year')}
        hideNavigation
      />
      <WrapperList {...colors}>
        {LIST_MONTH.map((month, i) => (
          <motion.span
            key={i}
            onClick={onClick}
            variants={ANIMATED}
            whileHover="whileHover"
            data-isselected={month === selectedMonthText}
            custom={{ colors: COLOR_DATA.date }}
          >
            {month}
          </motion.span>
        ))}
      </WrapperList>
    </Wrapper>
  );
}
