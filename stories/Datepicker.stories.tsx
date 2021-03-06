import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { Datepicker } from '../src';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Sniglet&display=swap');

  body {
    font-family: 'Sniglet', cursive;
    background-color: #fe4646;
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
`;

export default {
  title: 'Datepicker',
};

export const Preview = () => (
  <>
    <GlobalStyle />
    <Datepicker onChange={newDate => console.log(newDate)} />
  </>
);
