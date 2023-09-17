import Layout from '@/components/Layout';
import { Box, Grid, Typography } from '@mui/material';
import { haircutImages } from '@/utils/mock';
import { productsImages } from '@/utils/mock';

export default function Gallery() {
  const renderGalleryImages = () => {
    return haircutImages.map((item, index) => {
      return (
        <Grid key={index} item xs={3}>
          <img style={{ maxWidth: '100%', minHeight: '100%' }} src={`${item.image}`} />
        </Grid>
      );
    });
  };

  const renderProductsImages = () => {
    return productsImages.map((item, index) => {
      return (
        <Grid key={index} item xs={3}>
          <img style={{ maxWidth: '100%', minHeight: '100%' }} src={`${item.image}`} />
        </Grid>
      );
    });
  };
  return (
    <Layout>
      <Typography variant='h3' align='center' className='my-5'>
        Haircut Gallery
      </Typography>
      <Box className="container">
        <Grid container spacing={1} className="my-5">
          {renderGalleryImages()}
        </Grid>
      </Box>
      <Typography variant="h3" align="center" className="my-5">
        Products Gallery
      </Typography>
      <Box className="container">
        <Grid container spacing={1} className="my-5">
          {renderProductsImages()}
        </Grid>
      </Box>
    </Layout>
  );
}
