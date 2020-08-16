import React from 'react';
import { format } from 'date-fns';

import { Base } from './styles';
import { useData } from '../useGlobalData';
import { ArrowDown } from '../Arrow';
import { AnimateContent } from '../AnimateContent';

export function SelectedDate() {
  const { setMode, prevMode, currentDate } = useData();

  return (
    <AnimateContent
      withTransitionWhen={Boolean(prevMode)}
      onClick={() => setMode('date')}
    >
      <Base>
        {format(currentDate.objDate, 'dd MMM yyyy')} <ArrowDown />
      </Base>
    </AnimateContent>
  );
}
