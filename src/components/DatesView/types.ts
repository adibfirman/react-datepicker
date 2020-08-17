import { Types } from '../useGlobalData';

export interface IPropsDate {
  day: number; // day in month
  date: number; // selected day in month
  setMode: Types.SetModeType;
  setDate: Types.SetDateType;
}
