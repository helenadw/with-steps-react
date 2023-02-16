import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Chip } from '@mui/material';
import { Timeline } from '@mui/icons-material';
import HeroTimeline from './HeroTimeline.tsx';
import SavingTimeline from './SavingTimeline/SavingTimeline.tsx';

const Hero = () => {
    return (
        <Box
        component="section"
        sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '50vh',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
            color: 'black',
            px: 3,
            width: '100%',
            padding: '0px',
            paddingTop: '100px',
        }}
        >
        <Container maxWidth="sm">
            <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700 }}
            >
            Track your home buying journey
                <Box
                    component="span"
                    sx={{ color: '#5F18F5' }}
                >
                    {' '}
                    with Steps
                </Box>
            </Typography>
            <Typography variant="h5" component="h2" sx={{ mb: 4 }}>
                Create a personalised roadmap to visualise your home buying journey, whatever your starting point
            </Typography>
         
            {/* create a roadmap animation with a line and purple dots along the way that appear and a little but of text that pops up to show what each stage is */}
        </Container>
        <SavingTimeline />
        <HeroTimeline />
        </Box>
    );
};

export default Hero;