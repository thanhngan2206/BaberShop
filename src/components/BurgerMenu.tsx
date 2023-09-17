import { Box, Button, Stack, SwipeableDrawer } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';
import { BiMenu } from 'react-icons/bi';
import { useState } from 'react';
import {
  BsScissors,
  BsHouseDoor,
  BsShop,
  BsCalendarEvent,
} from 'react-icons/bs';
import { TfiGallery } from 'react-icons/tfi';

export default function BurgerMenu() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event?.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <Box className="d-flex d-xl-none">
      <Button onClick={toggleDrawer(true)}>
        <BiMenu fontSize={24} color="#F5F5F5" />
      </Button>
      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        PaperProps={{
          className: 'bg-dark',
          style: { width: 250 },
        }}
      >
        <Box className="m-3">
          <ul className="text-22 text-light list-unstyled">
            <li className="d-flex align-items-center mb-4">
              <BsHouseDoor />
              <Link
                className={`${
                  router.asPath.includes('home') ? 'text-purple' : ''
                } text-20 ms-3`}
                href={'home'}
              >
                Home
              </Link>
            </li>
            <li className="d-flex align-items-center mb-4">
              <BsCalendarEvent />
              <Link href={'/booking'}
                className={`${
                  router.asPath.includes('booking') ? 'text-purple' : ''
                } text-20 ms-3`}
              >
                Booking
              </Link>
            </li>
            <li className="d-flex align-items-center mb-4">
              <BsShop />
              <Link
                className={`${
                  router.asPath.includes('shop') ? 'text-purple' : ''
                } text-20 ms-3`}
                href={'shop'}
              >
                Shop
              </Link>
            </li>
            <li className="d-flex align-items-center mb-4">
              <TfiGallery />
              <Link
                className={`${
                  router.asPath.includes('gallery') ? 'text-purple' : ''
                } text-20 ms-3`}
                href={'gallery'}
              >
                Gallery
              </Link>
            </li>
            <li className="d-flex align-items-center mb-4">
              <BsScissors />
              <Link
                className={`${
                  router.asPath.includes('about') ? 'text-purple' : ''
                } text-20 ms-3`}
                href={'about'}
              >
                About
              </Link>
            </li>
          </ul>
          <Stack direction={'column'} spacing={2}>
            <Link href={'login'}>
              <Button className="w-100" variant="contained">
                Login
              </Button>
            </Link>
            <Button variant="outlined">Sign up</Button>
          </Stack>
        </Box>
      </SwipeableDrawer>
    </Box>
  );
}
