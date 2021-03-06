import { AnimationControls } from 'framer-motion';

export type ColorsType = { bgColor: string; textColor: string };

type ColorCalendarType = {
  selected_date: ColorsType;
  date: ColorsType;
  month: ColorsType;
  year: ColorsType;
};

export type CalendarType = keyof ColorCalendarType;

export type TriggerAnimationType = {
  childEle: HTMLElement;
  mode: CalendarType;
  currMode: CalendarType;
};

export type OnChangeType = (date: Date) => Date | void;

export interface IValueComponent {
  value?: Date;
  onChange?: OnChangeType;
  customColor?: Partial<ColorCalendarType>;
}

export type SetModeType = React.Dispatch<React.SetStateAction<CalendarType>>;

export type DateType = {
  date: number;
  month: number;
  year: number;
};

export type SetDateType = (SetDateType: Partial<DateType>) => void;

export interface StateType extends IValueComponent {
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
  setDate: SetDateType;
  currentDateObj: Date;
  colorsData: Partial<ColorCalendarType>;
}

export type PropsType = {
  children: React.ReactChild;
  value: IValueComponent;
};

export type ColorDataType = Record<CalendarType, ColorsType>;
