import React, {
  createContext,
  useRef,
  useMemo,
  useContext,
  useState,
} from 'react';
import { useAnimation } from 'framer-motion';
import { usePrevious } from '../../utils';
import * as Types from './types';

const context = createContext<Types.StateType | undefined>(undefined);

export { Types };
export const COLOR_DATA: Types.ColorDataType = {
  date: { textColor: '#000', bgColor: '#fff' },
  month: { textColor: '#fff', bgColor: '#2196f3' },
  year: { textColor: '#fff', bgColor: '#39373A' },
  selected_date: { textColor: '#000', bgColor: '#fff' },
};

export function Provider({ children, ...props }: Types.PropsType) {
  const [title, setTitle] = useState('');
  const [mode, setMode] = useState<Types.CalendarType>('selected_date');
  const prevMode = usePrevious(mode);
  const [prevColors, setPrevColors] = useState<Types.ColorsType | null>(null);
  const animateBgColor = useAnimation();
  const refEleParent = useRef<HTMLDivElement>(null!);
  const colors = useMemo(() => {
    const { bgColor, textColor } = COLOR_DATA[mode];

    return { bgColor, textColor } as const;
  }, [mode]);

  // this memoize will be generated like { date: 01, month: 12, year: 2020 }
  const spreadTheDate = useMemo(() => {
    const getDate = props.value?.currentDate ?? new Date();
    const data = {
      date: getDate.getDate(),
      month: getDate.getMonth() + 1,
      year: getDate.getFullYear(),
      objDate: getDate,
    };

    return data;
  }, [props.value.currentDate]);

  async function triggerAnimation({
    childEle,
    mode,
    currMode,
  }: Types.TriggerAnimationType) {
    const parentEle = refEleParent.current;
    const parentBoundRect = parentEle?.getBoundingClientRect();
    const childBoundRect = childEle.getBoundingClientRect();

    const top = childBoundRect.top - (parentBoundRect?.top ?? 0);
    const left = childBoundRect.left - (parentBoundRect?.left ?? 0);

    const { bgColor } = COLOR_DATA[mode];

    setPrevColors(COLOR_DATA[currMode]);

    await animateBgColor.start({
      x: left + 25,
      y: top + 10,
      transition: {
        stiffness: 0,
      },
    });

    await animateBgColor.start({
      backgroundColor: bgColor,
      scale: 70,
      transition: {
        type: 'spring',
        stiffness: 50,
        restSpeed: 2,
        restDelta: 5,
      },
    });

    setPrevColors(null);

    await animateBgColor.start({
      backgroundColor: 'rgba(255, 255, 255, 0)',
      transition: {
        type: 'spring',
        stiffness: 100,
        restSpeed: 2,
        restDelta: 5,
      },
    });

    animateBgColor.start({
      width: 10,
      height: 10,
      scale: 0,
    });
  }

  return (
    <context.Provider
      value={{
        currentDate: spreadTheDate,
        prevMode,
        prevColors,
        refEleParent,
        animateBgColor,
        title,
        mode,
        setMode,
        setTitle,
        colors,
        triggerAnimation,
      }}
    >
      {children}
    </context.Provider>
  );
}

export function useData() {
  const getData = useContext(context);

  if (!getData) throw new Error('cannot using store on this component');

  return getData;
}
