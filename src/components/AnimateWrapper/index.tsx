import React from 'react';
import { motion } from 'framer-motion';

import { Wrapper, WrapperChildren } from './styles';
import { useData } from '../useGlobalData';

interface IProps {
  children: any;
  isOpen: boolean;
}

const VARIANTS_BOX_STYLE = {
  width: 50,
  height: 50,
  borderRadius: '100%',
  position: 'absolute',
  zIndex: 0,
} as React.StyleHTMLAttributes<HTMLStyleElement>;

export default function AnimateWrapper({ children, isOpen }: IProps) {
  const { colors, animateBgColor, refEleParent } = useData();

  return (
    <Wrapper
      ref={refEleParent}
      layout
      data-isopen={isOpen}
      animate={{ backgroundColor: colors.bgColor }}
    >
      {isOpen && (
        <motion.div style={VARIANTS_BOX_STYLE} animate={animateBgColor} />
      )}
      <WrapperChildren>{children}</WrapperChildren>
    </Wrapper>
  );
}
