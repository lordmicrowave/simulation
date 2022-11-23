import * as React from 'react';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';


import '../Styling/sensoryoverload.css';


 

// repeated settimeouts
setTimeout(myTimeout1, 2000) 
setTimeout(myTimeout2, 6000) 
setTimeout(myTimeout3, 8000)
setTimeout(myTimeout4, 11000) 
setTimeout(myTimeout5, 13000)  

function myTimeout1() {
  document.getElementById("alert-one").innerHTML = "2 seconds";
}
function myTimeout2() {
  document.getElementById("alert-two");
}
function myTimeout3() {
  document.getElementById("alert-three").innerHTML = "8 seconds";
}
function myTimeout4() {
  document.getElementById("alert-four").innerHTML = "11 seconds";
}
function myTimeout5() {
  document.getElementById("alert-five").innerHTML = "13 seconds";
}


//html tooltip constant//
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
//

// When the user clicks on div, open the popup
function horizontalWindow() {
  var x = document.getElementById("horizontalDiv");
  if (window.getComputedStyle(x).display === "none") {
    x.style.display = "block";
  }
}


//timed popups
//const myTimeouts = setTimeout(timePopup, 5000);

//function timePopup() {
//  document.getElementById("demo").innerHTML = "Happy Birthday!"
//}
//

export default function BasicButtons() {
  

  return (
    <Box class="contents">

      

      <p id="text">I will display when two, four, and six seconds have passed.</p>
      <div class="alert-three">
      <div class="window" >
      <div class="title-bar">
        <div class="title-bar-text">A Window With Stuff In It</div>
        <div class="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div class="window-body">
        <p>There's so much room for activities!</p>
      </div>
    </div>
    </div>

    <h2 id="demo">remove this</h2>

      <div class="myDIV">Hover display</div>
      <div class="hide">This will reveal a div of fullscreen gif</div> 
     
      <button onClick={() => {
        horizontalWindow();
      }}>H-moving Window</button>

      <div id="horizontalDiv">
        <div class="h-moving-window">
                <div class="window" >
            <div class="title-bar">
              <div class="title-bar-text">Intrusive Thoughts</div>
              <div class="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Maximize"></button>
                <button aria-label="Close"></button>
              </div>
            </div>
            <div class="window-body">
              <p>There's so much room for activities!</p>
            </div>
          </div>
        </div>
      </div>

      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Tooltip with HTML</Typography>
            <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
            {"It's very engaging. Right?"}
          </React.Fragment>
        }
      >
        <Button>HTML</Button>
      </HtmlTooltip>

      
   
    
    <Button
    onClick={() => {
      alert('everything is too much');
    }}
    >
        Alert button
        
    </Button>
    
    <Box  sx={{ width:800, height: 300, p: 2, border: '1px dashed grey' }}>
    
    
    
        
      </Box>
    
    </Box>
  );
}