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
      <ColorButton variant="contained" size="large" component="a">
          Live Demo
      </ColorButton>
    </Link>
  );
}
