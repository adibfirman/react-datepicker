import { AnimationControls } from 'framer-motion';

export type ColorsType = { bgColor: string; textColor: string };

export type CalendarType = 'selected_date' | 'date' | 'month' | 'year';

export type TriggerAnimationType = {
  childEle: HTMLElement;
  mode: CalendarType;
  currMode: CalendarType;
};

export interface IValueComponent {
  currentDate?: Date;
}

export type StateType = {
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

export type PropsType = {
  children: React.ReactChild;
  value: IValueComponent;
};

export type ColorDataType = Record<CalendarType, ColorsType>;
