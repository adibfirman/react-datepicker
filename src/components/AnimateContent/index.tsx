import React from 'react';
import { motion } from 'framer-motion';

import { Types, useData } from '../useGlobalData';

interface IProps extends React.HtmlHTMLAttributes<HTMLElement> {
  selectedPrevMode?: Types.CalendarType;
  withTransitionWhen?: boolean;
}

const VARIANTS = {
  animate: ({ withDelayTransition }: { withDelayTransition: boolean }) => ({
    opacity: 1,
    transition: {
      delay: withDelayTransition ? 0.29 : 0,
    },
  }),
  initial: {
    opacity: 0,
    height: '100%',
  },
};

export function AnimateContent({
  children,
  selectedPrevMode,
  withTransitionWhen = false,
  onClick,
}: React.PropsWithChildren<IProps>) {
  const { prevMode } = useData();
  const withDelayTransition =
    withTransitionWhen || prevMode === selectedPrevMode;

  return (
    <motion.div
      animate="animate"
      initial="initial"
      variants={VARIANTS}
      custom={{ withDelayTransition }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
