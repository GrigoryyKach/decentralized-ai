import { Button } from '@mui/material'

const CustomButton = ({ title, fontSize, px, py }) => {
  return (
    <Button
      sx={{
        px: px || 3,
        py: py || 1,
        fontWeight: 500,
        fontSize: fontSize || '18px',
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
      {title}
    </Button>
  )
}

export default CustomButton