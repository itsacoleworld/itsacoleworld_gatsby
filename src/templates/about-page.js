import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Content, { HTMLContent } from '../components/Content'
import SEO from "../components/seo";

export const AboutPageTemplate = ({
  content,
  contentComponent,
  title,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      <div className="content">
        <div>
          <div>
            <h1 className="title">
              {title}
            </h1>
            <PostContent content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO title="About - itsacoleworld" />
      <AboutPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`