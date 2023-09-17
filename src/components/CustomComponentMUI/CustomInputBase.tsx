import { InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    border: "1px solid rgba(102, 102, 102, 0.35)",
    borderRadius: "12px",
    background: "transparent",
    padding: "0.5rem",
    "label + &": {
      marginTop: theme.spacing(1),
    },
    '&:focus': {
      borderColor: theme.palette.primary.main,
      outline: 'none',
      boxShadow: `0px 0px 4px 2px ${theme.palette.primary.main}80`,
      transition: 'border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
      '& + .MuiInputLabel-outlined': {
        transform: 'translate(14px, -8px) scale(0.75)',
        color: theme.palette.primary.main,
        transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out',
      },
    },
    '&:hover': {
      borderColor: theme.palette.primary.main,
      outline: 'none',
      boxShadow: `0px 0px 4px 2px ${theme.palette.primary.main}80`,
      transition: 'border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
      '& + .MuiInputLabel-outlined': {
        transform: 'translate(14px, -8px) scale(0.75)',
        color: theme.palette.primary.main,
        transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out',
      },
    },
    '&::placeholder': {
      color: theme.palette.grey[500],
      transition: 'color 0.2s ease-in-out',
    },
  },
}));

export default CustomInputBase;