import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';

interface ICustomSelect {
  labelId: string;
  labelSelect: string;
  valueSelect: any;
  onChange: (event: SelectChangeEvent<any>, child: React.ReactNode) => void;
  children: React.ReactNode
}

const CustomSelect = (props: ICustomSelect) => {
  const { labelId, labelSelect, valueSelect, onChange, children } = props;

  return (
    <React.Fragment>
      <InputLabel sx={{ color: '#F5F5F5' }} id={labelId}>
        {labelSelect}
      </InputLabel>
      <Select
        labelId={labelId}
        id="demo-simple-select"
        value={valueSelect}
        label="Booking Hour"
        onChange={onChange}
        sx={{
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
        inputProps={{
          sx: {
            color: '#F5F5F5',
          },
        }}
      >
        {children}
      </Select>
    </React.Fragment>
  );
};

export default CustomSelect;
