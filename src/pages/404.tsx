import React, { FC } from 'react'
import { Typography } from '@material-ui/core'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage: FC = () => (
  <Layout requireAuth={false}>
    <SEO title="404: Not found" />
    <Typography variant="h1">NOT FOUND</Typography>
    <Typography paragraph>You just hit a route that doesn&#39;t exist... the sadness.</Typography>
  </Layout>
)

export default NotFoundPage
