import { Box, Container, Paper, Typography } from '@mui/material';

import Page from '../components/Page';

export default function DashboardApp() {
    return (
        <Page title='Dashboard'>
            <Container maxWidth='xl' sx={{mt: '5rem'}}>
                <Paper
                    elevation={6}
                    sx={{
                        padding: 2,
                        backgroundColor: 'white',
                    }}
                >
                    <Box sx={{py: 2}}>
                        <Typography variant='h4'>Hi!.Welcome Back!</Typography>
                    </Box>
                </Paper>
            </Container>
        </Page>
    );
}
