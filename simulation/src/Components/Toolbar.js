//sounds from vsthemes.org -> Interface -> Sound schemes

import * as React from 'react';
//MUI Components
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import ButtonGroup from '@mui/material/ButtonGroup';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

//JS
import Tabs from './Tabs';

//CSS
import "xp.css/dist/XP.css";
import '../Styling/toolbar.css';

//Images
import Back from '../Assets/Icons/Back.png';
import Forward from '../Assets/Icons/Forward.png';
import url from '../Assets/Icons/URL.png';
import Go from '../Assets/Icons/Go.png';
import Stop from '../Assets/Icons/IE Stop.png';
import Refresh from '../Assets/Icons/IE Refresh.png';
import Home from '../Assets/Icons/IE Home.png';
import Printer from '../Assets/Icons/Printer.png';
import Discuss from '../Assets/Icons/IE Discuss.png';
import Settings from '../Assets/Icons/Additional Settings.png';
import Connection from '../Assets/Icons/Connection Status.png';
import Mail from '../Assets/Icons/Email.png';
import Search from '../Assets/Icons/Search.png';
import Favourites from '../Assets/Icons/Favorites.png';
import History from '../Assets/Icons/IE History.png';
import Key from '../Assets/Icons/Key.png';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

//url bar
//const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];
//

function refreshPage() {
  window.location.reload(false);
}

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function historyDropdown() {
    var y = document.getElementById("dropdown");
    if (y.style.display === "block") {
      y.style.display = "none";
    } else {
      y.style.display = "block";
    }
  }

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
    
    <Container maxWidth="auto">
    <Box component="span">
    

    <div class="window">
        <div class="title-bar">
            <div class="title-bar-text">ADHD Explorer</div>
            <div class="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
            </div>
        </div>
        <div class="window-body">
          <div class="header">
            <ButtonGroup variant="text" aria-label="text button group">
                <Link class="browser-headers" id="disabled-headers">File</Link>
                <Link class="browser-headers" id="disabled-headers">Edit</Link>
                <Link class="browser-headers" id="disabled-headers">View</Link>
                <Link class="browser-headers" onClick={() => {historyDropdown();}}>History</Link>
                <Link class="dropbtn"><p class="browser-headers">Help</p></Link>
                <img class="key-icon" src={Key} alt="key" onClick={() => {myFunction();}}/>
            </ButtonGroup>
          </div>

                <div id="myDIV">
                <div class="window">
                    <div class="title-bar">
                        <div class="title-bar-text">A Window With Stuff In It</div>
                        <div class="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close"></button>
                        </div>
                    </div>
                    <div class="window-body">
                        <p>Popup content</p>
                    </div>
                    </div>
                </div>
      
            
            <Divider component="li"/>
            <div class="level-two">
            <ButtonGroup>
                <img class="back-icon" src={Back}  alt="back"/>
                    <p class="back-text">Back <ArrowDropDownIcon class="dropdown-arrow"/></p>
                <img class="back-icon" src={Forward}  alt="forward"/>

            <ButtonGroup class="nav-buttons" aria-label="outlined button group">               
                <img class="refresh-icon" src={Stop} alt="stop"/>
                <img class="refresh-icon" src={Refresh} alt="refresh" onClick={() => {refreshPage();}}/>
                <img class="refresh-icon" src={Home} alt="home"/>
            </ButtonGroup>
            <Divider orientation="vertical" variant="middle" flexItem/>
            </ButtonGroup>
            <ButtonGroup >
                <img class="toolbar-widgets-img" src={Mail} alt="mail"/>
                    <p class="toolbar-text">Mail</p>
                <img class="toolbar-widgets-img" src={Search} alt="search"/>
                    <p class="toolbar-text">Search</p>
                <img class="toolbar-widgets-img" src={Favourites} alt="faves"/>
                    <p class="toolbar-text">Favourites</p>
                <img class="toolbar-widgets-img" src={History} alt="history"/>
                    <p class="toolbar-text">History</p>
            <Divider class="divider-space" orientation="vertical" variant="middle" flexItem/>
            <ButtonGroup>
                <img class="toolbar-widgets-img-2" src={Printer} alt="printer"/>
                <img class="toolbar-widgets-img-2" src={Discuss} alt="discuss"/>
                <img class="toolbar-widgets-img-2" src={Settings} alt="settings"/>
                <img class="toolbar-widgets-img-2" src={Connection} alt="connection"/>
            </ButtonGroup>
            
            </ButtonGroup>
            </div>
            <Divider component="li"/>
            <div class="level-three">
            <ButtonGroup>
            <p class="address-text">Address</p>
            <Divider orientation="vertical" variant="middle" flexItem/>
            <img class="url-icon" src={url}  alt="urlicon"/>
            <select class="search-bar">
                        <option>
                          https://adhdsimulator.com
                          </option>
                        <option>
                          https://adhdsimulator.com/zoneout
                        </option>
                        <option>
                          https://adhdsimulator.com/app/Hyperfocus#Terminal
                        </option>
                        <option>
                          https://adhdsimulator.com/to-do/list.asp?filename=to_do_list
                        </option>
                        <option>
                          https://adhdsimulator.com/sensory-overload-3900231090
                        </option>
                        <option>
                          https://adhdsimulator.com/daydreaming
                        </option>
                        <option>
                          https://adhdsimulator.com/what-the-internet-looked-like-in-2000-az13!@$_
                        </option>
                </select>
            <img class="go-icon" src={Go} alt="go"></img>
            <p class="go-text">Go</p>
            <Divider orientation="vertical" variant="middle" flexItem/>
            </ButtonGroup>
            
            
            <ButtonGroup>
            <p class="link-text">Links
            <KeyboardDoubleArrowRightIcon class="link-arrow"/>
            </p>
            </ButtonGroup>
            </div>
           <Tabs/>

            

            
            
        </div>
    </div>

    </Box>
    </Container>
  );
}