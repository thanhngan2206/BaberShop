import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

export default function BookingDate() {
  const today = dayjs();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        sx={{
          '& input': { color: '#F5F5F5' },
          '& fieldset': {
            borderColor: 'rgba(255,255,255,.14)',
          },
          '&:hover fieldset': {
            borderColor: '#F5F5F5 !important',
          },
          '& .MuiSvgIcon-root': {
            color: '#F5F5F5',
          },
        }}
        defaultValue={today}
        disablePast
      />
    </LocalizationProvider>
  );
}
