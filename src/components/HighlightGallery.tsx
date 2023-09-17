import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';

export default function HighlightGallery() {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [screenHeight, setScreenHeight] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // initialize with current screen width
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Carousel>
      <Carousel.Item>
        <Image src={'/img/products.jpg'} width={screenWidth} height={screenHeight} style={{ objectFit: 'cover', overflow: 'hidden' }} alt="img" />
        {/* <Carousel.Caption>
          <Typography variant="h2">FINE HAIR GROOMING BOX </Typography>
          <Typography paragraph>Nulla vitae elit libero, a pharetra augue mollis interdum.</Typography>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <Image src={'/img/products2.jpg'} width={screenWidth} height={screenHeight} style={{ objectFit: 'cover', overflow: 'hidden' }} alt="img" />
        {/* <Carousel.Caption>
          <Typography variant="h2">Ho-Ho-Ho | hair cream</Typography>
          <Typography paragraph>Nulla vitae elit libero, a pharetra augue mollis interdum.</Typography>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}
