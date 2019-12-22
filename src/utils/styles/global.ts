import { css } from '@emotion/core'
import mixins from '~/utils/styles/mixins'
import colors from '~/utils/styles/colors'

const globalStyles = css`
  *,
  :after,
  :before {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-text-size-adjust: none;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
  }
  ::selection {
    background: rgba(0, 0, 0, 0.7) /* Safari */;
    color: #fff;
  }
  ::-moz-selection {
    background: rgba(0, 0, 0, 0.7) /* Firefox */;
    color: #fff;
  }
  html {
    position: relative;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: 65%;
  }
  body {
    --brand: ${colors.base.brand};
    --onPicture: ${colors.base.onPicture};
    --onPictureShape: ${colors.base.onPictureShape};
    --background: ${colors.light.background};
    --border: ${colors.light.border};
    --neutral: ${colors.light.neutral};
    --clearly: ${colors.light.clearly};
    --text: ${colors.light.text};
    &.dark {
      --background: ${colors.dark.background};
      --border: ${colors.dark.border};
      --neutral: ${colors.dark.neutral};
      --clearly: ${colors.dark.clearly};
      --text: ${colors.dark.text};
    }
    position: relative;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    color: var(--clearly);
    font-weight: 500;
    background: var(--background);
    letter-spacing: 0px;
    font-family: 'Fira Sans', 'Noto Sans JP', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    z-index: 0;
    ${mixins.transitionBackground}
  }
  #___gatsby,
  #gatsby-focus-wrapper {
    width: 100%;
    height: 100%;
  }
  h1,
  h2,
  h3 {
    margin: 0;
  }
  p {
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  img {
    border: 0px;
    vertical-align: middle;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  input,
  button,
  select,
  textarea {
    font-family: inherit;
  }
  input[type='text'],
  input[type='email'],
  input[type='password'],
  textarea,
  select {
    border: none;
    border-radius: 0;
    -webkit-appearance: none;
    appearance: none;
    outline: none;
    background: transparent;
  }
  select::-ms-expand {
    /* IEでselectの矢印を消す */
    display: none;
  }
  button {
    border: none;
    background: none;
  }
  .tbc {
    display: table-cell;
    vertical-align: middle;
  }
  .r {
    position: relative;
    width: 100%;
    height: 100%;
  }
`

export default globalStyles
