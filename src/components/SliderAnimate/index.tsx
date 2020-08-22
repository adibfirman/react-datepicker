import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Wrapper } from './styles';
import * as Types from './types';

const variants = {
  initial: (isMoveToLeft: boolean) => ({
    x: isMoveToLeft ? -1000 : 1000,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: (isMoveToLeft: boolean) => ({
    x: isMoveToLeft ? 1000 : -1000,
    opacity: 0,
  }),
};

const transition = {
  x: { type: 'spring', stiffness: 80, damping: 20 },
  opacity: { duration: 1 },
};

export function SliderAnimate({
  children,
  isMoveToLeft,
  customKey,
  height = '100%',
}: React.PropsWithChildren<Types.IProps>) {
  return (
    <Wrapper>
      <AnimatePresence initial={false}>
        <motion.div
          key={customKey}
          custom={isMoveToLeft}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{ height, width: '100%', position: 'absolute' }}
          transition={transition}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </Wrapper>
  );
}
