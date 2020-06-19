import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: inherit;
}
html {
  box-sizing: border-box;
  background: #fff;
  color: #000;
  letter-spacing: 0.04em;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  font-family: Source Sans Pro, Hiragino Sans, sans-serif;
}
body {
  min-width: 320px;
  font-size: 16px;
}
body, h1, h2, h3, h4, h5, h6, p, blockquote, ul, ol, li, dl, dt, dd {
  margin: 0;
}
ul,ol {
  padding: 0;
  list-style: none;
}
a {
  color: inherit;
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
b,
strong {
  font-weight: bold;
}
img,
svg {
  vertical-align: top;
}
abbr {
  text-decoration: none;
}
/**
* 1. Change the font styles in all browsers.
* 2. Remove the margin in Firefox and Safari.
*/
button,
input,
optgroup,
select,
textarea {
  margin: 0; /* 2 */
  font-size: 100%; /* 1 */
  font-family: inherit; /* 1 */
  line-height: 1.15; /* 1 */
  -webkit-appearance: none;
  outline: none;
  background: #fff;
  border: none;
}
/**
* Show the overflow in IE.
* 1. Show the overflow in Edge.
*/
button,
input { /* 1 */
  overflow: visible;
}
/**
* Remove the inheritance of text transform in Edge and Firefox.
* 1. Remove the inheritance of text transform in Firefox.
*/
button,
select { /* 1 */
  text-transform: none;
}
/**
 * Correct the inability to style clickable types in iOS and Safari.
 */
button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}
/**
 * Remove the inner border and padding in Firefox.
 */
button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
  padding: 0;
  border-style: none;
}
/**
 * Restore the focus styles unset by the previous rule.
 */
button:-moz-focusring,
[type='button']:-moz-focusring,
[type='reset']:-moz-focusring,
[type='submit']:-moz-focusring {
  outline: 1px dotted ButtonText;
}
/**
 * Correct the padding in Firefox.
 */
fieldset {
  padding: 0.35em 0.75em 0.625em;
}
/**
 * Remove the padding so developers are not caught out when they zero out
 *    fieldset elements in all browsers.
 */
legend {
  padding: 0;
}
/**
 * Add the correct vertical alignment in Chrome and Firefox.
 */
progress {
  vertical-align: baseline;
}
/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
  height: auto;
}
/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */
[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}
/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}
/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to inherit in Safari.
 */
::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}
/**
* Set default *disabled* style
*/
:disabled,
[aria-disabled='true'] {
  cursor: default;
  pointer-events: none;
}
/**
 * Application layouts
 */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  padding-bottom: 80px;
}
`;
