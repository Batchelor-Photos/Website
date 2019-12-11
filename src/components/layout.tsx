/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FC, ReactNode } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import { ThemeProvider } from '@material-ui/core/styles'

import { login, isAuthenticated } from '../utils/auth'
import gatsbyTheme from '../mui-themes/gatsbyTheme'
import Header from './header'
import './layout.css'

interface LayoutProps {
  children: ReactNode
  requireAuth?: boolean
}

interface PureLayoutProps {
  children: ReactNode
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export const Layout: FC<LayoutProps> = ({ requireAuth = true, ...props }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  if (requireAuth && !isAuthenticated()) {
    login({ redirectUrl: window.location.pathname })
    return null
  }

  return <PureLayout data={data} {...props} />
}

export const PureLayout: FC<PureLayoutProps> = ({ children, data }) => {
  return (
    <ThemeProvider theme={gatsbyTheme}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          <Typography variant="body1">
            © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Typography>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default Layout
