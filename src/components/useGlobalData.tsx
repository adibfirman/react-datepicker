import React, { createContext, useContext, useState } from 'react';

type calenderType = 'date' | 'month' | 'year';
type state = {
  title: string;
  mode: calenderType;
  setMode: React.Dispatch<React.SetStateAction<calenderType>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
};

const context = createContext<state | undefined>(undefined);

export function Provider({ children }: { children: React.ReactChild }) {
  const [title, setTitle] = useState('');
  const [mode, setMode] = useState<calenderType>('date');

  return (
    <context.Provider value={{ title, mode, setMode, setTitle }}>
      {children}
    </context.Provider>
  );
}

export function useData() {
  const getData = useContext(context);

  if (!getData) throw new Error('cannot using store on this component');

  return getData;
}
