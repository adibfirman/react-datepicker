import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

import { WrapperList, Wrapper } from './styles';
import { useData, Types, COLOR_DATA } from '../useGlobalData';
import Header from '../Header';
import { AnimateContent } from '../AnimateContent';

const ANIMATED = {
  whileHover: ({ colors }: { colors: Types.ColorsType }) => ({
    backgroundColor: colors.bgColor,
    color: colors.textColor,
    transition: { type: 'spring', stiffness: 100 },
  }),
};

export function YearView() {
  const { colors, triggerAnimation, setMode, ...data } = useData();
  const { year: selectedYear } = data.currentDate;
  const years = useMemo(() => {
    const lengthData = 20;
    const thisYear = new Date().getFullYear();
    const list: number[] = [];

    for (let i = 1; i <= lengthData; i++) {
      if (list.length === 0) list.push(thisYear);
      else {
        const firstList = list[0];
        const increaseYear = firstList - 1;

        list.unshift(increaseYear);
      }
    }

    return list;
  }, []);

  function onClick(e: React.MouseEvent<HTMLSpanElement>) {
    const ele = e.target as HTMLElement;
    const mode = 'month';

    triggerAnimation({ childEle: ele, mode, currMode: data.mode });
    setMode(mode);
  }

  return (
    <AnimateContent>
      <Wrapper>
        <Header text="Year" hideArrowInText />
        <WrapperList {...colors}>
          {years.map((year, i) => (
            <motion.span
              onClick={onClick}
              variants={ANIMATED}
              custom={{ colors: COLOR_DATA.month }}
              whileHover="whileHover"
              data-isselected={year === selectedYear}
              key={i}
            >
              {year}
            </motion.span>
          ))}
        </WrapperList>
      </Wrapper>
    </AnimateContent>
  );
}
