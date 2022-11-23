import * as React from 'react';
//MUI Components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

//Images
import logo from '../Assets/adhdlogo.png';

//CSS
import '../Styling/homepage.css';


const pages = ['Home', 'Blog', 'References', 'About', 'Contact Me'];
//const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
//  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
//  const handleOpenUserMenu = (event) => {
//    setAnchorElUser(event.currentTarget);
//  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

//  const handleCloseUserMenu = () => {
//    setAnchorElUser(null);
//  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         
            
        
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
