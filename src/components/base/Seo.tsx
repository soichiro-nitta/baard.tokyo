/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import config from '~/utils/config'

type Props = {
  title: string
  description?: string
  lang?: string
  meta?: []
}

const SEO: React.FC<Props> = ({ title, lang = 'ja', meta = [] }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  const metaDescription = site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s / ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: `${title} / ${site.siteMetadata.title}`
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:image`,
          content: `${config.firebase}/ogp.png`
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: `${title} / ${site.siteMetadata.title}`
        },
        {
          name: `twitter:description`,
          content: metaDescription
        },
        {
          property: `twitter:image`,
          content: `${config.firebase}/ogp.png`
        }
      ].concat(meta)}
    />
  )
}

export default SEO
