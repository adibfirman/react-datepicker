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

export type SetModeType = React.Dispatch<React.SetStateAction<CalendarType>>;

export type DateType = {
  date: number;
  month: number;
  year: number;
};

export type StateType = {
  colors: ColorsType;
  title: string;
  mode: CalendarType;
  setMode: SetModeType;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  triggerAnimation: ({ childEle, mode }: TriggerAnimationType) => void;
  animateBgColor: AnimationControls;
  refEleParent: { current: HTMLDivElement };
  prevColors: ColorsType | null;
  prevMode: CalendarType | undefined;
  currentDate: DateType;
  setDate: (SetDateType: Partial<DateType>) => void;
};

export type PropsType = {
  children: React.ReactChild;
  value: IValueComponent;
};

export type ColorDataType = Record<CalendarType, ColorsType>;
