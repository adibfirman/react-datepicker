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
}: Types.IProps) {
  const { colors } = useData();

  return (
    <Base animate={{ color: colors.textColor }} onClick={onTitleClick}>
      <WrapperTitle>
        <b>{text}</b>
        {!hideArrowInText && <ArrowDown borderColor={colors.textColor} />}
      </WrapperTitle>
      {!hideNavigation && (
        <>
          <ArrowLeft borderColor={colors.textColor} />
          <ArrowRight borderColor={colors.textColor} />
        </>
      )}
    </Base>
  );
}
