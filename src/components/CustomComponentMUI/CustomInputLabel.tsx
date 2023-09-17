import { InputLabel } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomInputLabel = styled(InputLabel)(({ theme }) => ({
  color: '#F5F5F5',
  transform: 'translate(14px, 12px) scale(1)',
  '&.MuiInputLabel-shrink': {
    transform: 'translate(14px, -6px) scale(0.75)',
  },
}));

export default CustomInputLabel;