import React, { createContext, useMemo, useContext, useState } from 'react';

type calenderType = 'selected_date' | 'date' | 'month' | 'year';
type state = {
  colors: { bgColor: string; textColor: string };
  onHeaderClick: Function;
  title: string;
  mode: calenderType;
  setMode: React.Dispatch<React.SetStateAction<calenderType>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
};

const context = createContext<state | undefined>(undefined);

export function Provider({ children }: { children: React.ReactChild }) {
  const [title, setTitle] = useState('');
  const [mode, setMode] = useState<calenderType>('selected_date');
  const colors = useMemo(() => {
    let bgColor: string = '#fff';
    let textColor: string = '#000';

    if (mode === 'month') {
      bgColor = '#2196f3';
      textColor = '#fff';
    } else if (mode === 'year') {
      (bgColor = '#39373A'), (textColor = '#fff');
    }

    return { bgColor, textColor } as const;
  }, [mode]);

  function onHeaderClick() {
    if (mode === 'date') setMode('month');
  }

  return (
    <context.Provider
      value={{ title, onHeaderClick, mode, setMode, setTitle, colors }}
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
