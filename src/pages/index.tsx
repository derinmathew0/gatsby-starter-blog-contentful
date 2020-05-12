// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const Post= styled.div`
display:flex;
`
const PostImage= styled.div`
flex:25%;
margin-right:1rem;
`

const PostText= styled.div`
flex:75%;

`

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  
}

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allContentfulPost.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.title || node.slug
        return (
          <Post key={node.slug}>
            <PostImage>
              <Img fluid={node.image.fluid}/>
            </PostImage>
            <PostText>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),marginTop: 0
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.slug}>
                  {title}
                </Link>
              </h3>
              
            </header>
            </PostText>
            
            <section>
              <p
                
              >{node.subtitle}</p>
            </section>
          </Post>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost{
      edges{
        node{
          title
          subtitle
          image{
            fluid{
              ...GatsbyContentfulFluid
            }
          }
          author
          slug
        }
      }
    }
  }
`
