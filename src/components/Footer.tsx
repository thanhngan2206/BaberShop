import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import style from '../styles/Footer.module.css';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsChat } from 'react-icons/bs';

export default function Footer() {
  return (
    <Box className={`${style.footer} text-center`}>
      <Box className="container">
        <Typography className="text-20">Follow us on our networks:</Typography>
        <Box sx={{marginTop: '2rem'}}>
          <BsFacebook size={32} />
          <BsChat className='mx-4' size={32} />
          <BsInstagram size={32} />
        </Box>
        <Box sx={{marginTop: '4rem'}}>
          <Typography className='text-grey'>Todos los Derechos Reservados 2022</Typography>
          <Typography className='text-grey'>La Facheria Barber Shop</Typography>
        </Box>
      </Box>
    </Box>
  );
}
