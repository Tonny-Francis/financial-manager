import { Box, Typography } from '@mui/material';
import React from 'react';

function App() {
  return (
    <Box sx={{
      height: '100vh'
    }} className='w-full flex flex-col items-center justify-center bg-primary'>
      <Typography sx={{fontSize: '32px'}} className='text-secondary'>
        FINANCIAL MANAGER
      </Typography>
    </Box>
  );
}

export default App;
