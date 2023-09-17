import { Divider, styled } from '@mui/material';

const CustomDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: '#FFF',
  height: 2, // adjust the height to your liking
  margin: theme.spacing(2, 0), // adjust the margin to your liking
}));

export default CustomDivider;
