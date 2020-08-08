import React from 'react';
import { motion } from 'framer-motion';

import { Wrapper, WrapperChildren } from './styles';
import { useData } from '../useGlobalData';
import { usePrevious } from '../../utils';

interface IProps {
  children: any;
  isOpen: boolean;
}

const VARIANTS_BOX_STYLE = {
  width: 10,
  height: 10,
  position: 'absolute',
  zIndex: 0,
  borderRadius: 'inherit',
} as React.StyleHTMLAttributes<HTMLStyleElement>;

export default function AnimateWrapper({ children, isOpen }: IProps) {
  const { colors, prevColors, animateBgColor, refEleParent } = useData();

  return (
    <Wrapper
      ref={refEleParent}
      layout
      data-isopen={isOpen}
      animate={{ backgroundColor: prevColors?.bgColor || colors.bgColor }}
    >
      {isOpen && (
        <motion.div style={VARIANTS_BOX_STYLE} animate={animateBgColor} />
      )}
      <WrapperChildren>{children}</WrapperChildren>
    </Wrapper>
  );
}
