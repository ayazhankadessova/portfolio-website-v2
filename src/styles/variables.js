import { css } from 'styled-components';

const variables = css`
  :root {
    --dark-navy: #0a192f;
    --navy: #ece5c7;
    --light-navy: #f0eae7;
    --lightest-navy: #f7f3f1;
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --dark-slate: #495670;
    --slate: #8e8d8a;
    --light-slate: #72716e;
    --lightest-slate: #474745;
    --white: #e6f1ff;
    --green: #e86422;
    --green-tint-dark: #e55807;
    --green-tint: #f6bdb9;

    --font-sans: 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 15px;
    --fz-xs: 16px;
    --fz-sm: 18px;
    --fz-md: 20px;
    --fz-lg: 21px;
    --fz-xl: 23px;
    --fz-xxl: 25px;
    --fz-heading: 34px;

    --border-radius: 8px;
    --nav-height: 100px;
    --nav-scroll-height: 80px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
