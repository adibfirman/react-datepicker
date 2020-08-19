export interface IProps {
  text: string;
  hideNavigation?: boolean;
  onTitleClick?: (args: React.MouseEvent<HTMLDivElement>) => void;
  hideArrowInText?: boolean;
  onRightClick?: () => void;
  onLeftClick?: () => void;
}
