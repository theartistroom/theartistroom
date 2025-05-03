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
                            Step into The Artist Room – where creativity meets community. Whether it’s thought-provoking conversations, fun games, live music, or tasty bites, this event brings together everything you need for a chill, inspiring, and memorable time.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default AboutEvent;
