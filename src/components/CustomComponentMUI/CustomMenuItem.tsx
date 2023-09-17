import { Select, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomMenuItem = styled(MenuItem)({
  '&.Mui-selected': {
    color: '#F5F5F5',
    backgroundColor: '#333333',
    '&:hover': {
      backgroundColor: '#444444',
    },
  },
});

export default CustomMenuItem;