import React, {
  createContext,
  useRef,
  useMemo,
  useContext,
  useState,
} from 'react';
import { useAnimation, AnimationControls } from 'framer-motion';

export type ColorsType = { bgColor: string; textColor: string };
type CalendarType = 'selected_date' | 'date' | 'month' | 'year';
type TriggerAnimationType = {
  childEle: HTMLElement;
  mode: CalendarType;
  currMode: CalendarType;
};
type state = {
  colors: ColorsType;
  onHeaderClick: Function;
  title: string;
  mode: CalendarType;
  setMode: React.Dispatch<React.SetStateAction<CalendarType>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  triggerAnimation: ({ childEle, mode }: TriggerAnimationType) => void;
  animateBgColor: AnimationControls;
  refEleParent: { current: HTMLDivElement };
  prevColors: ColorsType | null;
};

type PropsType = {
  children: React.ReactChild;
};

type ColorDataType = Record<CalendarType, ColorsType>;

const context = createContext<state | undefined>(undefined);
const COLOR_DATA: ColorDataType = {
  date: { textColor: '#000', bgColor: '#fff' },
  month: { textColor: '#fff', bgColor: '#2196f3' },
  year: { textColor: '#fff', bgColor: '#39373A' },
  selected_date: { textColor: '#000', bgColor: '#fff' },
};

export function Provider({ children }: PropsType) {
  const [title, setTitle] = useState('');
  const [mode, setMode] = useState<CalendarType>('month');
  const [prevColors, setPrevColors] = useState<ColorsType | null>(null);
  const animateBgColor = useAnimation();
  const refEleParent = useRef<HTMLDivElement>(null!);
  const colors = useMemo(() => {
    const { bgColor, textColor } = COLOR_DATA[mode];

    return { bgColor, textColor } as const;
  }, [mode]);

  function onHeaderClick() {
    if (mode === 'date') setMode('month');
  }

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
        velocity: 50000,
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
        prevColors,
        refEleParent,
        animateBgColor,
        title,
        onHeaderClick,
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
