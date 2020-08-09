import React, {
  createContext,
  useRef,
  useMemo,
  useContext,
  useState,
} from 'react';
import { useAnimation, AnimationControls } from 'framer-motion';
import { usePrevious } from '../utils';

export type ColorsType = { bgColor: string; textColor: string };
type CalendarType = 'selected_date' | 'date' | 'month' | 'year';
type TriggerAnimationType = {
  childEle: HTMLElement;
  mode: CalendarType;
  currMode: CalendarType;
};

export interface IValueComponent {
  currentDate?: Date;
}

type StateType = {
  colors: ColorsType;
  title: string;
  mode: CalendarType;
  setMode: React.Dispatch<React.SetStateAction<CalendarType>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  triggerAnimation: ({ childEle, mode }: TriggerAnimationType) => void;
  animateBgColor: AnimationControls;
  refEleParent: { current: HTMLDivElement };
  prevColors: ColorsType | null;
  prevMode: CalendarType | undefined;
  currentDate: { date: number; month: number; year: number; objDate: Date };
};

type PropsType = {
  children: React.ReactChild;
  value: IValueComponent;
};

type ColorDataType = Record<CalendarType, ColorsType>;

const context = createContext<StateType | undefined>(undefined);
export const COLOR_DATA: ColorDataType = {
  date: { textColor: '#000', bgColor: '#fff' },
  month: { textColor: '#fff', bgColor: '#2196f3' },
  year: { textColor: '#fff', bgColor: '#39373A' },
  selected_date: { textColor: '#000', bgColor: '#fff' },
};

export function Provider({ children, ...props }: PropsType) {
  const [title, setTitle] = useState('');
  const [mode, setMode] = useState<CalendarType>('selected_date');
  const prevMode = usePrevious(mode);
  const [prevColors, setPrevColors] = useState<ColorsType | null>(null);
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
  }: TriggerAnimationType) {
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
