import React from 'react';
import { motion } from 'framer-motion';

import { Types, useData } from '../useGlobalData';

interface IProps extends React.HtmlHTMLAttributes<HTMLElement> {
  selectedPrevMode?: Types.CalendarType;
  withTransitionWhen?: boolean;
}

const TRANSITION_ANIMATION = {
  delay: 0.38,
  type: 'spring',
  stiffness: 100,
  restDelta: 5,
  restSpeed: 2,
};

export function AnimateContent({
  children,
  selectedPrevMode,
  withTransitionWhen = false,
  onClick,
}: React.PropsWithChildren<IProps>) {
  const { prevMode } = useData();
  const usingTransition = withTransitionWhen || prevMode === selectedPrevMode;

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0, height: '100%' }}
      transition={usingTransition ? TRANSITION_ANIMATION : {}}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
