import React from 'react';
// material
import { Stack, Container, Typography } from '@mui/material';
// components
import Page from '../components/dashboard/Page';

export default function Users() {
  return (
    <Page title="User">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Users
          </Typography>
        </Stack>
      </Container>
    </Page>
  );
}
