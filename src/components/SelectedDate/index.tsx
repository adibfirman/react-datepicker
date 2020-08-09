import React from 'react';

import { Base } from './styles';
import { useData } from '../useGlobalData';

interface Props extends React.HtmlHTMLAttributes<HTMLSpanElement> {
  children: string;
}

export default function SelectedDate({ children }: Props) {
  const { setMode, prevMode } = useData();

  return (
    <Base
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
      transition={
        prevMode && {
          delay: 0.3,
          type: 'spring',
          stiffness: 100,
          restDelta: 5,
          restSpeed: 2,
        }
      }
      onClick={() => setMode('date')}
    >
      {children}
    </Base>
  );
}
