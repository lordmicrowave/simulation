import * as React from 'react';

import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { tooltipClasses } from '@mui/material/Tooltip';


import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';


//import NavBar from './NavBar';
//import Homepage from './Homepage';
//import Hyperfocus from './Hyperfocus';
//import NotFound from './NotFound';
//import Reading from './Reading';
//import SensoryOverload from './SensoryOverload';
//import ZoneOut from './ZoneOut';
//import Daydreaming from './Daydreaming';



//import '../Styling/daydreaming.css';
//import '../Styling/toolbar.css';
//import '../Styling/notfound.css';
//import '../Styling/fadeout.css';
//import '../Styling/zoneout.css';
//import '../Styling/popup.css';
//import '../Styling/static.css';
import "xp.css/dist/XP.css";


import bsod from '../Assets/BSOD.gif'

import mainerror from '../Assets/main_error.gif';
//import toolbar from '../Assets/toolbar.png';

import Link from '@mui/material/Link';
import { blue } from '@mui/material/colors';





function TabPanel(props) {
  const { children, value, index, ...other } = props;



  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const preventDefault = (event) => event.preventDefault();

// Memories tooltip
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

//bsod css
const bsodStyle={
  backgroundImage: `url(${bsod})` ,
  height:'100vh',
  marginTop:'-15px',
  fontSize:'20px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  color: blue,
};


export default function ScrollableTabsButtonVisible() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
      }}
    >
      

      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}
      >
        <Tooltip title="Homepage">
        <Tab label="ADHD Simulator" {...a11yProps(0)} />
        </Tooltip>

        <Tooltip title="I'm sorry what?">
        <Tab label="Zone Out" {...a11yProps(1)} />
        </Tooltip>
        
        <Tooltip title="Hyperfocus - 9hrs of total absorption completing one task">
        <Tab label="Hyperfocus" {...a11yProps(2)} />
        </Tooltip>

        <Tooltip title="To-Do List - Time to get sh*t done">
        <Tab label="To-Do List" {...a11yProps(3)} />
        </Tooltip>

        <Tooltip title="Let's get lost looking at cool stuff">
        <Tab label="The Rabbit Hole" {...a11yProps(4)} />
        </Tooltip>

        <Tooltip title="Sensory Overload - let's have a melt down">
        <Tab label="Sensory Overload" {...a11yProps(5)} />
        </Tooltip>

        <Tooltip title="Daydreaming - What's on your mind, friend?">
        <Tab label="Daydreaming" {...a11yProps(6)} />
        </Tooltip>

        <Tooltip title="Reading - An attempt at reading a long piece of text">
        <Tab label="Reading" {...a11yProps(7)} />
        </Tooltip>

        <HtmlTooltip class="wait" title={
          <React.Fragment>
            <Typography>Memories cannot be accessed</Typography>
            </React.Fragment>
        }>
          <Tab class="wait" label="Memories"/>
          </HtmlTooltip>     
      </Tabs>
    </Box>
    

    

    <TabPanel value={value} index={0}>
        <NavBar/>
        <Homepage/>
      </TabPanel>

      <TabPanel value={value} index={1}>
        
        <ZoneOut/>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Hyperfocus/>
      </TabPanel>

      <TabPanel value={value} index={3}>

      <div style={bsodStyle}>
      <img src={mainerror} alt="ErrorGif" />
        Page Not Found <br></br>
        <br></br>This could be due to memory loss. Or misplacing the list. Or the file being corrupted...
        <Box
          sx={{
            typography: 'body1',
            '& > :not(style) + :not(style)': {
              ml: 2,
            },
          }}
          onClick={preventDefault}
        >
        <br></br>Head back to the 
        <Link href="#"> Homepage</Link>
        </Box>
        <progress max="100" class="loadinggreen"></progress>
        
        <NotFound/>
      </div>
      
      </TabPanel>

      <TabPanel value={value} index={4}>
        The Rabbit Hole - an infinite scroller of different media arranged in a two-column grid
      </TabPanel>

      <TabPanel value={value} index={5}>
        Sensory Overload
        <SensoryOverload/>
      </TabPanel>

      <TabPanel value={value} index={6} id="background">
        <Box>
          <div>            
              <a href="https://www.cameronsworld.net/" >
                Inspiration for this page
              </a>           
          </div>
          <Daydreaming/>
        </Box>       
      </TabPanel>

      <TabPanel value={value} index={7}>
        <div class="above">
      </div>
        <Reading/>
      </TabPanel>
        
      
    </Box>
    
  );
}


