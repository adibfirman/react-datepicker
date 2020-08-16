import { Types } from '../useGlobalData';

export const ANIMATED_EACH_OF_MONTH = {
  whileHover: ({ colors }: { colors: Types.ColorsType }) => ({
    backgroundColor: colors.bgColor,
    color: colors.textColor,
  }),
};

export const LIST_MONTH = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];
