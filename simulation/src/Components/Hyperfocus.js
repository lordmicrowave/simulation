import React from 'react';
  
//importing typewriter-effect
import Typewriter from "typewriter-effect";
import '../Styling/typewriter.css';

//stylesheets
import '../Styling/hyperfocus.css';

//eat popup
const eatTimeout = setTimeout(eatReminder, 3000);

function eatReminder() {
  document.getElementById("eat").style.visibility = "visible"
}
//

//google popup
const googTimeout = setTimeout(googleReminder, 5000);

function googleReminder() {
  document.getElementById("google").style.visibility = "visible"
}

//drink popup
const drinkTimeout = setTimeout(drinkReminder, 7000);

function drinkReminder() {
  document.getElementById("drink").style.visibility = "visible"
}
//

//bathroom popup
const bathroomTimeout = setTimeout(bathroomReminder, 9000);

function bathroomReminder() {
  document.getElementById("bathroom").style.visibility = "visible"
}
//

//pee popup
const peeTimeout = setTimeout(peeReminder, 11000);

function peeReminder() {
  document.getElementById("pee").style.visibility = "visible"
}
//

//reminder
const breakTimeout = setTimeout(breakReminder, 13000);

function breakReminder() {
  document.getElementById("break").style.visibility = "visible"
}
//

//eat reminder
const foodTimeout = setTimeout(foodReminder, 15000);

function foodReminder() {
  document.getElementById("food").style.visibility = "visible"
}


const timedPopup = setTimeout(showPopup,4000);

function showPopup() {
  document.getElementById("reminder").style.visibility = "visible";
}




//close window
function closePopup() {
  var x = document.getElementById("close");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
  
function Hyperfocus() {
  return (
  

    <div className="Text">
      
        <div id="eat">
          <div id="close" class="window">
              <div class="title-bar">
                <div class="title-bar-text">Executive [Dys]function Wizard</div>
                <div class="title-bar-controls">
                  <button aria-label="Minimize"></button>
                  <button aria-label="Maximize"></button>
                  <button aria-label="Close" onClick={() => {
                    closePopup();
                  }}></button>
                </div>
              </div>
              <div class="window-body">
                <p>You haven't eaten in a lot of hours</p>
                <button class="dialogueBtn" id="close" onClick={() => {
                    closePopup();
                  }}>Not hungry</button>
                <button class="dialogueBtn" id="close" onClick={() => {
                    closePopup();
                  }}>So?</button>
              </div>
            </div>
        </div>


        <div id="google">
          <div id="close" class="window">
              <div class="title-bar">
                <div class="title-bar-text">Executive [Dys]function Wizard</div>
                <div class="title-bar-controls">
                  <button aria-label="Minimize"></button>
                  <button aria-label="Maximize"></button>
                  <button aria-label="Close" onClick={() => {
                    closePopup();
                  }}></button>
                </div>
              </div>
              <div class="window-body">
                <p>Time to go Google some cool stuff!</p>
                <button class="dialogueBtn" id="close" onClick={() => {
                    closePopup();
                  }}>No time. In the zone</button>
                <button class="dialogueBtn" id="close" onClick={() => {
                    closePopup();
                  }}>I've Googed everything<br/> in the world</button>
              </div>
            </div>
        </div>


        <div id="drink">
          <div id="close" class="window">
              <div class="title-bar">
                <div class="title-bar-text">Executive [Dys]function Wizard</div>
                <div class="title-bar-controls">
                  <button aria-label="Minimize"></button>
                  <button aria-label="Maximize"></button>
                  <button aria-label="Close" onClick={() => {
                    closePopup();
                  }}></button>
                </div>
              </div>
              <div class="window-body">
                <p>You're like super dehydrated. <br/> Did you know that?</p>
                <button class="dialogueBtn" id="close" onClick={() => {
                    closePopup();
                  }}>Yes?</button>
                <button class="dialogueBtn" id="close" onClick={() => {
                    closePopup();
                  }}>Let me finish this first</button>
              </div>
            </div>
        </div>


        <div id="bathroom">
          <div id="close" class="window">
              <div class="title-bar">
                <div class="title-bar-text">Executive [Dys]function</div>
                <div class="title-bar-controls">
                  <button aria-label="Minimize"></button>
                  <button aria-label="Maximize"></button>
                  <button aria-label="Close" onClick={() => {
                    closePopup();
                  }}></button>
                </div>
              </div>
              <div class="window-body">
                <p>Bathroom Break!</p>
                <button class="dialogueBtn" id="close" onClick={() => {
                    closePopup();
                  }}>In a minute</button>
                <button class="dialogueBtn" id="close" onClick={() => {
                    closePopup();
                  }}>I can hold it</button>
              </div>
            </div>
        </div>


        <div id="pee">
          <div id="close" class="window">
              <div class="title-bar">
                <div class="title-bar-text">Executive [Dys]function</div>
                <div class="title-bar-controls">
                  <button aria-label="Minimize"></button>
                  <button aria-label="Maximize"></button>
                  <button aria-label="Close" onClick={() => {
                    closePopup();
                  }}></button>
                </div>
              </div>
              <div class="window-body">
                <p>No seriously. You need to pee.</p>
                <button class="dialogueBtn" id="close" onClick={() => {
                    closePopup();
                  }}>I'll pee when I'm done</button>
              </div>
            </div>
        </div>


        <div id="break">
          <div id="close" class="window">
              <div class="title-bar">
                <div class="title-bar-text">Executive [Dys]function Wizard</div>
                <div class="title-bar-controls">
                  <button aria-label="Minimize"></button>
                  <button aria-label="Maximize"></button>
                  <button aria-label="Close" onClick={() => {
                    closePopup();
                  }}></button>
                </div>
              </div>
              <div class="window-body">
                <p>Uh. You probably forgot but <br/> I'm here to remind you <br/> to go pee...</p>
                <button class="dialogueBtn" id="close" onClick={() => {
                    closePopup();
                  }}>I transcend the limitations <br/>of bodily functions!</button>
                <button class="dialogueBtn" id="close" onClick={() => {
                    closePopup();
                  }}>I said in a minute</button>
              </div>
            </div>
        </div>

        
        <div id="food">
          <div id="close" class="window">
              <div class="title-bar">
                <div class="title-bar-text">Executive [Dys]function Wizard</div>
                <div class="title-bar-controls">
                  <button aria-label="Minimize"></button>
                  <button aria-label="Maximize"></button>
                  <button aria-label="Close" onClick={() => {
                    closePopup();
                  }}></button>
                </div>
              </div>
              <div class="window-body">
                <p>Btw you still haven't eaten...</p>
                <button class="dialogueBtn" id="close" onClick={() => {
                    closePopup();
                  }}>Okay</button>
                <button class="dialogueBtn" id="close" onClick={() => {
                    closePopup();
                  }}>No time. My focus<br/> fuels me</button>
              </div>
            </div>
        </div>

        <div id="reminder">
          <div id="close" class="window">
            <div class="title-bar">
              <div class="title-bar-text">A Window With Stuff In It</div>
              <div class="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Maximize"></button>
                <button aria-label="Close" onClick={() => {
                  closePopup();
                }}></button>
              </div>
            </div>
            <div class="window-body">
              <p>This shows stuff is appearing</p>
              <button class="dialogueBtn" id="close" onClick={() => {
                  closePopup();
                }}>Not hungry</button>
              <button class="dialogueBtn" id="close" onClick={() => {
                  closePopup();
                }}>So?</button>
            </div>
          </div>
        </div>
      <div class="typewriter-effect">
      <Typewriter 
      options={{loop: true,}}
  
       onInit={(typewriter)=> {
  
       typewriter

       
        
       .typeString("Hyperfocus state initiated")
       .pauseFor(1000)
       .deleteAll()
       .typeString("<b>Application:<b/> hyperfocus.exe<br/><b>Comment:<b/><br/>You selected TASK-ID:<br/><hyperfocus>conscious.stream$013A<br/><br/>.exe simulating one track mind in state of hyperfocus. [Enter]<br/><br/><b>debug1:<b/> You need dopamine to protect your secret key<br/><b>debug1:<b/> all attention is focused on task : losing track of time : awareness + surroundings<br/><b>debug1:<b/> hyperfocus : concentration broken cannot be retrieved<br/><br/> This state of mind is one of deep concentration on any kind of task - usually one of interest. <br/><br/><b>gpg:<b/> checking concentration levels<br/><b>gpg: depth:<b/> 0 valid: 5 signed: 5 trust: 0-, 0q, 0n, 0f<br/><b>gpg:<b/> depth: 1 valid: 3 signed: 0 trust: 5-, 0q, 0n, 0f<br/>key fingerprint = 7F0C 9FC5 YMCA 2104<br/>sub    48996R/D805E319 2022-11-23 [expires 2023-04-21]<br/>")
       .changeDelay(2500)
       .start();
       
       }}
       />
      </div>
    </div>
    
  );
}
  
export default Hyperfocus;