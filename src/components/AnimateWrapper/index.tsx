import React from 'react';

import { Wrapper } from './styles';
import { useData } from '../useGlobalData';

interface Props {
  children: any;
}

export default function AnimateWrapper({ children }: Props) {
  const { mode, colors } = useData();
  const isOpen = mode !== 'selected_date';

  return (
    <Wrapper
      layout
      data-isopen={isOpen}
      data-modecalendar={mode}
      animate={{ backgroundColor: colors.bgColor }}
    >
      {children}
    </Wrapper>
  );
}
