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
    x: 0,
    position: 'unset',
    opacity: 1,
  },
  exit: (isMoveToLeft: boolean) => ({
    x: isMoveToLeft ? 1000 : -1000,
    position: 'absolute',
    opacity: 0,
  }),
};

const transition = {
  x: { type: 'spring', stiffness: 99, damping: 200 },
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
          initial="enter"
          animate="center"
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
