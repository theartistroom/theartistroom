import { Grid, Typography } from "@mui/material";
import React from "react";

const AboutEvent = () => {

    return (
        <>
            <Grid class="About-Event">
                <Grid 
                  container
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                    <Grid item xs={12} style={{marginBottom: '10px'}}>
                        <Typography variant="h5">WHAT IS Artist Room?</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h3">About the Event</Typography>
                    </Grid>
                    <Grid 
                        item 
                        xs={12} 
                        sx={{ 
                            mx: { xs: '1rem', md: '8rem' }, 
                            textAlign: 'center' 
                        }}
                    >
                        <Typography 
                            variant="h6"
                            sx={{ 
                              fontSize: { xs: '1rem', md: '1rem' } 
                            }}
                        >
                            Poetry House Party is your ticket to good times! From games and meaningful conversations to music and yummy food – we have a whole package of fun-filled activities you would not want to miss.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default AboutEvent;
