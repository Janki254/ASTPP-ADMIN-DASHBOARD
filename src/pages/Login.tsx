import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

import {
	Box,
	Button,
	Container,
	Grid,
	Link,
	Paper,
	TextField,
	Typography,
} from '@mui/material';

const LOGO_URL = '/static/astpp_full_logo.png';
const BackgroundImage = '/static/login_background.jpg';

const Login = () => {
    const navigate = useNavigate();

    const loginHandler = () => {
        navigate('/');
    };
    return (
        <Box
            sx={{
                position: 'relative',
                height: '100vh',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    // Overlay color with opacity
                    backgroundColor: 'rgba(37,64,151,0.5)',
                    zIndex: 1,
                    // Ensure it's above the background image but below the content
                },
                backgroundImage: `url(${BackgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ':after': {
                    content: '""',
                    display: 'block',
                    height: '100%',
                    width: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 2,
                },
            }}
        >
            <Container
                component='main'
                maxWidth='xs'
                sx={{position: 'relative', zIndex: 3}}
            >
                <Paper
                    elevation={6}
                    sx={{
                        padding: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box sx={{my: 3}}>
                        <img
                            src={LOGO_URL}
                            alt='CompanyLogo'
                            style={{
                                maxWidth: '100%',
                                height: '50px',
                                marginInlineEnd: '1rem',
                            }}
                        />
                    </Box>
                    <Typography component='h1' variant='h5' align='center'>
                        Welcome Back!
                    </Typography>
                    <Typography
                        variant='body2'
                        align='center'
                        sx={{
                            color: 'gray',
                            fontSize: '14px',
                            fontWeight: 'normal',
                        }}
                    >
                        Sign in to continue to ASTPP
                    </Typography>
                    <Box component='form' noValidate sx={{mt: 1}}>
                        <TextField
                            margin='normal'
                            required
                            fullWidth
                            id='extension-number'
                            label='Extension Number'
                            placeholder='Email'
                            name='extensionNumber'
                            autoComplete='extension-number'
                            autoFocus
                        />
                        <TextField
                            margin='normal'
                            fullWidth
                            name='password'
                            placeholder='password'
                            label='Password'
                            type='password'
                            id='password'
                            autoComplete='current-password'
                            required
                        />

                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            sx={{mt: 3, mb: 2}}
                            onClick={loginHandler}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid
                                item
                                xs
                                display={'flex'}
                                justifyContent={'center'}
                                alignItems={'end'}
                            >
                                <Link href='#' variant='subtitle2'>
                                    Forgot password?
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            justifyContent='center'
                            sx={{mt: 3, mb: 2}}
                        >
                            <Typography variant='body2'>or</Typography>
                        </Grid>
                        <Button
                            fullWidth
                            variant='outlined'
                            startIcon={<FcGoogle />}
                        >
                            Sign in with Google
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default Login;
