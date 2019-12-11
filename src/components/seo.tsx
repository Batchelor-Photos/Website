/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FC } from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface SEOProps {
  lang?: string
  meta?:
    | []
    | {
        name: string
        content: string
      }[]
  description?: string
  title: string
}

interface PureSEOProps extends SEOProps {
  data?: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: string
      }
    }
  }
}

export const SEO: FC<SEOProps> = props => {
  const data = useStaticQuery(graphql`
    query SEOData {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return <PureSEO {...props} data={data} />
}

export const PureSEO: FC<PureSEOProps> = ({ description, lang, meta, title, data: { site } }) => {
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

const defaultProps: SEOProps = {
  title: ``,
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.defaultProps = defaultProps
PureSEO.defaultProps = defaultProps

export default SEO
