import React from 'react';

import { Base } from './styles';
import { useData } from '../useGlobalData';

export default function Header() {
  const { colors, onHeaderClick } = useData();

  return (
    <Base animate={{ color: colors.textColor }} onClick={() => onHeaderClick()}>
      <b>August 2020</b>
      <span>{'<'}</span>
      <span>{'>'}</span>
    </Base>
  );
}
