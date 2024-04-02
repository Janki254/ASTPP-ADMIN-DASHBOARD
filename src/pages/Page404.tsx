import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Button, Typography, Container } from '@mui/material';
import Page from '../components/Page';

const RootStyle = styled(Page)(({ theme }) => ({
    display: 'flex',
    minHeight: '100%',
    alignItems: 'center',
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(10),
}));

const Page404: React.FC = () => {
    return (
        <RootStyle title="Page Not Found">
            <Container>
                <Box
                    sx={{
                        maxWidth: 480,
                        margin: 'auto',
                        textAlign: 'center',
                    }}
                >
                    <Typography paragraph sx={{ fontSize: '5rem !important' }}>
                        404
                    </Typography>
                    <Typography variant="h3" paragraph>
                        There's Nothing here...
                    </Typography>

                    <Typography sx={{ color: 'text.secondary', mb: 4 }}>
                        Maybe the page you're looking for is not found or never existed.
                    </Typography>

                    <Button to="/" size="large" variant="contained" component={RouterLink}>
                        Go to Home
                    </Button>
                </Box>
            </Container>
        </RootStyle>
    );
};
export default Page404;
