import CustomDivider from '@/components/CustomComponentMUI/CustomDivider';
import Layout from '@/components/Layout';
import { Box, Divider, Typography } from '@mui/material';

export default function About() {
  return (
    <Layout>
      <img src={'/img/banner.jpg'} style={{ maxHeight: '100%', maxWidth: '100%' }} alt='banner' />
      <Typography variant='h2' align='center' className='my-5'>
        Our Story
      </Typography>
      <Box className='container my-5'>
        <CustomDivider />
      </Box>
      <Box className="container">
        <Box className="my-5">
          <Typography variant="h2">Reuzel. Spelled with a Z. Pronounced with a middle finger.</Typography>
          <Typography paragraph>
            Like every good story, this one starts in an alley. With two men in love with barbering. Sotted in style. And drowning under the influences of rock ‘n roll, kustom culture and the working
            class ethic of Rotterdam.
          </Typography>
        </Box>
        <Box className='my-5'>
          <Typography variant='h5'>Men on a mission</Typography>
          <Typography paragraph>
            Leen and Bertus wanted to cut every man the perfect hairstyle, proper porkchop. And to provide a haven. A barbershop. A place men could trust the products and enjoy the company. Those
            classic styles and hot-towel shaves are still around. And the traditions that created them have kickstarted a bit of a riot.
          </Typography>
        </Box>
        <Box className='my-5'>
          <Typography variant='h5'>Flash forward</Typography>
          <Typography paragraph>
            Leen and Bertus wanted to cut every man the perfect hairstyle, proper porkchop. And to provide a haven. A barbershop. A place men could trust the products and enjoy the company. Those
            classic styles and hot-towel shaves are still around. And the traditions that created them have kickstarted a bit of a riot.
          </Typography>
        </Box>
        <Box className='my-5'>
          <Typography variant='h5'>If you get it, you get it</Typography>
          <Typography paragraph>
            Leen and Bertus wanted to cut every man the perfect hairstyle, proper porkchop. And to provide a haven. A barbershop. A place men could trust the products and enjoy the company. Those
            classic styles and hot-towel shaves are still around. And the traditions that created them have kickstarted a bit of a riot.
          </Typography>
        </Box>
      </Box>
      <Box className='container my-5'>
        <CustomDivider />
      </Box>
    </Layout>
  );
}
