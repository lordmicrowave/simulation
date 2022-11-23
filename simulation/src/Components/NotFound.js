import * as React from 'react';

//Components
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import CircularProgress from '@mui/material/CircularProgress';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';

//CSS
import '../Styling/notfound.css';
import { blue } from '@mui/material/colors';

//Images
import bsod from '../Assets/ADHDbsod.gif';
import mainerror from '../Assets/main_error.gif';

//bsod css
const bsodStyle={
  backgroundImage: `url(${bsod})` ,
  height:'100vh',
  width: '100vh',
  marginTop:'-13px',
  paddingRight: '500px',
  fontSize:'20px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  color: blue,
};



export default function VariantButtonGroup() {
    const [loading, setLoading] = React.useState(false);
  const [query, setQuery] = React.useState('idle');
  const timerRef = React.useRef();

  React.useEffect(
    () => () => {
      clearTimeout(timerRef.current);
    },
    [],
  );

  const handleClickLoading = () => {
    setLoading((prevLoading) => !prevLoading);
  };

  const handleClickQuery = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (query !== 'idle') {
      setQuery('idle');
      return;
    }

    setQuery('progress');
    timerRef.current = window.setTimeout(() => {
      setQuery('success');
    }, 2000);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ height: 40 }}>
      
      <img class="error" src={mainerror} alt="ErrorGif" />

        <Fade
          in={loading}
          style={{
            transitionDelay: loading ? '800ms' : '0ms',
          }}
          unmountOnExit
        >
          <CircularProgress />
        </Fade>
      </Box>
      
      <div class="refresh-btn">
      <Box sx={{ height: 55 }} >
        {query === 'success' ? (
          <Alert severity="error">Error! Brain failed to retrieve list</Alert>
          
        ) : (
          <Fade 
            in={query === 'progress'}
            style={{
              transitionDelay: query === 'progress' ? '800ms' : '0ms',
            }}
            unmountOnExit
          >
            <CircularProgress color="success"/>
          </Fade>
        )}
      </Box>
      <Button onClick={handleClickQuery} sx={{ m: 3 }}>
        {query !== 'idle' ? 'Refresh' : 'Reload To-Do List'}
      </Button>
      <br/>
        
      </div>     
    </Box>

    
  );
}