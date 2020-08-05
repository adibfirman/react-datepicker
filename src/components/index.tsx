import React from 'react';

import { Wrapper, Header } from './styles';
import AnimateWrapper from './AnimateWrapper';
import DatesView from './DatesView';
import SelectedDate from './SelectedDate';
import { Provider, useData } from './useGlobalData';
import MonthView from './MonthView';

function Datepicker() {
  const { mode, colors, onHeaderClick } = useData();

  return (
    <Wrapper>
      <AnimateWrapper isOpen={mode !== 'selected_date'}>
        {mode !== 'selected_date' && (
          <Header
            animate={{ color: colors.textColor }}
            onClick={() => onHeaderClick()}
          >
            <b>August 2020</b>
            <span>{'<'}</span>
            <span>{'>'}</span>
          </Header>
        )}
        {mode === 'selected_date' && <SelectedDate>17 Aug 1945</SelectedDate>}
        {mode === 'date' && <DatesView />}
        {mode === 'month' && <MonthView />}
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
