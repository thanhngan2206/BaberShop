import Layout from '@/components/Layout';
import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { productsImages } from '@/utils/mock';
import Link from 'next/link';
import style from '../styles/Shop.module.css';

export default function Shop() {
  const renderProductsImages = () => {
    return productsImages.map((item, index) => {
      return (
        <Grid key={index} item md={4} xs={12} sm={6}>
        <Box className={style.productContainer}>
          <Box className={style.imageContainer}>
            <img src={item.image} className={style.imgItem} />
            <Box className={style.imageOverlay}>
              <Typography className={style.imageDescription} align="left">
                Fiber Pomade 4 oz. <br /> Strength: Pliable, flexible hold pomade <br /> Shine: Low shine Base: Water soluble <br /> Best For: Men of all hair types looking for a volumizing,
                texturizing pomade that can be restyled throughout the day <br /> The Reuzel Fiber Pomade has a vanilla mint fragrance and can be applied to wet hair for increased shine.
              </Typography>
            </Box>
          </Box>
          <Box className="p-3 d-flex justify-content-between">
            <Link href={'#'}>Fiber Pomade</Link>
            <Typography>$19.95</Typography>
          </Box>
        </Box>
      </Grid>
      );
    });
  };
  return (
    <Layout>
      <Box className="my-5">
        <Typography variant="h3" align="center" className="mb-5">
          Products
        </Typography>
        <Box className="container">
          <Grid container spacing={2}>
            <Grid item lg={3}>
              <Typography variant="h4">All</Typography>
              <Box className="p-3 bg-black">
                <Typography paragraph>
                  Pleased to grease you! Shop all of Reuzels finest hair and grooming products for men. Pomades, tonics, shampoos, conditioners, beard, skin care and more. Welcome to the greasiest
                  corner of the internet!
                </Typography>
              </Box>
              <ul className={style.productsList}>
                <li>
                  <Link href={'#'}>Best Sellers</Link>
                </li>
                <li><Link href={'#'}>Pomade</Link></li>
                <li><Link href={'#'}>Hair &amp; Style</Link></li>
                <li><Link href={'#'}>Shave &amp; Beard</Link></li>
                <li><Link href={'#'}>Skin</Link></li>
              </ul>
            </Grid>
            <Grid item lg={9} container spacing={2}>
             {renderProductsImages()}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
}
