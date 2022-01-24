import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Link from 'next/link'

const ColorButton = styled(Button)(({ theme }) => ({
  background: "#f8f9fa",
  '&:hover': {
    background: "#FFFFFF",
  },
}));

export default function ButtonAppBar() {
  return (
    <Link href="/dashboard">
      <ColorButton variant="contained" size="large" component="a" sx={{py: {xs: 1.2,}, px: {xs: 4,}}} >
          Live Demo
      </ColorButton>
    </Link>
  );
}
