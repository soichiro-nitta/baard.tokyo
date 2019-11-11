/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import * as React from 'react'
import { Provider } from '~/store'
import Layout from '~/layouts/default'

const wrapPageElement = ({ element }) => {
  return (
    <Provider>
      <Layout>{element}</Layout>
    </Provider>
  )
}

export { wrapPageElement }
