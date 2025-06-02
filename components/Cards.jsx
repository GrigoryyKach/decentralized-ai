'use client';

import { Box, Typography } from '@mui/material';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '10,873', label: 'LLM models' },
  { value: '$72,470,728', label: 'paid to data scientists' },
  { value: '6,557', label: 'members' },
];

const Cards = () => {
  const statsRef = useRef([]);

  useEffect(() => {
    if (statsRef.current.length !== stats.length || statsRef.current.some(el => el === null)) return;

    gsap.fromTo(
      statsRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: statsRef.current[0],
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, [statsRef.current]);

  return (
    <Box
      sx={{
        position: 'relative',
        top: '-200px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '33px',
        justifyContent: 'center',
        mt: { xs: 4, md: 7 },
        zIndex: 50,
      }}
    >
      {stats.map((stat, i) => (
        <Box
          key={i}
          ref={(el) => (statsRef.current[i] = el)}
          sx={{
            width: '564px',
            height: '192px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
            transform: 'translateY(60px)',
            p: 3,
            borderRadius: 30,
            background: 'linear-gradient(90deg, rgba(150,52,136,0.2), rgba(252,111,50,0.2), rgba(255,74,89,0.2))',
            backdropFilter: 'blur(6px)',
            textAlign: 'center',
            transition: 'opacity 0.3s, transform 0.3s',
          }}
        >
          <Typography
            variant="h4"
            fontSize={'64px'}
            fontWeight="bold"
            sx={{ fontFamily: 'ClashGrotesk-medium, Inter, Arial, sans-serif' }}
          >
            {stat.value}
          </Typography>
          <Typography variant="body2" fontSize={'24px'} color="#fff">
            {stat.label}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}

export default Cards