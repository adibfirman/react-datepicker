import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { WrapperList, Wrapper } from './styles';
import { useData, Types } from '../useGlobalData';
import Header from '../Header';
import { AnimateContent } from '../AnimateContent';
import { SliderAnimate } from '../SliderAnimate';

const ANIMATED = {
  whileHover: ({ colors }: { colors: Types.ColorsType }) => ({
    backgroundColor: colors.bgColor,
    color: colors.textColor,
    transition: { type: 'spring', stiffness: 100 },
  }),
};

const MAX_LIST_OF_YEARS = 20;

function generateListYears(lastYear: number) {
  const list: number[] = [];

  for (let i = 1; i <= MAX_LIST_OF_YEARS; i++) {
    if (list.length === 0) list.push(lastYear);
    else {
      const firstList = list[0];
      const increaseYear = firstList - 1;

      list.unshift(increaseYear);
    }
  }

  return list;
}

export function YearView() {
  const { colors, triggerAnimation, setDate, setMode, ...data } = useData();
  const { year: selectedYear } = data.currentDate;
  const [page, setPage] = useState(0);
  const [isMoveLeft, setIsMoveLeft] = useState(false);
  const [years, setYears] = useState(() => {
    const thisYear = new Date().getFullYear();
    const list = generateListYears(thisYear);

    return list;
  });

  function onClick(year: number) {
    return (e: React.MouseEvent<HTMLSpanElement>) => {
      const ele = e.target as HTMLElement;
      const mode = 'month';

      triggerAnimation({ childEle: ele, mode, currMode: data.mode });
      setDate({ year, month: undefined });
      setMode(mode);
    };
  }

  function onNextPage() {
    const getLastYear = years[years.length - 1] + MAX_LIST_OF_YEARS;
    const generateYears = generateListYears(getLastYear);

    setIsMoveLeft(false);
    setYears(generateYears);
    setPage(prevPage => prevPage + 1);
  }

  function onPrevPage() {
    const getLastYear = years[0] - 1;
    const generateYears = generateListYears(getLastYear);

    setYears(generateYears);
    setIsMoveLeft(true);
    setPage(prevPage => prevPage - 1);
  }

  return (
    <AnimateContent>
      <Wrapper>
        <Header
          text="Year"
          hideArrowInText
          onLeftClick={onPrevPage}
          onRightClick={onNextPage}
        />
        <SliderAnimate height="95%" isMoveToLeft={isMoveLeft} customKey={page}>
          <WrapperList monthColor={data.colorsData.month} {...colors}>
            {years.map((year, i) => (
              <motion.span
                onClick={onClick(year)}
                variants={ANIMATED}
                custom={{ colors: data.colorsData.month }}
                whileHover="whileHover"
                data-isselected={year === selectedYear}
                key={i}
              >
                {year}
              </motion.span>
            ))}
          </WrapperList>
        </SliderAnimate>
      </Wrapper>
    </AnimateContent>
  );
}
