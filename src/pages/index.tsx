import * as React from 'react'
import { graphql, Link } from 'gatsby'
import styled from '~/utils/emotion'
import Layout from '~/layouts/default'
import Seo from '~/components/base/Seo'
import Twitter from '~/components/index/Twitter'

type Props = {
  data: {
    works: {
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
    tweets: {
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

const Index: React.FC<Props> = props => {
  console.log(props)
  const video = React.useRef(null)
  React.useEffect(() => {
    video.current.load()
    video.current.play()
  })
  return (
    <Layout>
      <Seo title="Home" />
      <P1>
        UI Designer & Software Engineer
        新田聡一郎の活動報告をしているサイトです。
      </P1>
      <TwitterWrapper>
        <Twitter />
      </TwitterWrapper>
      <VideoWrapper>
        <video
          ref={video}
          src="video.mp4"
          preload="none"
          muted
          playsInline
          loop
        />
      </VideoWrapper>
      <P2>
        <b>新田聡一郎（Soichiro Nitta）</b>
        <br />
        1994年生まれ・男。埼玉県在住・埼玉県出身。ウェブサイト、アプリケーション制作等。
        「Nitta.Studio」は新田聡一郎が活動報告のために個人的に制作、管理しているホームページです。
      </P2>
      <ul>
        {props.data.works.edges.map(({ node }, index) => {
          return (
            <Work key={index}>
              <Link to={`/${node.frontmatter.path}`}>
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
      <ul>
        {props.data.tweets.edges.map(({ node }, index) => {
          return (
            <Work key={index}>
              <Link to={`/${node.frontmatter.path}`}>
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
const TwitterWrapper = styled.div`
  margin-top: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    3}px;
  margin-left: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    2}px;
`
const VideoWrapper = styled.div`
  margin-top: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    2}px;
  padding: ${(props): number =>
      (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
      2}px
    0;
  padding-right: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    2}px;
  width: 100%;
  height: 210px;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  overflow: hidden;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* opacity: 0; */
  }
`
const P2 = styled(P1)`
  margin-top: ${(props): number =>
    (props.theme.sizes.phone.dashboard - props.theme.sizes.phone.scrollbar) /
    2}px;
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
  width: calc(
    100% + ${(props): number => props.theme.sizes.phone.dashboard - 18}px
  );
  border-top: 1px solid #e5e5e5;
  ${(props): string => props.theme.mixins.lhCrop(2)}
`

export default Index

export const pageQuery = graphql`
  {
    works: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { category: { eq: "works" } } }
      limit: 2
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
    tweets: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { category: { eq: "tweets" } } }
      limit: 2
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
