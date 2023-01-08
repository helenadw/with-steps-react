import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Hero = () => {
    return (
        <Box
        component="section"
        sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            px: 3,
        }}
        >
        <Container maxWidth="sm">
            <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700 }}
            >
            MUI
            <Box
                component="span"
                sx={{ color: 'secondary.main' }}
            >
                {' '}
                X
            </Box>
            </Typography>
            <Typography variant="h5" component="h2" sx={{ mb: 4 }}>
            The ultimate solution for your next project.
            </Typography>
            <Grid container spacing={2} justifyContent="center">
            <Grid item>
                <Button variant="contained" color="secondary">
                Get started
                </Button>
            </Grid>
            <Grid item>
                <Button variant="outlined" color="secondary">
                Learn more
                </Button>
            </Grid>
            </Grid>
        </Container>
        </Box>
    );
};

export default Hero;