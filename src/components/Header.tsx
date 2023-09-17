import {
  Box,
  Button,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';
import BurgerMenu from './BurgerMenu';

const Header = () => {
  const router = useRouter();
  

  return (
    <Box id="header" className={`${styles.header} bg-dark px-xl-5 px-3`}>
      <Box className="d-flex align-items-center justify-content-between container">
        <Link href={'/'}>Brand</Link>
        <ul className={`${styles.headerMenu} d-xl-flex d-none`}>
          {/* Todo: Custom Link Component by Higher Order Function */}
          <li>
            <Link
              className={`${
                router.asPath.includes('home') ? 'text-purple' : ''
              } text-20 ${styles.headerItem}`}
              href={'home'}
            >
              Home
            </Link>
          </li>
          <li>
            <Link href={'booking'}
              className={`${
                router.asPath.includes('booking') ? 'text-purple' : ''
              } text-20 ${styles.headerItem}`}
            >
              Booking
            </Link>
          </li>
          <li>
            <Link
              className={`${
                router.asPath.includes('shop') ? 'text-purple' : ''
              } text-20 ${styles.headerItem}`}
              href={'shop'}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              className={`${
                router.asPath.includes('gallery') ? 'text-purple' : ''
              } text-20 ${styles.headerItem}`}
              href={'gallery'}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              className={`${
                router.asPath.includes('about') ? 'text-purple' : ''
              } text-20 ${styles.headerItem}`}
              href={'about'}
            >
              About
            </Link>
          </li>
          <li>
            <Button variant="contained">
              <Typography>
                <Link href={'login'}>Login</Link>
              </Typography>
            </Button>
          </li>
          <li>
            <Button variant="outlined">
              <Typography>Sign up</Typography>
            </Button>
          </li>
        </ul>
        <BurgerMenu />
      </Box>
    </Box>
  );
};

export default Header;
