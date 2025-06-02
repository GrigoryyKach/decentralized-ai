'use client';

import { Box, Button, Grid, Typography, Paper } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RemoveIcon from '@mui/icons-material/Remove';
import CustomButton from './ui/CustomButton';
import Table from './table/Table';

const leaderboardData = [
  { id: 1, name: 'Model_Name123', rankChange: 0, scores: Array(7).fill('81.22'), earnings: '2,945,044' },
  { id: 2, name: 'Model_Name123', rankChange: 2, scores: Array(7).fill('81.22'), earnings: '2,945,044' },
  { id: 3, name: 'Model_Name123', rankChange: -1, scores: Array(7).fill('81.22'), earnings: '2,945,044' },
  { id: 4, name: 'Model_Name123', rankChange: 0, scores: Array(7).fill('81.22'), earnings: '2,945,044' },
  { id: 5, name: 'Model_Name123', rankChange: 5, scores: Array(7).fill('81.22'), earnings: '2,945,044' },
  { id: 6, name: 'Model_Name123', rankChange: 6, scores: Array(7).fill('81.22'), earnings: '2,945,044' },
  { id: 7, name: 'Model_Name123', rankChange: -2, scores: Array(7).fill('81.22'), earnings: '2,945,044' },
  { id: 8, name: 'Model_Name123', rankChange: 0, scores: Array(7).fill('81.22'), earnings: '2,945,044' },
  { id: 9, name: 'Model_Name123', rankChange: -1, scores: Array(7).fill('81.22'), earnings: '2,945,044' },
  { id: 10, name: 'Model_Name123', rankChange: 0, scores: Array(7).fill('81.22'), earnings: '2,945,044' },
];

const getChangeIcon = (change) => {
  if (change > 0) return <ArrowDropUpIcon style={{ color: 'lime' }} />;
  if (change < 0) return <ArrowDropDownIcon style={{ color: 'red' }} />;
  return <RemoveIcon style={{ color: 'gray' }} />;
};

export default function LeaderboardSection() {
  return (
    <Box sx={{ color: '#fff', py: 10, px: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'ClashGrotesk-medium, sans-serif',
            fontSize: '48px'
          }}
        >
          LLM Leaderboard
        </Typography>
        <CustomButton
          title='Submit your model'
          fontSize={'20px'}
          px={6}
          py={2}
        />
      </Box>

      <Typography variant="body2" mb={4} fontSize={20}>
        We evaluate LLMs on key benchmarks using the Eleuther AI, a framework to test LLMs on a large number of different evaluation tasks. The higher the score, the better the LLM.
      </Typography>

      <Table />

      <Box textAlign="center" mt={4}>
        <Button
          variant="text"
          sx={{
            color: '#BABABA',
            textTransform: 'none',
            fontSize: '16px',
            px: 4,
            py: 1,
          }}
        >
          View more
        </Button>
      </Box>
    </Box>
  );
}
