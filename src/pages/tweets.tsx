import * as React from 'react'
import { graphql } from 'gatsby'
import styled from '~/utils/emotion'
import Layout from '~/layouts/default'
import Seo from '~/components/base/Seo'

type Props = {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          frontmatter: {
            date: string
          }
          html: string
        }
      }[]
    }
  }
}

const Tweets: React.FC<Props> = props => {
  return (
    <Layout>
      <Seo title="Tweets" />
      <P1>
        普段考えていること・技術・デザインについて、ひっそりとこちらで呟いています。
      </P1>
      <ul>
        {props.data.allMarkdownRemark.edges.map(({ node }, index) => {
          return (
            <Work key={index}>
              {node.frontmatter.date}
              <br />
              <div dangerouslySetInnerHTML={{ __html: node.html }} />
            </Work>
          )
        })}
      </ul>
    </Layout>
  )
}

const P1 = styled.p`
  padding: 0
    ${(props): number =>
      (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
      2}px;
  ${(props): string => props.theme.mixins.lhCrop(2)}
`
const Work = styled.li`
  margin-top: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    2}px;
  padding: ${(props): number =>
      (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
      2}px
    ${(props): number =>
      (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
      2}px
    0;
  width: 100%;
  ${(props): string => props.theme.mixins.lhCrop(2)}
  word-wrap: break-word;
  border-top: 1px solid #e5e5e5;
  a {
    text-decoration: underline;
  }
`

export default Tweets

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { category: { eq: "tweets" } } }
    ) {
      edges {
        node {
          frontmatter {
            date
          }
          html
        }
      }
    }
  }
`
