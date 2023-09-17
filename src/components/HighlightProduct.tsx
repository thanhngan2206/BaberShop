import { Typography, Box, Grid, Paper } from '@mui/material';
import Link from 'next/link';
import style from '../styles/HighLightProduct.module.css';

export default function HighLightProduct() {
  return (
    <>
      <Typography variant="h3" align="center" className="my-5">
        Highlight Product
      </Typography>
      <Box className="container">
        <Grid container spacing={2}>
          {Array.from(Array(8)).map((_, index) => (
            <Grid key={index} item md={4} lg={3} xs={12} sm={6}>
              <Box className={style.productContainer}>
                <Box className={style.imageContainer}>
                  <img src="/img/product.jpg" className={style.imgItem} />
                  <Box className={style.imageOverlay}>
                    {/* <Typography paragraph className="text-20">
                    HAIR GROOMING 02
                    </Typography> */}
                    <Typography paragraph className={style.imageDescription}>
                      • Creates a moldable, flexible hold of natural clay with a
                      matte finish and is used to manipulate the hair into any
                      style. <br />
                      • Wont weigh hair down.
                      <br />
                      • Works on all hair types.
                      <br />
                      {/* <Link href={''}>View Detail</Link> */}
                    </Typography>
                  </Box>
                </Box>
                <Box className="p-3 d-flex justify-content-between">
                  <Link href={'#'}>HAIR GROOMING 02</Link>
                  <Typography>$19.95</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
