import * as React from 'react';
import ReactDOM from "react-dom";
import $ from 'jquery';
//MUI Components
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { tooltipClasses } from '@mui/material/Tooltip';

//CSS
import '../Styling/zoneout.css';
import '../Styling/static.css';

//Images
import noSignal from '../Assets/no-signal-tv.gif';
import staticBars from '../Assets/static-bars.gif';
import notification from '../Assets/notification-sound-7062.mp3';

//Sound
import nosignal from '../Assets/audio/tv-no-signal.mp3';

//sound on click

//end

// Memories tooltip
const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'transparent',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
    },
  }));
  //

export default function SimplePopper() {
    //toggle popper
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const hello = open ? 'simple-popper' : undefined;
  // end



  return (
    <Box>
     

      <div class="tv-static"></div>
      <div class="tv-static-two"></div>

        <div>
            <p class="hey" aria-describedby={hello} type="button" onClick={handleClick}>
                helloooooo
            </p>
            <Popper id={hello} open={open} anchorEl={anchorEl} placement="top">
                <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                    Content to be inserted
                </Box>
            </Popper>
        </div>

        
        <p class="muffles">*muffled voices*</p>

        
        
        

        <p class="huh">huh? what?</p>
        <div class="huh">
        <HtmlTooltip title={
          <React.Fragment>
            <p class="huh">huh? what?</p>
            <img src={noSignal} alt="static"/>
            </React.Fragment>
        }>
            <p class="huh">huh? what?</p>
          </HtmlTooltip>
          </div>

          
          

        <p class="what">did somebody say something...?</p>

        <p class="question">?????????</p>
        <div class="question">
        <HtmlTooltip title={
          <React.Fragment>
            <p class="question">?????????</p>
            <img src={staticBars} alt="static"/>
            </React.Fragment>
        }>
            <p class="question">?????????</p>
          </HtmlTooltip>
          </div>

        <p class="sound-one">????!... ????</p>

        <p class="sound-two">mmhmhh...??????</p>
    </Box>
  );
}

