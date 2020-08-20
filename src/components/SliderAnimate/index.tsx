import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Wrapper } from './styles';
import * as Types from './types';

const variants = {
  initial: (isMoveToLeft: boolean) => ({
    x: isMoveToLeft ? -1000 : 1000,
    display: 'initial',
    opacity: 0,
  }),
  animate: {
    x: 0,
    display: 'unset',
    opacity: 1,
  },
  exit: (isMoveToLeft: boolean) => ({
    x: isMoveToLeft ? 1000 : -1000,
    display: 'none',
    opacity: 0,
  }),
};

const transition = {
  x: { type: 'spring', stiffness: 70, damping: 200 },
  opacity: { duration: 1 },
  display: { duration: 0 },
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
          style={{ height, width: '100%' }}
          transition={transition}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </Wrapper>
  );
}
