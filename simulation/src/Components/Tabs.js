import * as React from 'react';
//MUI Components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

//JS
import Navbar from './Navbar';
import Homepage from './Homepage';
import ZoneOut from './ZoneOut';
import Hyperfocus from './Hyperfocus';
import NotFound from './NotFound';
import SensoryOverload from './SensoryOverload';
import Daydreaming from './Daydreaming';
import Reading from './Reading';


//CSS
import "xp.css/dist/XP.css";
import '../Styling/tabs.css';
//import '../Styling/toolbar.css';
import '../Styling/static.css';
import '../Styling/zoneout.css';
import '../Styling/notfound.css';
//import '../Styling/daydreaming.css';
import '../Styling/fadeout.css';
//import '../Styling/popup.css';
import { alignProperty } from '@mui/material/styles/cssUtils';
import { blue } from '@mui/material/colors';
import { common } from '@mui/material/colors';

//Images
import Alert from '../Assets/Icons/Alert.png';
import bsod from '../Assets/ADHDbsod.gif';
import clouds from '../Assets/clouds-seamless.jpg';
import glitch from '../Assets/glitchbackground.png';
import gradient from '../Assets/gradient.png';


//bsod css
const bsodStyle={
  backgroundImage: `url(${bsod})` ,
  height:'100vh',
  width: '100vh',
  marginTop:'-13px',
  paddingRight: '500px',
  
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  color: blue,
};

//clouds css
const cloudsStyle={
  backgroundImage: `url(${clouds})` ,
  height:'330vh',
  width: '90vh',
  marginTop: '-45px',
  
  paddingRight: '500px',
  backgroundSize: 'auto',
  backgroundRepeat: 'repeat',
};

//hyperfocus css
const hyperStyle={
  height:'100vh',
  width: '100vh',
  marginTop:'-13px',
  paddingRight: '500px',
  backgroundSize: 'cover',
  color: common,
};

//homepage css
const glitchStyle={
  backgroundImage: `url(${glitch})` ,
  height:'200vh',
  width: '150vh',
  marginTop: '-10px',
  
  paddingRight: '900px',
  backgroundSize: 'auto',
  backgroundRepeat: 'repeat',
};

//daydreaming css
const dreamingStyle={
  backgroundImage: `url(${gradient})` ,
  height:'1500vh',
  width: '150vh',
  marginTop: '-10px',
  
  paddingRight: '900px',
  backgroundSize: 'auto',
  backgroundRepeat: 'no-repeat',
};

  //html tooltip
  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));


  //tab content
  document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll("menu[role=tablist]");
    
    for (let i = 0; i < tabs.length; i++) {
      const tab = tabs[i];
    
      const tabButtons = tab.querySelectorAll("menu[role=tablist] > button");
    
      tabButtons.forEach((btn) =>
        btn.addEventListener("click", (e) => {
          e.preventDefault();
    
          tabButtons.forEach((button) => {
            if (
              button.getAttribute("aria-controls") ===
              e.target.getAttribute("aria-controls")
            ) {
              button.setAttribute("aria-selected", true);
              openTab(e, tab);
            } else {
              button.setAttribute("aria-selected", false);
            }
          });
        })
      );
    }
      
    });
    
    
    function openTab(event, tab) {
      const articles = tab.parentNode.querySelectorAll('[role="tabpanel"]');
      articles.forEach((p) => {
        p.setAttribute("hidden", true);
      });
      const article = tab.parentNode.querySelector(
        `[role="tabpanel"]#${event.target.getAttribute("aria-controls")}`
      );
      article.removeAttribute("hidden");
    }
    
//    

export default function BoxComponent() {


  return (
    
    <Container class="window-tabs" maxWidth="auto">
    <Box component="span">
        <div >
            <div class="window-body">
                <menu role="tablist">
                    <Tooltip title="Homepage">
                        <button aria-selected="true" aria-controls="Homepage">Homepage</button>
                    </Tooltip>
                    <Tooltip title="I'm sorry what?">
                        <button aria-controls="Zoneout">Zone Out</button>
                    </Tooltip>
                    <Tooltip title="Hyperfocus - 9hrs of total absorption completing one task">
                        <button aria-controls="Hyperfocus">Hyperfocus</button>
                    </Tooltip>
                    <Tooltip title="To-Do List - Time to get sh*t done">
                        <button aria-controls="Todolist">To-Do List</button>
                    </Tooltip>
                    <Tooltip title="Sensory Overload - under construction">
                        <button aria-controls="Sensory Overload">Sensory Overload</button>
                    </Tooltip>
                    <Tooltip title="Daydreaming - What's on your mind, friend?">
                        <button aria-controls="Daydreaming">Daydreaming</button>
                    </Tooltip>
                    <Tooltip title="Reading - An attempt at reading a long piece of text">
                        <button aria-controls="Reading">Reading</button>
                    </Tooltip>
                    <HtmlTooltip
                    title={
                      <React.Fragment>
                        <img class="alert-icon" src={Alert} alt="alerticon"/>   
                        <p class="html-tip-txt" color="inherit">
                        Unable to execute file in the <b>Memory directory</b>.
                        Setup aborted.</p>
                        
                        <b class="html-tip-txt">{'Error 5:'}</b>{" Access denied."}
                      </React.Fragment>
                    }
                  >
                    <button disabled aria-controls="Memories">Memories</button>
                  </HtmlTooltip>
                    <Tooltip title="Open a new tab">
                        <button disabled aria-controls="New Tab">+</button>
                    </Tooltip>  
                </menu>

                <article role="tabpanel" id="Homepage">
                    
                    <div style={glitchStyle}>
                    <Homepage/>
                </div>
                </article>

                <article role="tabpanel" hidden id="Zoneout">
                    <ZoneOut/>
                </article>

                <article role="tabpanel" hidden id="Hyperfocus">
                    
                    <Hyperfocus/>
                    
                </article>

                <article role="tabpanel" hidden id="Todolist">
                <div style={bsodStyle}>
                <NotFound/>
                </div>
                </article>

                <article role="tabpanel" hidden id="Sensoryoverload">
                    <Box class="container" sx={{width: 300, height: 300}}>
                    <SensoryOverload/>
                    </Box>
                </article>

                <article role="tabpanel" hidden id="Daydreaming">
                <div style={dreamingStyle}>
                    <Daydreaming/>
                  </div> 
                </article>

                <article role="tabpanel" hidden id="Reading">
                  <div style={cloudsStyle}>
                    <Reading/>
                   </div> 
                </article>

            </div>
        </div>
    </Box>
    </Container>
  );
}