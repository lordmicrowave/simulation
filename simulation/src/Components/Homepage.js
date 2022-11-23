import * as React from 'react';
//MUI Components
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

//CSS
import '../Styling/homepage.css';

//Images
import havingadhd from '../Assets/havingadhd.png';
import paint from '../Assets/paint.gif';
import fire from '../Assets/fire.gif';
import welcome from '../Assets/welcomeb.gif';
import Refresh from '../Assets/Icons/IE Refresh.png';
import question from '../Assets/questionmark.gif';
import navigation from '../Assets/navigation.png';
import logo from '../Assets/adhdlogo.png';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function VariableWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <img class="logo" src={logo} alt="adhd-logo" />
      <Grid container spacing={3}>
        <Grid xs={3}>
          <Item>
            <Typography>What is ADHD??<img src={question} alt="question-mark" /></Typography>
            <p>Attention Deficit Hyperactivity Disorder (ADHD) is a mental health
              disorder that includes a combination of persistent problems such as
              difficulty paying attention, hyperactivity and impulse behaviour. <br/>
              - Mayo Clinic </p>
          </Item>
        </Grid>

        <Grid xs={6}>
          <Item>
          <img src={welcome} alt="WelcomeGif" />
          
            <Typography gutterBottom variant="h5" component="div">
           the landing page of the ADHD Simulator! Here you will find
          a bunch of interactive artworks that simulate the different states that 
          come with having adhd.
          This experience will allow you to experience what it's like to have ADHD
          while simultaneously enjoying the nostalgia of the early 2000s internet.
      
        </Typography></Item>
        </Grid>
                      
        <Grid xs>
          <Item>
          <img style={{ width: 250, height: 280 }}src={havingadhd} alt="homememe" />
          
          </Item>
        </Grid>

        <Grid xs={3}>
          <Item>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" variant="outlined" />
              <Button variant="contained">Search</Button>
              
            </Box>
          </Item>
        </Grid>

        <Grid xs={6}>
          <Item><Typography gutterBottom variant="h5" component="div">
          <img class="navigation" src={navigation} alt="navigation-text" />
          Click on each browser tab to explore the ADHD mind. <br/>
          Actually, click on anything and everything!<br/><br/>
          <b>NOTE:</b> if you want to view a page's effects again, hit the
          refresh button to reload the page. <br/><br/>
          <b>CAUTION!</b> As anyone with ADHD will tell you about what's going 
          on in their mind, there's a lot of going ons. So if you get overwhelmed, 
          feel free to step away from the simulation. Lucky... unlike some of us haha
      
        </Typography></Item>
        </Grid>

        

        

        <Grid xs={3}>
          <Item>
            <Typography>Popular Sites<img src={fire} alt="FlameGif" /></Typography>
            
            <List>
                <ListItem>
                <Tooltip title="Clicking on these will direct you to the corresponding tab">
                <Link
                        component="button"
                        variant="body2"
                        onClick={() => {
                            console.info("I'm a button.");
                        }}
                        >
                        Sensory Overload
                    </Link>
                    </Tooltip>
                    </ListItem>
                    <ListItem>
                    <Link
                        component="button"
                        variant="body2"
                        onClick={() => {
                            console.info("I'm a button.");
                        }}
                        >
                        Hyperfocus
                    </Link>
                    </ListItem>
                    <ListItem>
                    <Link
                        component="button"
                        variant="body2"
                        onClick={() => {
                            console.info("I'm a button.");
                        }}
                        >
                        Daydreaming
                    </Link>
                    </ListItem>
                </List>
          </Item>
        </Grid>

        

        

      </Grid>
    </Box>
  );
}
