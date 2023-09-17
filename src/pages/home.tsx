import React from 'react';
import HighLightProduct from '@/components/HighlightProduct';
import Typography from '@mui/material/Typography';
import HighlightGallery from '@/components/HighlightGallery';
import Layout from '@/components/Layout';
import { Box } from '@mui/material';

export default function HomePage() {
 
  return (
    <Layout>
      <Box className='mb-5'>
        <HighlightGallery />
        <HighLightProduct/>
        <Typography variant='h3' align='center' className='my-5'>Available Today</Typography>
        <Box className='text-center'>
          <img src='/img/calendar-service.jpg'
          className='w-50'
          />
        </Box>
      </Box>
    </Layout>
  );
}
