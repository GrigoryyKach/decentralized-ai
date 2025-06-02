import { Box, Button } from '@mui/material'

const Navbar = () => {
  return (
    <Box
        sx={{
          zIndex: 10,
          mb: '100px',
          mt: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <Button variant="body1" sx={{ fontSize: '18px', textTransform: 'none', }}>
          LLM Leaderboard
        </Button>
        <Button
          sx={{
            px: 3,
            py: 1,
            fontWeight: 500,
            fontSize: '18px',
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
  )
}

export default Navbar