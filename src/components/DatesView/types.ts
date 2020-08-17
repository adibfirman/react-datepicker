import { Types } from '../useGlobalData';

export interface IPropsDate {
  day: number; // day in month
  date: number; // selected day in month
  month: number;
  setMode: Types.SetModeType;
  setDate: Types.SetDateType;
}

export interface IUseListMonth {
  month: number;
  year: number;
}
