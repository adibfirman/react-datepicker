import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  height: 88%;
  display: grid;
  grid-template-rows: repeat(2, max-content) 1fr;
`;

const baseStyleGrid = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(42px, 1fr));
  justify-items: center;
  margin-top: 1em;
  margin-left: -20px;
  margin-right: -20px;
  align-items: center;
`;

export const BaseWeek = styled.div`
  ${baseStyleGrid}
  font-weight: 100;
  color: #2226;
  border-bottom: 1px solid #2226;
  padding-bottom: 5px;
  grid-template-rows: 25px;
`;

export const BaseMonth = styled.div`
  ${baseStyleGrid}
  margin-top: unset;

  span {
    width: 61%;
    height: 61%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &[data-isselected='true'] {
      background-color: #2196f3;
      color: #fff;
    }

    ~ .disabled {
      color: rgba(51, 51, 51, 0.5);
      cursor: not-allowed;
    }
  }
`;
