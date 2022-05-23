import React from 'react';
// material
import { Container, Typography } from '@mui/material';
// components
import Page from '../components/dashboard/Page';

export default function Accommodations() {
  return (
    <Page title="Dashboard: Products">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Accommodations
        </Typography>
      </Container>
    </Page>
  );
}
