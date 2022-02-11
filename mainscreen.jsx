import React, { Component } from 'react';
import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MusicNote from '@mui/icons-material/MusicNote';
import { Apartment, CoPresent, MenuBook } from '@mui/icons-material';
import { SportsCricket } from '@mui/icons-material';
import { MovieCreation } from '@mui/icons-material';
import { Work } from '@mui/icons-material';
import { Villa } from '@mui/icons-material';
import { Vaccines } from '@mui/icons-material';
import { TrendingUp } from '@mui/icons-material';
import { TheaterComedy } from '@mui/icons-material';
import { Carousel } from 'react-responsive-carousel';
import {grey} from '@mui/material/colors';
class MainScreen extends Component {

    

    render() { 
        

        

        return (
            <React.Fragment>
            
            <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                mb: 5,
                height: 360,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${require("./img1.jpg")})`,
            }}
            >
            {/* Increase the priority of the hero background image */}
            {<img style={{ display: 'none' }}  src={require("./img1.jpg")} alt="Our Mission" />}
            <Box
                sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                backgroundColor: 'rgba(0,0,0,.3)',
                }}
            />
            <Grid container>
                <Grid item md={6}>
                <Box
                    sx={{
                    position: 'relative',
                    p: { xs: 3, md: 6 },
                    pr: { md: 0 },
                    }}
                >
                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    Our Mission
                    </Typography>
                    <Typography variant="h5" color="inherit" paragraph>
                    Afdbsvnsdoigveaovinzdvkm
                    </Typography>
                    
                </Box>
                </Grid>
            </Grid>
            </Paper>





            
            <Typography variant="h1" component="div" marginLeft={55} marginTop={20}>
                    What we offer
            </Typography>
                    <Box sx={{ flexGrow: 1 }} margin = "auto" marginTop={10}>
            <Grid container spacing={2} margin = "auto" justifyContent="center" >
                <Grid item xs={3}>
                
                <CardContent style={{backgroundColor: "Gainsboro"}}>
                
                <Typography variant="h5" component="div">
                    Learn Anything from Anywhere
                </Typography>
                
                <Typography variant="body1" marginTop = {2.5}>
                    Join us and learn whatever you are truly
                    passionate about from any part of the world  
                </Typography>
                </CardContent>
                  
                </Grid>

                <Grid item xs={3}>
                
                <CardContent style={{backgroundColor: "Beige"}} >
                
                <Typography variant="h5" component="div">
                    Teach Anything from Anywhere
                </Typography>
                
                <Typography variant="body1" marginTop ={2.5}>
                    Teachers from all over the world can register 
                    and start teaching
                </Typography>
                </CardContent>   
                
                </Grid>

                <Grid item xs={3}>
               
                <CardContent style={{backgroundColor: "Floralwhite"}} >
                
                <Typography variant="h5" component="div">
                    Less Strength More Care
                </Typography>
                
                <Typography variant="body1" marginTop ={2.5}>
                   Fewer Students are assigned in a single class to enhance 
                   the quality of education
                </Typography>
                </CardContent>
                
                </Grid>
                
            </Grid>
            </Box>

            <Typography variant="h1" component="div" marginLeft={40} marginTop={30}>
                    Start learning Today 
            </Typography>

            <Box sx={{ flexGrow: 1 }} m='auto' style={{backgroundColor: "lightblue"}} justifyContent="center" marginTop={10} marginLeft={5} marginRight={5} >
            <Grid container spacing={2.5} sx={{ color: 'text.primary' }} justifyContent="center" margin="auto" >
            <Grid item xs={0.5}>
                <MusicNote sx={{ fontSize: 40 }} />
                
                
            </Grid>
            
            <Grid item xs={3.5} >
                <Typography variant="h4">Music</Typography>
            </Grid>

            <Grid item xs={0.5} >
                <MenuBook sx={{ fontSize: 40 }} />
                
                
            </Grid>
            
            <Grid item xs={3.5} >
                <Typography variant="h4">Academics</Typography>
            </Grid>

            <Grid item xs={0.5} >
                <SportsCricket sx={{ fontSize: 40 }} />
                
                
            </Grid>
            
            <Grid item xs={3.5}>
                <Typography variant="h4">Sports</Typography>
            </Grid>

            <Grid item xs={0.5} marginTop={5}>
                <MovieCreation sx={{ fontSize: 40 }} />
                
                
            </Grid>
            
            <Grid item xs={3.5} marginTop={5}>
                <Typography variant="h4">Film Making</Typography>
            </Grid>

            <Grid item xs={0.5} marginTop={5} >
                <Work sx={{ fontSize: 40 }} />
                
                
            </Grid>
            
            <Grid item xs={3.5} marginTop={5}>
                <Typography variant="h4">Productivity</Typography>
            </Grid>

            <Grid item xs={0.5} marginTop={5}>
                <Villa sx={{ fontSize: 40 }} />
                
                
            </Grid>
            
            <Grid item xs={3.5} marginTop={5}>
                <Typography variant="h4">Architecture</Typography>
            </Grid>

            <Grid item xs={0.5} marginTop={5}>
                <Vaccines sx={{ fontSize: 40 }} />
                
                
            </Grid>
            
            <Grid item xs={3.5} marginTop={5} >
                <Typography variant="h4">Nursing</Typography>
            </Grid>

            <Grid item xs={0.5} marginTop={5}>
                <TrendingUp sx={{ fontSize: 40 }} />
                
                
            </Grid>
            
            <Grid item xs={3.5}  marginTop={5}>
                <Typography variant="h4">Stock Market</Typography>
            </Grid>

            <Grid item xs={0.5}  marginTop={5}>
                <TheaterComedy sx={{ fontSize: 40 }} />
                
                
            </Grid>
            
            <Grid item xs={3.5} marginTop={5}>
                <Typography variant="h4">Arts</Typography>
            </Grid>
            
            </Grid>
            </Box>
            
                   
            <Typography variant="h1" component="div" marginLeft={40} marginTop={30}>
                    Start Teaching Today 
            </Typography>
            
            <Box sx={{ flexGrow: 1 }} m='auto' style={{backgroundColor: "lightblue"}} justifyContent="center" marginTop={10} marginLeft={35} marginRight={35} >
            <Grid container spacing={2.5} sx={{ color: 'text.primary' }} justifyContent="center" margin="auto" >
            
            <Grid item xs={0.5}>
                <Apartment sx={{ fontSize: 40 }} />
            </Grid>
            
            <Grid item xs={3.5} >
                <Typography variant="h4">Create A School</Typography>
            </Grid>
            
            

            <Grid item xs={0.5} marginLeft={10} >
                <CoPresent sx={{ fontSize: 40 }} />
                
                
            </Grid>
            
            <Grid item xs={3.5} >
                <Typography variant="h4">Join A School</Typography>
            </Grid>
            </Grid>
            </Box>
            
            <Box sx={{ flexGrow: 1 }} m='auto'  justifyContent="center" marginTop={10} marginLeft={80} >
            <Button variant="contained" justifyContent='center' marginLeft={50}>Connect with us</Button>
            </Box>

            </React.Fragment>
            );
    }

    
}
 
export default MainScreen;
