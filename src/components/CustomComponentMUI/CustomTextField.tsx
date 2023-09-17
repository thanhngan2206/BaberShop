import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomTextField = styled(TextField)({
  '&.custom-text-field .MuiInputLabel-root, &.custom-text-field .MuiInputBase-root, &.custom-text-field .MuiInput-underline:before': {
    color: '#F5F5F5',
    borderBottomColor: 'rgba(255,255,255,.14)',
  },
  '&.custom-text-field .MuiInputLabel-root.Mui-focused': {
    color: '#F5F5F5',
  },
  '&.custom-text-field:hover .MuiInput-underline:before': {
    borderBottomColor: '#F5F5F5',
  }
});


export default CustomTextField;
