import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from '@mui/material';

const getChangeIcon = (change) => {
  if (change > 0) return <ArrowUpwardIcon sx={{ color: 'lime', fontSize: 24, verticalAlign: 'middle' }} />;
  if (change < 0) return <ArrowDownwardIcon sx={{ color: 'red', fontSize: 24, verticalAlign: 'middle' }} />;
  return <RemoveIcon sx={{ color: 'gray', fontSize: 20, verticalAlign: 'middle' }} />;
};

const TableRow = ({ index, row, odd }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      minHeight: 56,
      background: odd ? '#000' : 'rgba(201, 217, 255, 0.08)',
      transition: 'background 0.3s',
      '&:hover': {
        background: '#111',
      },
      fontSize: 18,
      gap: '12px',
      px: 2,
    }}
  >
    <Box sx={{ width: 24, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
      {getChangeIcon(row.rankChange)}
    </Box>
    <Box sx={{ width: 32, textAlign: 'left', color: '#bfcfff' }}>
      {index + 1}
    </Box>
    <Box sx={{ width: 326, color: '#bfcfff', fontWeight: 500, textAlign: 'left' }}>
      {row.name}
    </Box>
    {row.scores.map((score, i) => (
      <Box key={i} sx={{ width: 151, textAlign: 'right', color: '#fff' }}>
        {score}
      </Box>
    ))}
    <Box sx={{ width: 151, textAlign: 'right', color: '#fff', fontWeight: 500 }}>
      {row.earnings}
    </Box>
  </Box>
);

export default TableRow;