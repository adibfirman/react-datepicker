import React from 'react';
import { AnimatePresence } from 'framer-motion';

import { Wrapper } from './styles';
import AnimateWrapper from './AnimateWrapper';
import DatesView from './DatesView';
import SelectedDate from './SelectedDate';
import { Provider, useData } from './useGlobalData';
import MonthView from './MonthView';
import YearView from './YearView';

function Datepicker() {
  const { mode } = useData();

  return (
    <Wrapper>
      <AnimateWrapper isOpen={mode !== 'selected_date'}>
        <AnimatePresence>
          {mode === 'selected_date' && <SelectedDate>17 Aug 1945</SelectedDate>}
          {mode === 'date' && <DatesView />}
          {mode === 'month' && <MonthView />}
          {mode === 'year' && <YearView />}
        </AnimatePresence>
      </AnimateWrapper>
    </Wrapper>
  );
}

function WrapWithProvider() {
  return (
    <Provider>
      <Datepicker />
    </Provider>
  );
}

export default WrapWithProvider;
