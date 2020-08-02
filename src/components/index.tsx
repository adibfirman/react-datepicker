import React, { useState } from 'react';

import { Wrapper, SelectedDate } from './styles';
import AnimateWrapper from './AnimateWrapper';

function Datepicker() {
  const [mode, setMode] = useState<'date' | 'month' | 'year'>('date');

  return (
    <Wrapper>
      <AnimateWrapper isOpen={mode === 'month'}>
        {mode === 'date' && (
          <SelectedDate onClick={() => setMode('month')}>
            17 Aug 1945
          </SelectedDate>
        )}
      </AnimateWrapper>
    </Wrapper>
  );
}

export default Datepicker;
