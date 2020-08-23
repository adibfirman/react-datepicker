# React Datepicker Component

An awesome Datepicker for your React APP, built in with [Framer-motion](https://www.framer.com/api/motion/)

<p align="center">
  <img src='https://raw.githubusercontent.com/adibfirman/react-datepicker/master/docs/example.gif' />
</p>

## Install `peerdepedencies`

```bash
$ npm i --save styled-components
# or
$ yarn add styled-components
```

## Installation

```bash
$ npm i --save @adibfirman/react-datepicker
# or
$ yarn add @adibfirman/react-datepicker
```

## Available Props

- `value`
  - A date object, default value is `today`
- `onChange(date) => void`
  - Function where the callback is selected date
- `customColor` an object which the value is one of these
  - `selected_date`: `{ bgColor: string; textColor: string };`
    - Default value is: `{ textColor: '#000', bgColor: '#fff' }`
  - `date`: `{ bgColor: string; textColor: string };`
    - Default value is: `{ textColor: '#000', bgColor: '#fff' }`
  - `month`: `{ bgColor: string; textColor: string };`
    - Default value is: `{ textColor: '#fff', bgColor: '#2196f3' }`
  - `year`: `{ bgColor: string; textColor: string };`
    - Default value is: `{ textColor: '#fff', bgColor: '#39373A' }`

## Usage

```jsx
import React from 'react';
import { Datepicker } from '@adibfirman/datepicker';

function MyApp() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Datepicker />
    </div>
  );
}
```

## Contribute & Help

- Fork and send Pull Requests are welcome
- Submit an issues
- A new feature requests

## License

This library is [MIT licensed](https://github.com/adibfirman/react-datepicker/blob/master/LICENSE)
