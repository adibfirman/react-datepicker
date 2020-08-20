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

export const COLOR_DATA: Types.ColorDataType = {
  date: { textColor: '#000', bgColor: '#fff' },
  month: { textColor: '#fff', bgColor: '#2196f3' },
  year: { textColor: '#fff', bgColor: '#39373A' },
  selected_date: { textColor: '#000', bgColor: '#fff' },
};

export function Provider({ children, ...props }: Types.PropsType) {
  const [title, setTitle] = useState('');
  const [mode, setMode] = useState<Types.CalendarType>('year');
  const prevMode = usePrevious(mode);
  const [prevColors, setPrevColors] = useState<Types.ColorsType | null>(null);
  const animateBgColor = useAnimation();
  const refEleParent = useRef<HTMLDivElement>(null!);
  const colors = useMemo(() => {
    const { bgColor, textColor } = COLOR_DATA[mode];

    return { bgColor, textColor } as const;
  }, [mode]);

  const [currentDate, setCurrentDate] = useState<Types.DateType>(() => {
    const getDate = props.value?.currentDate ?? new Date();
    return {
      year: getDate.getFullYear(),
      month: getDate.getMonth(),
      date: getDate.getDate(),
    };
  });

  const currentDateObj = useMemo(() => {
    const dateValues = Object.values(currentDate).filter(date => !isNaN(date));
    return new Date(...(dateValues as [number, number, number]));
  }, [currentDate]);

  function setDate(newDate: Partial<Types.DateType>) {
    setCurrentDate(prevDate => ({ ...prevDate, ...newDate }));
  }

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
        currentDateObj,
        setDate,
        currentDate,
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

export { Types };
