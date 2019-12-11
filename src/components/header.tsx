import { Link } from 'gatsby'
import React, { FC } from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { useTheme } from '@material-ui/core/styles'

interface HeaderProps {
  siteTitle: string
}

const Header: FC<HeaderProps> = ({ siteTitle }) => {
  const theme = useTheme()
  return (
    <header style={{ backgroundColor: theme.palette.primary.main, marginBottom: '1.45rem' }}>
      <Box
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem`,
        }}
      >
        <Typography variant="h4" component="h1" style={{ margin: '0 auto', fontWeight: 700 }}>
          <Link
            to="/"
            style={{
              color: theme.palette.primary.contrastText,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </Typography>
      </Box>
    </header>
  )
}

export default Header
