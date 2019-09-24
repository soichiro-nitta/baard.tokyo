import * as React from 'react'
import { graphql, Link } from 'gatsby'
import styled from '~/utils/emotion'
import Layout from '~/layouts/default'
import Seo from '~/components/base/Seo'

type Props = {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          frontmatter: {
            title: string
            date: string
            path: string
          }
        }
      }[]
    }
  }
}

const Works: React.FC<Props> = props => {
  return (
    <Layout>
      <Seo title="Works" />
      <P1>最新の作品を追加していきます。</P1>
      <ul>
        {props.data.allMarkdownRemark.edges.map(({ node }, index) => {
          return (
            <Work key={index}>
              <Link to={node.frontmatter.path}>
                {node.frontmatter.title}
                <br />
                {node.frontmatter.date}
                <br />
                {node.frontmatter.path}
              </Link>
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
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
  margin-top: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    2}px;
  padding-top: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    2}px;
  padding-left: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    2}px;
  width: 100%;
  border-top: 1px solid #e5e5e5;
  ${(props): string => props.theme.mixins.lhCrop(2)}
`

export default Works

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { category: { eq: "works" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            path
          }
        }
      }
    }
  }
`
