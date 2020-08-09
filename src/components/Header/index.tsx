import React from 'react';

import { Base } from './styles';
import { useData } from '../useGlobalData';

interface IProps {
  text: string;
  hideNavigation?: boolean;
  onTitleClick?: (args: React.MouseEvent<HTMLDivElement>) => void;
}

export default function Header({
  text,
  onTitleClick,
  hideNavigation = false,
}: IProps) {
  const { colors } = useData();

  return (
    <Base animate={{ color: colors.textColor }} onClick={onTitleClick}>
      <b>{text}</b>
      {!hideNavigation && (
        <>
          <span>{'<'}</span>
          <span>{'>'}</span>
        </>
      )}
    </Base>
  );
}
