import * as React from 'react'
import { graphql } from 'gatsby'
import styled from '~/utils/emotion'
import Layout from '~/layouts/default'
import Seo from '~/components/base/Seo'

type Props = {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        title: string
        date: string
      }
    }
  }
}

const BlogTemplate: React.FC<Props> = props => (
  <Layout>
    <Root>
      <Seo title={props.data.markdownRemark.frontmatter.title} />
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <div>date : {props.data.markdownRemark.frontmatter.date}</div>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      />
    </Root>
  </Layout>
)

const Root = styled.div`
  padding: 0
    ${(props): number =>
      (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
      2}px;
  word-wrap: break-word;
  ${(props): string => props.theme.mixins.lhCrop(2)}
  p {
    margin-top: ${(props): number =>
      (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
      2}px;
    ${(props): string => props.theme.mixins.lhCrop(2)}
  }
`

export default BlogTemplate

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        title
      }
    }
  }
`
