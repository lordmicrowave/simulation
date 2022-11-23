import * as React from 'react';
import Box from '@mui/material/Box';
import '../Styling/daydreaming.css';

//images
import barcode from '../Assets/barcode.png';
import circleFrame from '../Assets/circleframe.png';
import click from '../Assets/click.png';
import door from '../Assets/door.png';
import filmstrip from '../Assets/filmstrip.png';
import hearts from '../Assets/hearts.png';
import lawn from '../Assets/lawn.png';
import paper from '../Assets/paper.png';
import parallax from '../Assets/parallax-stars.png';
import pinkclouds from '../Assets/pinkclouds.png';
import ripPaper from '../Assets/rip-paper.png';
import roseFrame from '../Assets/roseframe.png';
import sonyTV from '../Assets/sonytv.png';
import squareFrame from '../Assets/squareframe.png';
import stars from '../Assets/stars.png';
import stickyNote from '../Assets/stickynote.png';
import cloudStars from '../Assets/cloudstars.gif';
import disk from '../Assets/disk.gif';
import rainbowCloud from '../Assets/rainbowoncloud.gif';
import roadhouse from '../Assets/roadhouse.gif';
import simblob from '../Assets/simblob.gif';
import spinStar from '../Assets/spinstar.gif';
import loveLetter from '../Assets/LOVE001.GIF';
import sparklesGold from '../Assets/sparkles-gold.gif';
import sparkler from '../Assets/sparkles.gif';
import petals from '../Assets/cherry.gif';
import cd from '../Assets/cd.gif';
import overthink from '../Assets/overthink.gif';
import Fantasies from '../Assets/Icons/My Pictures.png';
import Trauma from '../Assets/Icons/Explorer.png';
import Projects from '../Assets/Icons/Scheduled Tasks.png';
import Memories from '../Assets/Icons/My Videos.png';
import Secrets from '../Assets/Icons/Delete Confirmation.png';
import Folder from '../Assets/Icons/Folder Opened.png';
import Progress from '../Assets/ProgressIndicator.gif';
import Awesome from '../Assets/awesome.png';
import Portal from '../Assets/portal.gif';
// 



// When the user clicks on affirmation button, awesome text appears
function horizontalWindow() {
  var x = document.getElementById("horizontalDiv");
  if (window.getComputedStyle(x).display === "none") {
    x.style.display = "block";
  }
}

// Click On button and gif/video will play on Sony TV
function tvToggle() {
  var y = document.getElementById("tv");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}

export default function BoxSx() {
  return (
    <span class="container">
    <Box>
       
      <div class="text">
          
          <button class="affirmation" onClick={() => {
            horizontalWindow();
            }}>My therapist told me to practise saying my affirmations...</button>
          <div id="horizontalDiv">
          <img class="Awesome" src={Awesome} alt="awesome"/>
          </div>

          <p class="letters">Love letters to myself</p>
        <div class="list">
          <h6>List of songs stuck in my head</h6>
          <p>Gwen Stefani - Sweet Escape</p>
          <br/>
          <p>Cotton-eyed Joe</p>
        </div>
          <p class="fantasies-text">Fantasies</p>
          <p class="memories-text">Fave mem'ries</p>
          <p class="secrets-text"> My deepest darkest secrets</p>
          <p class="trauma-text"> Unhealed trauma</p>
          <p class="projects-text"> Unfinished DIY Projects</p>
          <p class="disk-text"> Floppy disk text</p>
          <p class="notes-text"> Sticky notes text</p>
          <p class="folder-text"> Folder text</p>
          <p class="glow-text-one"> Glowing text</p>
          <p class="glow-text-two"> Glowing text</p>
          <p class="glow-text-three"> Glowing text</p>
          <p class="glow-text-four"> Glowing text</p>
      </div>

        <img class="barcode" src={barcode} alt="barcode"/>
        <img class="circleFrame" src={circleFrame} alt="cframe"/>
        <img class="click" src={click} alt="click"/>
        <img class="door" src={door} alt="door"/>
        
        <img class="filmstrip" src={filmstrip} alt="filmstrip"/>

        <div class="filmstrip-content-one"> 
          <div class="filmGIF">Hover display</div>
          <div class="hide">This will reveal a div gif</div> 
        </div>
        <div class="filmstrip-content-two">
          <div class="filmGIF-two">Hover display two</div>
          <div class="hide">This will reveal a second div gif</div>
        </div>
        

        <img class="hearts" src={hearts} alt="hearts"/>
        <img class="lawn" src={lawn} alt="lawn"/>        
        <img class="paper" src={paper} alt="paper"/>
        <img class="parallax" src={parallax} alt="parallax"/>

        <marquee behavior="scroll" direction="right" scrollamount="5" class="pinkclouds">
        <img  src={pinkclouds} alt="pclouds"/>
        </marquee>
        <marquee behavior="scroll" direction="right" scrollamount="7" class="pinkclouds-two">
        <img  src={pinkclouds} class="pinkcloud-two-size" alt="pclouds"/>
        </marquee>

        <img class="ripPaper" src={ripPaper} alt="rpaper"/>
        <img class="roseFrame" src={roseFrame} alt="roseframe"/> 

        <img class="sonyTV" src={sonyTV} alt="tv"/>
        <button class="tvButton" onClick={() => {tvToggle();}}>Try it</button>
        <div id="tv">
          <p class="tvScreen">This is a DIV element that jumps</p>
        </div>

        <img class="squareFrame" src={squareFrame} alt="sframe"/>
        <img class="stars" src={stars} alt="stars"/>
        <img class="stickyNote" src={stickyNote} alt="note"/>       
        <img class="cloudStars" src={cloudStars} alt="cstars"/>
        <img class="disk" src={disk} alt="disk"/>              
        <img class="rainbowCloud" src={rainbowCloud} alt="rainbow"/>
        <img class="roadhouse" src={roadhouse} alt="roadhouse"/>
        <img class="simblob" src={simblob} alt="sims"/>
        <img class="spinStar" src={spinStar} alt="spin"/>
        <img class="loveLetter" src={loveLetter} alt="letter"/>
        <img class="sparklesGold" src={sparklesGold} alt="gold"/>
        <img class="sparklesGold-two" src={sparklesGold} alt="gold"/>
        <img class="sparkler" src={sparkler} alt="sparkler"/>
        <img class="petals" src={petals} alt="petals"/>
        <img class="cd" src={cd} alt="cd"/>
        <img class="overthink" src={overthink} alt="think"/>
        <img class="Fantasies" src={Fantasies} alt="fantasy"/>
        <img class="Trauma" src={Trauma} alt="trauma"/>
        <img class="Projects" src={Projects} alt="project"/>
        <img class="Memories" src={Memories} alt="memories"/>
        <img class="Secrets" src={Secrets} alt="secrets"/>
        <img class="Folder" src={Folder} alt="folder"/>
        <img class="Progress" src={Progress} alt="progress"/>
        
        <img class="Portal" src={Portal} alt="portal"/>

        <div class="falling-text"></div>
        
    </Box>
    </span>
  );
}


