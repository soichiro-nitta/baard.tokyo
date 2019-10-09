import * as React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Global } from '@emotion/core'
import * as emotion from '~/utils/emotion'

const Theme: React.FC = props => (
  <ThemeProvider theme={emotion.theme}>
    <Global styles={emotion.globalStyles} />
    {props.children}
  </ThemeProvider>
)

export default Theme
