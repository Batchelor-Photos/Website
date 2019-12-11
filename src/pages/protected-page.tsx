import React, { FC } from 'react'
import { Link } from 'gatsby'
import { Typography } from '@material-ui/core'

import { logout } from '../utils/auth'
import useUserProfile from '../hooks/useUserProfile'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Admin: FC = () => {
  const user = useUserProfile()

  return (
    <Layout>
      <SEO title="Admin" />
      <Typography paragraph>Hello, {user.name}</Typography>
      <Link
        to="#logout"
        onClick={e => {
          logout()
          e.preventDefault()
        }}
      >
        Log Out
      </Link>
    </Layout>
  )
}

export default Admin
