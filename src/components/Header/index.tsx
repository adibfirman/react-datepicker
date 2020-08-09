import React from 'react';

import { Base } from './styles';
import { useData } from '../useGlobalData';

interface IProps {
  text: string;
  onTitleClick?: (args: React.MouseEvent<HTMLDivElement>) => void;
}

export default function Header({ text, onTitleClick }: IProps) {
  const { colors } = useData();

  return (
    <Base animate={{ color: colors.textColor }} onClick={onTitleClick}>
      <b>{text}</b>
      <span>{'<'}</span>
      <span>{'>'}</span>
    </Base>
  );
}
