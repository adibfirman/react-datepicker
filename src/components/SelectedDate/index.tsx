import React from 'react';

import { Base } from './styles';
import { useData } from '../useGlobalData';

interface Props extends React.HtmlHTMLAttributes<HTMLSpanElement> {
  children: string;
}

export default function SelectedDate({ children }: Props) {
  const { setMode } = useData();
  return <Base onClick={() => setMode('month')}>{children}</Base>;
}
