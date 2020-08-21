import React from 'react';
import { AnimatePresence } from 'framer-motion';

import { Wrapper } from './styles';
import { AnimateWrapper } from './AnimateWrapper';
import { DatesView } from './DatesView';
import { SelectedDate } from './SelectedDate';
import { Provider, useData, Types } from './useGlobalData';
import { MonthView } from './MonthView';
import { YearView } from './YearView';

function Datepicker() {
  const { mode } = useData();

  return (
    <Wrapper>
      <AnimateWrapper>
        <AnimatePresence>
          {mode === 'selected_date' && <SelectedDate />}
          {mode === 'date' && <DatesView />}
          {mode === 'month' && <MonthView />}
          {mode === 'year' && <YearView />}
        </AnimatePresence>
      </AnimateWrapper>
    </Wrapper>
  );
}

function WrapWithProvider({
  value,
  onChange = () => {},
}: Types.IValueComponent) {
  return (
    <Provider value={{ value, onChange }}>
      <Datepicker />
    </Provider>
  );
}

export default WrapWithProvider;
