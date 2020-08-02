import React, { useState } from 'react';

import { Wrapper, SelectedDate, Header } from './styles';
import AnimateWrapper from './AnimateWrapper';
import MonthView from './MonthView';

function Datepicker() {
  const [mode, setMode] = useState<'date' | 'month' | 'year'>('date');

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
        {mode === 'date' && (
          <SelectedDate onClick={() => setMode('month')}>
            17 Aug 1945
          </SelectedDate>
        )}
        {mode === 'month' && <MonthView />}
      </AnimateWrapper>
    </Wrapper>
  );
}

export default Datepicker;
