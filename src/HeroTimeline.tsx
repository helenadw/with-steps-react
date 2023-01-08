import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Button, Grid, TextField, Typography } from '@mui/material';

export default function HeroTimeline() {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
        width: '80%',
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{bgcolor: "#5F18F5"}}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <Grid>
                <TextField label="Email" /> <Button variant='contained' sx={{bgcolor: "#5F18F5"}}>Sign up for Steps</Button>
            </Grid>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{bgcolor: "#5F18F5"}}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            Saving
            <Typography>tools to plan and track your deposit savings</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{bgcolor: "#5F18F5"}}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            Mortgages
            <Typography>tools to plan and track your deposit savings</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{bgcolor: "#5F18F5"}}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            Find a property
            <Typography>tools to plan and track your deposit savings</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{bgcolor: "#5F18F5"}}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            Market comps
            <Typography>tools to plan and track your deposit savings</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{bgcolor: "#5F18F5"}}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            Make an offer
            <Typography>tools to plan and track your deposit savings</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{bgcolor: "#5F18F5"}}/>
          {/* <TimelineConnector /> */}
        </TimelineSeparator>
        <TimelineContent>
            Contracts
            <Typography>tools to plan and track your deposit savings</Typography>
        </TimelineContent>
      </TimelineItem>




    </Timeline>
  );
}