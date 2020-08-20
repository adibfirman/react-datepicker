import React from 'react';

export interface IProps {
  text: string | React.ReactNode;
  hideNavigation?: boolean;
  onTitleClick?: (args: React.MouseEvent<HTMLDivElement>) => void;
  hideArrowInText?: boolean;
  onRightClick?: () => void;
  onLeftClick?: () => void;
}
