import React from 'react';

import { Base, WrapperTitle } from './styles';
import { useData } from '../useGlobalData';
import * as Types from './types';
import { ArrowRight, ArrowLeft, ArrowDown } from '../Arrow';

export default function Header({
  text,
  onTitleClick,
  hideNavigation = false,
  hideArrowInText = false,
  onRightClick,
  onLeftClick,
}: Types.IProps) {
  const { colors } = useData();

  return (
    <Base animate={{ color: colors.textColor }}>
      <WrapperTitle onClick={onTitleClick}>
        {typeof text === 'string' ? <b>{text}</b> : text}
        {!hideArrowInText && <ArrowDown borderColor={colors.textColor} />}
      </WrapperTitle>
      {!hideNavigation && (
        <>
          <ArrowLeft onClick={onLeftClick} borderColor={colors.textColor} />
          <ArrowRight onClick={onRightClick} borderColor={colors.textColor} />
        </>
      )}
    </Base>
  );
}
