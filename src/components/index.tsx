import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';

import { Wrapper } from './styles';
import { AnimateWrapper } from './AnimateWrapper';
import DatesView from './DatesView';
import SelectedDate from './SelectedDate';
import { Provider, useData, Types } from './useGlobalData';
import MonthView from './MonthView';
import YearView from './YearView';

function Datepicker() {
  const { mode, currentDate } = useData();

  return (
    <Wrapper>
      <AnimateWrapper>
        <AnimatePresence>
          {mode === 'selected_date' && (
            <SelectedDate>
              {format(currentDate.objDate, 'dd MMM yyyy')}
            </SelectedDate>
          )}
          {mode === 'date' && <DatesView />}
          {mode === 'month' && <MonthView />}
          {mode === 'year' && <YearView />}
        </AnimatePresence>
      </AnimateWrapper>
    </Wrapper>
  );
}

function WrapWithProvider({ currentDate }: Types.IValueComponent) {
  return (
    <Provider value={{ currentDate }}>
      <Datepicker />
    </Provider>
  );
}

export default WrapWithProvider;
