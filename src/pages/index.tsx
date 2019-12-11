import React, { FC } from 'react'
import { Link } from 'gatsby'
import { Typography } from '@material-ui/core'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage: FC = () => (
  <Layout requireAuth={false}>
    <SEO title="Home" />
    <Typography paragraph variant={'h4'} component={'h2'} style={{ fontWeight: 600 }}>
      Hi people
    </Typography>
    <Typography paragraph>Welcome to your new Gatsby site.</Typography>
    <Typography paragraph>Now go build something great.</Typography>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/protected-page">Go to protected page</Link>
  </Layout>
)

export default IndexPage
