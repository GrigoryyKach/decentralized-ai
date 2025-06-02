'use client';

import { Box, Button, Typography } from '@mui/material';

export default function HeroSection() {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: '#000',
        overflow: 'hidden',
        color: '#fff',
        backgroundImage: `
      url('/planet.png'),
      url('/comet.png')
    `,
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundPosition: 'top right, bottom left',
        backgroundSize: {
          xs: '600px, 250px',
          md: '900px, 400px'
        },
      }}
    >

      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          px: { xs: 4, md: 12 },
          zIndex: 5,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            background: 'linear-gradient(90deg, #B53EA4, #FC6F32, #FF4A59)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 4,
            fontSize: { md: '128px' },
            fontFamily: 'ClashGrotesk-medium, sans-serif'
          }}
        >
          A new economic primitive for funding decentralized AI
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: '#ccc',
            mb: 4,
            fontSize: '24px'
          }}
        >
          We track, rank and pay for the best open source decentralized LLMs to compete against OpenAI
        </Typography>

        <Button
          sx={{
            px: 5,
            py: 2,
            mb: '100px',
            fontWeight: 500,
            fontSize: '24px',
            color: '#fff',
            zIndex: 1,
            textTransform: 'none',
            borderRadius: '9999px',
            backgroundColor: 'transparent',
            overflow: 'hidden',
            transition: 'all 0.3s',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              padding: '2px',
              borderRadius: '9999px',
              background: 'linear-gradient(90deg, #963488, #FC6F32, #FF4A59)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              zIndex: -1,
            },
            '&:hover': {
              background: 'linear-gradient(90deg, #963488, #FC6F32, #FF4A59)',
              color: '#000',
            },
          }}
        >
          Buy Spice AI
        </Button>
      </Box>
    </Box>
  );
}
