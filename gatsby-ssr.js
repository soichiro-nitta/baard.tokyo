/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import * as React from 'react'
import Layout from '~/layouts/default'

const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}

export { wrapPageElement }
