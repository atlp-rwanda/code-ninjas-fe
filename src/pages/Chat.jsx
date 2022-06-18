import React from 'react';
// material
import { Container, Stack } from '@mui/material';
// components
import Page from '../components/dashboard/Page';
import Chat from '../components/chat/Chat';

export default function Blog() {
  return (
    <Page title="Dashboard: Blog">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Chat />
        </Stack>
      </Container>
    </Page>
  );
}
