import React from 'react';

import { Wrapper } from './styles';

interface Props {
  children: any;
  isOpen: boolean;
}

export default function AnimateWrapper({ children, isOpen }: Props) {
  return (
    <Wrapper layout data-isopen={isOpen}>
      {children}
    </Wrapper>
  );
}
