import styled, { css } from 'styled-components';

type PropsType = {
  borderColor?: string;
  disabled?: boolean;
};

const BaseStyle = css<PropsType>`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  width: 7px;
  height: 7px;
  cursor: pointer;

  ${({ borderColor }) =>
    borderColor &&
    css`
      border-color: ${borderColor};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
    `}
`;

export const ArrowRight = styled.i<PropsType>`
  ${BaseStyle}
  transform: rotate(-45deg);
`;

export const ArrowLeft = styled.i<PropsType>`
  ${BaseStyle}
  transform: rotate(135deg);
`;

export const ArrowUp = styled.i<PropsType>`
  ${BaseStyle}
  transform: rotate(-135deg);
`;

export const ArrowDown = styled.i<PropsType>`
  ${BaseStyle}
  transform: rotate(45deg);
`;
