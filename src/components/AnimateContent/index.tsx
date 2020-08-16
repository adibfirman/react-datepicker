import React from 'react';
import { motion } from 'framer-motion';

import { Types, useData } from '../useGlobalData';

interface IProps {
  selectedPrevMode?: Types.CalendarType;
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
}: React.PropsWithChildren<IProps>) {
  const { prevMode } = useData();

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0, height: '100%' }}
      transition={prevMode === selectedPrevMode ? TRANSITION_ANIMATION : {}}
    >
      {children}
    </motion.div>
  );
}
