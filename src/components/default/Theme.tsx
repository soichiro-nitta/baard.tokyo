import * as React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Global } from '@emotion/core'
import * as Emotion from '~/utils/emotion'

const Theme: React.FC = props => (
  <ThemeProvider theme={Emotion.theme}>
    <Global styles={Emotion.globalStyles} />
    {props.children}
  </ThemeProvider>
)

export default Theme
