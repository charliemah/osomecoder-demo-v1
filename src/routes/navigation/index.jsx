import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

import Container from '@mui/material/Container'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

import ToggleColorMode from '../../components/ToggleColorMode'

const title = 'Osomecoder Demo v1'

const sections = [
  { title: 'Home', url: '/', target: '_self' },
  { title: 'Contribute', url: 'https://github.com/osomecoder/rebuild-x-with-y-and-z', target: '_blank' },
  { title: 'Resources', url: 'https://github.com/osomecoder/resources', target: '_blank' },
]

function Navigation({ mode, toggleColorMode }) {

  return (
    <Container maxWidth='xl' disableGutters>
      <Fragment>
        <AppBar
          position='static'
          color='default'
          elevation={0}
        >
          <Toolbar sx={{ flexWrap: 'wrap' }}>
            <Typography variant='subtitle1' align='left' color='inherit' noWrap sx={{ flexGrow: 1, fontFamily: 'Helvetica', fontWeight: 'bold' }}>
              {title.toUpperCase()}
            </Typography>
            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
            <nav>
              {sections.map((section) => (
                <Link
                  color='inherit'
                  underline='none'
                  noWrap
                  key={section.title}
                  variant='body2'
                  href={section.url}
                  target='section.target'
                  sx={{ p: 1, fontFamily:'Helvetica', flexShrink: 0 }}
                >
                  {section.title}
                </Link>
              ))}
            </nav>
          </Toolbar>
        </AppBar>
        <Outlet />
      </Fragment>
    </Container>
  )
}

export default Navigation
