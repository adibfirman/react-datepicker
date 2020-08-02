import React from 'react';

import { Wrapper, Header } from './styles';
import AnimateWrapper from './AnimateWrapper';
import MonthView from './MonthView';
import SelectedDate from './SelectedDate';
import { Provider, useData } from './useGlobalData';

function Datepicker() {
  const { mode } = useData();

  return (
    <Wrapper>
      <AnimateWrapper isOpen={mode === 'month'}>
        {(mode === 'month' || mode === 'year') && (
          <Header>
            <b>August 2020</b>
            <span>{'<'}</span>
            <span>{'>'}</span>
          </Header>
        )}
        {mode === 'date' && <SelectedDate>17 Aug 1945</SelectedDate>}
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
