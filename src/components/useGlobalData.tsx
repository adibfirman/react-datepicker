import React, {
  createContext,
  useRef,
  useMemo,
  useContext,
  useState,
} from 'react';
import { useAnimation, AnimationControls } from 'framer-motion';

type CalendarType = 'selected_date' | 'date' | 'month' | 'year';
export type ColorsType = { bgColor: string; textColor: string };
type state = {
  colors: ColorsType;
  onHeaderClick: Function;
  title: string;
  mode: CalendarType;
  setMode: React.Dispatch<React.SetStateAction<CalendarType>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  triggerAnimation: (childEle: HTMLElement) => void;
  animateBgColor: AnimationControls;
  refEleParent: { current: HTMLDivElement };
};

type PropsType = {
  children: React.ReactChild;
};

const context = createContext<state | undefined>(undefined);

export function Provider({ children }: PropsType) {
  const [title, setTitle] = useState('');
  const [mode, setMode] = useState<CalendarType>('month');
  const animateBgColor = useAnimation();
  const refEleParent = useRef<HTMLDivElement>(null!);
  const colors = useMemo(() => {
    let bgColor: string = '#fff';
    let textColor: string = '#000';

    if (mode === 'month') {
      bgColor = '#2196f3';
      textColor = '#fff';
    } else if (mode === 'year') {
      bgColor = '#39373A';
      textColor = '#fff';
    }

    return { bgColor, textColor } as const;
  }, [mode]);

  function onHeaderClick() {
    if (mode === 'date') setMode('month');
  }

  function triggerAnimation(childEle: HTMLElement) {
    const parentEle = refEleParent.current;
    const parentBoundRect = parentEle?.getBoundingClientRect();
    const childBoundRect = childEle.getBoundingClientRect();

    const top = childBoundRect.top - (parentBoundRect?.top ?? 0);
    const left = childBoundRect.left - (parentBoundRect?.left ?? 0);

    console.log(top, left);
  }

  return (
    <context.Provider
      value={{
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
