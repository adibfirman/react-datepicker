import React from 'react';
import { motion } from 'framer-motion';

import { Wrapper, WrapperChildren } from './styles';
import { useData } from '../useGlobalData';
import * as Types from './types';

export function AnimateWrapper({ children }: Types.IProps) {
  const { colors, mode, prevColors, refEleParent } = useData();
  const isOpen = mode !== 'selected_date';

  return (
    <Wrapper
      layout
      ref={refEleParent}
      data-isopen={isOpen}
      style={{ backgroundColor: prevColors?.bgColor || colors.bgColor }}
    >
      {isOpen && <WavesBox />}
      <WrapperChildren>{children}</WrapperChildren>
    </Wrapper>
  );
}

function WavesBox() {
  const { animateBgColor } = useData();
  const VARIANTS_BOX_STYLE = {
    width: 10,
    height: 10,
    position: 'absolute',
    zIndex: 0,
    borderRadius: 'inherit',
  } as React.StyleHTMLAttributes<HTMLStyleElement>;

  return <motion.div style={VARIANTS_BOX_STYLE} animate={animateBgColor} />;
}
