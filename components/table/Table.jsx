import { Box } from '@mui/material';
import TableRow from './TableRow';
import leaderboardData from './leaderboardData';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Table = () => {
  const rowsRef = useRef([]);

  useEffect(() => {
    if (
      rowsRef.current.length !== leaderboardData.length ||
      rowsRef.current.some((el) => el === null)
    )
      return;

    gsap.fromTo(
      rowsRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: rowsRef.current[0],
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [rowsRef.current]);

  return (
    <Box sx={{ width: '100%', borderRadius: 3, overflow: 'hidden', background: '#111', boxShadow: 2 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          minHeight: 56,
          background: '#000',
          color: "#8F99B0",
          fontWeight: 600,
          fontSize: 18,
          gap: '12px',
          px: 2,
        }}
      >
        <Box sx={{ width: 24 }} />
        <Box sx={{ width: 32, textAlign: 'left' }}>#</Box>
        <Box sx={{ width: 326, textAlign: 'left' }}>Model Name</Box>
        <Box sx={{ width: 151, textAlign: 'right' }}>Average</Box>
        <Box sx={{ width: 151, textAlign: 'right' }}>ARC</Box>
        <Box sx={{ width: 151, textAlign: 'right' }}>HellaSwag</Box>
        <Box sx={{ width: 151, textAlign: 'right' }}>MMLU</Box>
        <Box sx={{ width: 151, textAlign: 'right' }}>TruthfulQA</Box>
        <Box sx={{ width: 151, textAlign: 'right' }}>Winogrande</Box>
        <Box sx={{ width: 151, textAlign: 'right' }}>GSM8K</Box>
        <Box sx={{ width: 151, textAlign: 'right' }}>Earnings</Box>
      </Box>

      {leaderboardData.map((row, i) => (
        <div
          key={i}
          ref={el => rowsRef.current[i] = el}
          style={{ opacity: 0, transform: 'translateY(60px)' }}
        >
          <TableRow index={i} row={row} odd={i % 2 === 1} />
        </div>
      ))}
    </Box>
  );
};

export default Table;