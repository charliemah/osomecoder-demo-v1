import React from 'react'
import { alpha } from '@mui/material'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

const titles = [ 'Learn by', 'Rebuilding Apps', 'Grow with', 'Expert Mentors']

const subtitles = [
  'Join our community of',
  'experienced',
  'developers, tackling',
  'hands-on',
  'challenges with',
  'personalized',
  'mentorship.',
  'Advance your',
  'software product craftsmanship',
  'by',
  'rebuilding',
  'popular productivity apps like',
  'https://www.notion.so/',
  'Notion',
  'in public',
  '.'
]

function Home() {
  
  return (
    <Container
      disableGutters
      maxWidth={false}
    >
      {/* Hero Section */}
      <Box
        sx={(theme) => ({
          backgroundImage:
            theme.palette.mode === 'light'
              ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
              : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat'
        })}
      >
        <Container
          id='hero'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 9, sm: 15 },
            pb: { xs: 6, sm: 10 }
          }}
        >
          <Stack spacing={2} useFlexGap>
            <Stack spacing={2} useFlexGap sx={{
              pb: { xs: 6, sm: 10 }
            }}>
              <Typography
                variant='h1'
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignSelf: 'center',
                  textAlign: 'center',
                  color: 'text.primary',
                  fontFamily: 'Arial',
                  fontWeight: 'bold',
                  fontSize: 'clamp(2.5rem, 8vw, 3rem)'
                }}
              >
                {titles[0]}&nbsp;
                <Typography
                  component='span'
                  variant='h1'
                  sx={{
                    color: 'primary.main',
                    fontFamily: 'Arial',
                    fontWeight: 'bold',
                    fontSize: 'clamp(2.5rem, 8vw, 3rem)'
                  }}
                >
                  {titles[1]}
                </Typography>
              </Typography>
              <Typography
                variant='h1'
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignSelf: 'center',
                  textAlign: 'center',
                  color: 'text.primary',
                  fontFamily: 'Arial',
                  fontWeight: 'bold',
                  fontSize: 'clamp(3rem, 10vw, 3.5rem)'
                }}
              >
                {titles[2]}&nbsp;
                <Typography
                  component='span'
                  variant='h1'
                  sx={{
                    color: 'primary.main',
                    fontFamily: 'Arial',
                    fontWeight: 'bold',
                    fontSize: 'clamp(3rem, 10vw, 3.5rem)'
                  }}
                >
                  {titles[3]}
                </Typography>
              </Typography>
            </Stack>
            <Stack spacing={1} useFlexGap >                
              <Typography
                textAlign='center'
                color='text.secondary'
                sx={{ alignSelf: 'center', fontFamily: 'Helvetica', fontWeight: 'medium', fontSize: 'clamp(1rem, 5vw, 1.2rem)' }}
              >
                {subtitles[0]}&nbsp;
                <Box sx={{ fontWeight: 'bold' }} display='inline'>
                  {subtitles[1]}&nbsp;
                </Box>
                  {subtitles[2]}&nbsp;
                <Box sx={{ fontWeight: 'bold' }} display='inline'>
                  {subtitles[3]}&nbsp;
                </Box>
                  {subtitles[4]}&nbsp;
                <Box sx={{ fontWeight: 'bold' }} display='inline'>
                  {subtitles[5]}&nbsp;
                </Box>
                  {subtitles[6]}
              </Typography>
              <Typography
                textAlign='center'
                color='text.secondary'
                sx={{ alignSelf: 'center', fontFamily: 'Helvetica', fontWeight: 'medium', fontSize: 'clamp(1rem, 5vw, 1.2rem)' }}
              >
                  {subtitles[7]}&nbsp;             
                <Box color='primary.main' sx={{ fontWeight: 'bold' }} display='inline'>
                  {subtitles[8]}&nbsp;
                </Box>
                  {subtitles[9]}&nbsp;
                <Box color='primary.main' sx={{ fontWeight: 'bold' }} display='inline'>
                  {subtitles[10]}&nbsp;                 
                </Box>                  
                <Box sx={{ fontWeight: 'bold' }} display='inline'>
                  {subtitles[11]}&nbsp;
                  <Link color='inherit' href={subtitles[12]} target='_blank'>
                    {subtitles[13]}&nbsp;
                  </Link>                  
                </Box>
                <Box color='primary.main' sx={{ fontWeight: 'bold' }} display='inline'>
                  {subtitles[14]}
                </Box>                
                {subtitles[15]}
              </Typography>
            </Stack>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              alignSelf='center'
              spacing={1}
              useFlexGap
              sx={{ pt: 1, width: { xs: '100%', sm: 'auto' } }}
            >
              <TextField
                id='outlined-basic'
                hiddenLabel
                size='small'
                variant='outlined'
                aria-label='Enter your email address'
                placeholder='Your email address'
                slotProps={{
                  htmlInput: {
                    autocomplete: 'off',
                    ariaLabel: 'Enter your email address',
                  }
                }}
              />
              <Button variant='contained' color='primary'>
                Join Waitlist
              </Button>
            </Stack>
            <Typography variant='caption' textAlign='center' sx={{ opacity: 0.8 }}>
              By clicking &quot;Join Waitlist&quot; you agree to our&nbsp;
              <Link href='#' color='primary'>
                Terms & Conditions
              </Link>
              .
            </Typography>
          </Stack>
        </Container>
      </Box>     
    </Container>
  )
}

export default Home