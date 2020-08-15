import React from 'react';

import { Wrapper, WrapperChildren, BaseCircleAnimate } from './styles';
import { useData } from '../useGlobalData';
import * as Types from './types';

export function AnimateWrapper({ children }: Types.IProps) {
  const { colors, mode, prevColors, animateBgColor, refEleParent } = useData();
  const isOpen = mode !== 'selected_date';

  return (
    <Wrapper
      layout
      ref={refEleParent}
      data-isopen={isOpen}
      style={{ backgroundColor: prevColors?.bgColor || colors.bgColor }}
    >
      {isOpen && <BaseCircleAnimate animate={animateBgColor} />}
      <WrapperChildren>{children}</WrapperChildren>
    </Wrapper>
  );
}
