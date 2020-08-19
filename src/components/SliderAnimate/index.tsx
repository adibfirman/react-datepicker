import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Wrapper } from './styles';
import * as Types from './types';

const variants = {
  enter: (isMoveToLeft: boolean) => ({
    x: isMoveToLeft ? -1000 : 1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (isMoveToLeft: boolean) => ({
    x: isMoveToLeft ? -1000 : 1000,
    zIndex: 0,
    opacity: 0,
  }),
};

const transition = {
  x: { type: 'spring', stiffness: 300, damping: 200 },
  opacity: { duration: 0.2 },
};

export function SliderAnimate({
  children,
  isMoveToLeft,
  customKey,
}: React.PropsWithChildren<Types.IProps>) {
  return (
    <Wrapper>
      <AnimatePresence initial={false}>
        <motion.div
          key={customKey}
          custom={isMoveToLeft}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{ height: '100%', position: 'absolute', width: '100%' }}
          transition={transition}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </Wrapper>
  );
}
